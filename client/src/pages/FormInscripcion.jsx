import '../css/FormInscrip.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const FormInscripcion = () => {
  const { ruta, id } = useParams();
  const [datos, setDatos] = useState([]);

  useEffect(() => {
  //  console.log("Ruta:", ruta, "ID:", id); // Verifica los valores
    const fetchDatos = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${ruta}/${id}`);
        // console.log("Datos recibidos:", response.data[0]);
        setDatos(response.data[0]);
      } catch (error) {
        console.error("Error al obtener los detalles:", error);
      }
    };

    fetchDatos();
  }, [ruta, id]);

  if (!datos) return <p>Cargando detalles...</p>;

  // POST DEL FORMULARIO
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [origen, setOrigen] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [comentario, setComentario] = useState("");
  // MENSAJES DE ERROR
  const [mensaje, setMensaje] = useState(""); // Exito de server
  const [error, setError] = useState(""); // Error de server
  const [formErrors, setFormErrors] = useState({}); // Error de form


  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
    // Seteo los datos importantes del 
    const tipo = datos.tipo;
    const titulo = datos.titulo;
    const linkDrive = datos.link_drive;
    const fecha = datos.fecha.split('T')[0];
    const precio = datos.precio;
    // console.log(tipo, titulo, linkDrive, fecha, precio);

    if(validarFormulario()){ // Si los campos estan validados
      // Realiza la solicitud POST
      axios
      .post("http://localhost:3001/inscripcion", { nombre, email, origen, ocupacion, comentario, tipo, titulo, linkDrive, fecha, precio })
      .then((response) => {
        // Limpia el formulario/variables
        setNombre(""); 
        setEmail("");
        setOrigen("");
        setOcupacion("");
        setComentario("");
        // Limpia los errores
        setFormErrors({});
        setError("");
        setMensaje(response.data.message); // Muestra un mensaje de éxito
        
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.error); // Mensaje de error desde el servidor
        } else {
          setError("Error en el servidor");
        }
      });
    }
  };

  // VALIDACION DE CAMPOS DEL FORM
  const validarFormulario = () => {
    const errores = {};
    const regexEmail =  /^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const regexLetras = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexWhitespace = /\s+/;
    const regexCommaList = /^([a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*(, )?)+$/;
    // const regexEmptyCommaList = /(^$)|(^[a-zA-Z\s]+(?:,[a-zA-Z\s]+)*$*$)/;
  
    // Validar email
    if (!email.trim()) {
      errores.email = 'El correo electrónico es obligatorio';
    } else if (!regexEmail.test(email)) {
      errores.email = 'El correo electrónico no es válido';
    }
    
    // Validar nombre
    if (!nombre.trim()) {
      errores.nombre = 'El nombre es obligatorio';
    } else if (!regexLetras.test(nombre)){
      errores.nombre = 'Usar solo letras y espacios';
    } else if (nombre.length < 3 || nombre.trim().length < 3) {
      errores.nombre = 'La respuesta debe tener al menos 3 caracteres';
    }

      // Validar nombre
      if (!origen.trim()) {
        errores.origen = 'Este campo es obligatorio';
      } else if (!regexCommaList.test(origen)){
        errores.origen = 'Usar solo letras, espacios y comas';
      } else if (origen.length < 3 || origen.trim().length < 3) {
        errores.origen = 'La respuesta debe tener al menos 3 caracteres';
      }

            // Validar nombre
    if (!ocupacion.trim()) {
      errores.ocupacion = 'Ingrese una respuesta por favor';
    } else if (!regexLetras.test(ocupacion)){
      errores.ocupacion = 'Usar solo letras y espacios';
    } else if (ocupacion.length < 3 || ocupacion.trim().length < 3) {
      errores.ocupacion = 'La respuesta debe tener al menos 3 caracteres';
    }

    // Validar password
    if (!comentario.trim()) {
      errores.comentario = 'Ingrese una respuesta por favor';
    } else if (comentario.length < 3 || comentario.trim().length < 3) {
      errores.comentario = 'La respuesta debe tener al menos 3 caracteres';
    }
  
    setFormErrors(errores);
    // console.log(formErrors);
    setError("");
  
    // Devuelve true si no hay errores
    return Object.keys(errores).length === 0;
  }
  
  return (
    <>
      <section className='container-fluid p-0 encode-sans-condensed-regular'>
        <div className='banner row-md container-fluid p-0'>
          <Image src={datos.image1_path} fluid  alt="imagen" className='banner-image container-fluid p-0'/>
        </div>
        <div className='infoForm-container container-sm p-4'>
          <h2 className='section-title row encode-sans-condensed-regular'>PRE-INSCRIPCIÓN PARA: {datos.titulo}</h2>
          <h3>Completa el siguiente formulario para realizar la Pre-inscripción. Realizado el envío del formulario, te aparecera un link para ver los datos de la transferencia.</h3>

          <div className='container-form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='textForm'>Nombre completo</Form.Label>
                    <Form.Control 
                    id=""
                    type="text" 
                    placeholder="Ingresa tu nombre y apellido" 
                    
                    onChange={(e) => {
                      setNombre(e.target.value);
                      formErrors.nombre = '';
                    }}
                    />
                    <Form.Text className="text-muted">
                    {formErrors && (
                      <div style={{ color: "red" }}>
                        {formErrors.nombre}
                      </div>
                    )}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='textForm'>Correo</Form.Label>
                    <Form.Control 
                    id=""
                    type="text" 
                    placeholder="Ingresa tu direccion de correo electronico" 
                    
                    onChange={(e) => {
                      setEmail(e.target.value);
                      formErrors.email = '';
                    }}
                    />
                    <Form.Text className="text-muted">
                    {formErrors && (
                      <div style={{ color: "red" }}>
                        {formErrors.email}
                      </div>
                    )}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='textForm'>¿De donde eres? (Ciudad/País)</Form.Label>
                    <Form.Control 
                    id=""
                    type="text" 
                    placeholder="Ingresa tu ciudad o país de origen" 
                    
                    onChange={(e) => {
                      setOrigen(e.target.value);
                      formErrors.origen = '';
                    }}
                    />
                    <Form.Text className="text-muted">
                    {formErrors && (
                      <div style={{ color: "red" }}>
                        {formErrors.origen}
                      </div>
                    )}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='textForm'>¿A que te dedicas?</Form.Label>
                    <Form.Control 
                    id=""
                    type="text" placeholder="Ingresa tu ocupación" 
                    
                    onChange={(e) => {
                      setOcupacion(e.target.value);
                      formErrors.ocupacion = '';
                    }}
                    />
                    <Form.Text className="text-muted">
                    {formErrors && (
                      <div style={{ color: "red" }}>
                        {formErrors.ocupacion}
                      </div>
                    )}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='textForm'>¿Cómo te enteraste del curso?</Form.Label>
                    <Form.Control 
                    id=""
                    type="text" 
                    placeholder="Ingresa tu respuesta" 
                    
                    onChange={(e) => {
                      setComentario(e.target.value);
                      formErrors.comentario = '';
                    }}
                    />
                    <Form.Text className="text-muted">
                    {formErrors && (
                      <div style={{ color: "red" }}>
                        {formErrors.comentario}
                      </div>
                    )}
                    </Form.Text>
                </Form.Group>
                <div className='row subbmitFormBtn-container'>
                    <Button variant="primary" className='subbmitFormBtn row seeMoreBtn element left' type="submit">
                        ENVIAR
                    </Button>
                </div>

            </Form>
            {mensaje && error.length == 0 && (
              <div className='text-center'>
                <p className="text-success mb-1">{mensaje}</p>
                <Link className="text-warning mb-2 fw-bold" to="/datos-bancarios">Informacion de transferencia</Link> 
              </div>
            )}
            {error && (
              <p style={{ color: "red" }}>
                • {error}
              </p>
            )}
          </div>
        </div>
            
      </section>
    </>
  )
};