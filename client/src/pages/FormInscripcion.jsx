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
    const fetchDatos = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${ruta}/${id}`);
        setDatos(response.data[0]);
      } catch (error) {
        console.error("Error al obtener los detalles:", error);
      }
    };
    fetchDatos();
  }, [ruta, id]);

  if (!datos) return <p>Cargando detalles...</p>;

  // Estado del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [origen, setOrigen] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [comentario, setComentario] = useState("");
  
  // Estado para mensajes de error y éxito
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
    
    // Seteo los datos importantes del curso
    const tipo = datos.tipo;
    const titulo = datos.titulo;
    const linkDrive = datos.link_drive;
    const fecha = datos.fecha.split('T')[0];
    const precio = datos.precio;
    const image1_path = datos.image1_path;
    const modalidad = datos.formato;
  
    if(validarFormulario()){ // Si los campos estan validados
      // Realiza la solicitud POST para la inscripción
      axios
      .post("http://localhost:3001/inscripcion", { 
        nombre, 
        email, 
        origen, 
        ocupacion, 
        comentario, 
        tipo, 
        titulo, 
        linkDrive, 
        fecha,
        image1_path, 
        modalidad,
        precio
      })
      .then(async (response) => {
        // Enviar correo de confirmación
        try {
          const emailResponse = await axios.post('http://localhost:3001/send-email', {
            nombre,
            email,
            curso: titulo,  // Aquí puedes pasar otros detalles que quieras incluir en el email
            fecha: fecha,
            image_cursoPath: image1_path,
            modalidad: modalidad,
            precio: precio,
          });
          
          // Mensaje de éxito de correo
          console.log("Correo enviado con éxito:", emailResponse.data.message);
  
        } catch (error) {
          console.error("Error al enviar el correo:", error);
          setError("Hubo un error al enviar el correo de confirmación.");
        }
  
        // Limpia el formulario/variables
        setNombre(""); 
        setEmail("");
        setOrigen("");
        setOcupacion("");
        setComentario("");
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
  

  // Validación del formulario
  const validarFormulario = () => {
    const errores = {};
    const regexEmail = /^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const regexLetras = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexCommaList = /^([a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*(, )?)+$/;

    // Validar email
    if (!email.trim()) {
      errores.email = 'El correo electrónico es obligatorio';
    } else if (!regexEmail.test(email)) {
      errores.email = 'El correo electrónico no es válido';
    }

    // Validar nombre
    if (!nombre.trim()) {
      errores.nombre = 'El nombre es obligatorio';
    } else if (!regexLetras.test(nombre)) {
      errores.nombre = 'Usar solo letras y espacios';
    }

    // Validar origen
    if (!origen.trim()) {
      errores.origen = 'Este campo es obligatorio';
    } else if (!regexCommaList.test(origen)) {
      errores.origen = 'Usar solo letras, espacios y comas';
    }

    // Validar ocupación
    if (!ocupacion.trim()) {
      errores.ocupacion = 'Ingrese una respuesta por favor';
    } else if (!regexLetras.test(ocupacion)) {
      errores.ocupacion = 'Usar solo letras y espacios';
    }

    // Validar comentario
    if (!comentario.trim()) {
      errores.comentario = 'Ingrese una respuesta por favor';
    } else if (comentario.length < 3 || comentario.trim().length < 3) {
      errores.comentario = 'La respuesta debe tener al menos 3 caracteres';
    }

    setFormErrors(errores);
    setError("");

    return Object.keys(errores).length === 0; // Devuelve true si no hay errores
  };

  return (
    <>
      <section className='container-fluid p-0 encode-sans-condensed-regular'>
        <div className='banner row-md container-fluid p-0'>
          <Image src={datos.image1_path} fluid alt="imagen" className='banner-image container-fluid p-0'/>
        </div>
        <div className='infoForm-container container-sm p-4'>
          <h2 className='section-title row encode-sans-condensed-regular'>PRE-INSCRIPCIÓN PARA: {datos.titulo}</h2>
          <h3>Completa el siguiente formulario para realizar la Pre-inscripción. Realizado el envío del formulario, te aparecerá un link para ver los datos de la transferencia.</h3>

          <div className='container-form'>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className='textForm'>Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre y apellido"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <Form.Text className="text-muted">
                  {formErrors.nombre && <div style={{ color: "red" }}>{formErrors.nombre}</div>}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='textForm'>Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu direccion de correo electronico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  {formErrors.email && <div style={{ color: "red" }}>{formErrors.email}</div>}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className='textForm'>¿De donde eres? (Ciudad/País)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu ciudad o país de origen"
                  value={origen}
                  onChange={(e) => setOrigen(e.target.value)}
                />
                <Form.Text className="text-muted">
                  {formErrors.origen && <div style={{ color: "red" }}>{formErrors.origen}</div>}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className='textForm'>¿A qué te dedicas?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu ocupación"
                  value={ocupacion}
                  onChange={(e) => setOcupacion(e.target.value)}
                />
                <Form.Text className="text-muted">
                  {formErrors.ocupacion && <div style={{ color: "red" }}>{formErrors.ocupacion}</div>}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className='textForm'>¿Cómo te enteraste del curso?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu respuesta"
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                />
                <Form.Text className="text-muted">
                  {formErrors.comentario && <div style={{ color: "red" }}>{formErrors.comentario}</div>}
                </Form.Text>
              </Form.Group>

              <div className='row subbmitFormBtn-container'>
                <Button variant="primary" className='subbmitFormBtn row seeMoreBtn element left' type="submit">
                  ENVIAR
                </Button>
              </div>
            </Form>

            {mensaje && !error && (
              <div className='text-center'>
                <p className="text-success mb-1">{mensaje}</p>
                <Link className="text-warning mb-2 fw-bold" to="/datos-bancarios">Información de transferencia</Link>
              </div>
            )}

            {error && <p style={{ color: "red" }}>• {error}</p>}
          </div>
        </div>
      </section>
    </>
  );
};
