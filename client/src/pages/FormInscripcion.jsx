import '../css/FormInscrip.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const FormInscripcion = () => {
  const { ruta, id } = useParams();
  const [datos, setDatos] = useState(null);

  useEffect(() => {
   console.log("Ruta:", ruta, "ID:", id); // Verifica los valores


    const fetchDatos = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${ruta}/${id}`);
        console.log("Datos recibidos:", response.data);
        const detalle = Array.isArray(response.data) ? response.data[0] : response.data; // Toma el primer elemento si es un array
        setDatos(detalle);
        console.log("Estado actualizado:", detalle);
      } catch (error) {
        console.error("Error al obtener los detalles:", error);
      }
    };
  
    fetchDatos();
  }, [ruta, id]);
  

  console.log("Estado actual de details:", datos); // Verifica el estado
  
  
  if (!datos) return <p>Cargando detalles...</p>;

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const anio = date.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };

  const capitalizarPrimeraLetra = (texto) => {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  };
  
  return (
    <>
      <section className='container-fluid p-0 encode-sans-condensed-regular'>
        <div className='banner row-md container-fluid p-0'>
          <Image src={datos.image1_path} fluid  alt="imagen" className='banner-image container-fluid p-0'/>
        </div>
        <div className='infoForm-container container-sm p-4'>
          <h2 className='section-title row encode-sans-condensed-regular'>INSCRIPCIÓN PARA: {datos.titulo}</h2>
          <h3>Completa el siguiente formulario para realizar la inscripción correctamente:</h3>

          <div className='container-form'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='textForm'>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu direccion de correo electronico" />
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='textForm'>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre y apellido" />
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='textForm'>¿De donde eres? (Ciudad/País)</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu ciudad o país de origen" />
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='textForm'>¿A que te dedicas?</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu ocupación" />
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='textForm'>¿Cómo te enteraste del curso?</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu respuesta" />
                    <Form.Text className="text-muted">
                
                    </Form.Text>
                </Form.Group>
                <div className='row subbmitFormBtn-container'>
                    <Button variant="primary" className='subbmitFormBtn row seeMoreBtn element left' type="submit">
                        ENVIAR
                    </Button>
                </div>

            </Form>
          </div>
        </div>
            
      </section>
    </>
  )
};