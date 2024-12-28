import '../css/Details.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import example from '../assets/example.png';
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

export const DetailsPage = () => {
  // const { id } = useParams(); // Captura el id de la URL (idUsuario)
  // const [detalle, setDetalle] = useState([]);

  //   // SOLICITUD DE DATOS DE USER
  //   useEffect(() => {
  //     // Solicitud al servidor Express
  //     axios
  //       .get(`http://localhost:3001/details/${id}`)
  //       .then((response) => {
  //         setDetalle(response.data[0]); // Guarda el objeto detalle
  //         // console.log(detalle)
  //       })
  //       .catch((error) => {
  //         console.error("Error al obtener los datos:", error);
  //       });
  //   }, []);

  return (
    <>
      <section className='container-fluid p-0'>
        <div className='banner row-md container-fluid p-0'>
          <Image src={example} fluid  alt="imagen" className='banner-image container-fluid p-0'/>
        </div>

        <div className='info-container container-sm p-4'>

          <div className='info-top row container-sm align-items-center'>
            <div className='col-md infoLeft'>
              <ul className='infoList container-fluid m-0 p-0'>
                <li><h1 className='element row'>Titulo</h1></li>
                <li><h3 className='element row'>Fecha y hora: 99/99/9999 - 19:30hs</h3></li>
                <li><h3 className='element row'>Modalidad: Virtual / Presencial / Hibrida</h3></li>
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
            <Image src={example} fluid  alt="imagen" className='description-image row'/>
            <h6 className='description-text row element'>Descripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?
            Desccripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?
            Desccripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?
            </h6>
            <Button variant="primary" className='row seeMoreBtn element left'>INSCRIBIRSE</Button>
          </div>
        </div>
            
      </section>
    </>
  )
};