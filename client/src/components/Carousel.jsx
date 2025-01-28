import { Link, Outlet } from "react-router-dom";
import '../css/carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import example from '../assets/example.png';
import imgGrupo1 from '../../public/img/aboutPage/imgGrupo1.jpg';
import imgGrupo2 from '../../public/img/aboutPage/imgGrupo2.jpg';


function Galery() {
  return (
    <section className='container-fluid p-0'>
        <Link className="" to="/about">
        <Carousel fade className="carousel-container">
        <Carousel.Item className="carousel-item">
              <img src={imgGrupo1} alt="Imagen 1" className="carousel-image" />
          <Carousel.Caption className="carousel-caption">
            <div className='carousel-text-container'>
              <h2 className='carousel-text'>CEDEMA</h2>
              <h4 className='carousel-subtext'>Centro de Debate Multidisciplinario Argentino (CEDEMA)</h4>
            </div>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
              <img src={imgGrupo2} alt="Imagen 2" className="carousel-image" />
          <Carousel.Caption className="carousel-caption">
            <div className='carousel-text-container'>
              <h2 className='carousel-text'>CEDEMA</h2>
              <h4 className='carousel-subtext'>Construir lazos que acerquen diferentes comunidades, culturas y sociedades</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
              <img src={example} alt="Imagen 3" className="carousel-image" />
          <Carousel.Caption className="carousel-caption">
            <div className='carousel-text-container'>
              <h2 className='carousel-text'>CEDEMA</h2>
              <h4 className='carousel-subtext'>Promover el debate y el análisis multidisciplinario de tópicos de interés en un marco nacional e internacional</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
              <img src={example} alt="Imagen 4" className="carousel-image" />
          <Carousel.Caption className="carousel-caption">
            <div className='carousel-text-container'>
              <h2 className='carousel-text'>CEDEMA</h2>
              <h4 className='carousel-subtext'>Establecer vínculos estratégicos con diversos actores del plano local, regional y mundial, entre ellos, organismos, centros, organizaciones, observatorios, fundaciones, cámaras, universidades e instituciones.</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Link>
    </section>
  );
}

export default Galery;
