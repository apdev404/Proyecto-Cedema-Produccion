import '../css/Details.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import example from '../assets/example.png';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const DetailsPage = () => {
  const { ruta, id } = useParams(); // Captura el tipo (curso/actividad) y la id de la URL
  const [datos, setDatos] = useState([]);
  const[fechaFormateada, setFechaFormateada] = useState("");

    // SOLICITUD DE DATOS DE USER
    useEffect(() => {
      // Solicitud al servidor Express
      axios
        .get(`http://localhost:3001/${ruta}/${id}`)
        .then((response) => {
          // console.log(response.data[0]);
          setDatos(response.data[0]); // Guarda el objeto detalle
          // const fecha = response.data[0].fecha.split('T')[0];
          const fecha = new Date(response.data[0].fecha).toString();
          // console.log(fecha);
          setFechaFormateada(fecha);
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    }, []);

  return (
    <>
      <section className='container-fluid p-0 encode-sans-condensed-regular'>
        <div className='banner row-md container-fluid p-0'>
          <Image src={datos.image_path} fluid  alt="imagen" className='banner-image container-fluid p-0'/>
        </div>

        <div className='info-container container-sm p-4'>

          <div className='info-top row container-sm align-items-center'>
            <div className='col-md infoLeft'>
              <ul className='infoList container-fluid m-0 p-0'>
                <li><h1 className='element row'>{datos.titulo}</h1></li>
                <li><h3 className='element row'>Fecha y hora: {fechaFormateada}</h3></li>
                <li><h3 className='element row'>Modalidad: {datos.formato}</h3></li>
              </ul>
            </div>
            <div className='col-md infoSecund'>
              <ul className='infoList infoRight col container-fluid m-0 p-0'>
                <li className='element right row'><h3>Temas: Bla Bla</h3></li>
                <li className='element right row'><h3>Region: China</h3></li>
              </ul>
            </div>  
          </div>
              
          <div className='description-container row container-sm justify-content-center'>
            <Image src={datos.image_path} fluid  alt="imagen" className='description-image row'/>
            <h6 className='description-text row element'>{datos.descripcion}
            </h6>
            <Button variant="primary" className='row seeMoreBtn element left'>INSCRIBIRSE</Button>
          </div>
        </div>
            
      </section>
    </>
  )
};