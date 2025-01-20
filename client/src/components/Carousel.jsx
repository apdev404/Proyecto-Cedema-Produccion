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
              <h2 className='carousel-text'>Primer noticia</h2>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
              <img src={imgGrupo2} alt="Imagen 2" className="carousel-image" />
          <Carousel.Caption className="carousel-caption">
              <h2 className='carousel-text'>Segunda noticia</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
              <img src={example} alt="Imagen 3" className="carousel-image" />
          <Carousel.Caption className="carousel-caption">
              <h2 className='carousel-text'>Tercera noticia</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
              <img src={example} alt="Imagen 4" className="carousel-image" />
          <Carousel.Caption className="carousel-caption">
              <h2 className='carousel-text'>Cuarta noticia</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Link>
    </section>
  );
}

export default Galery;
