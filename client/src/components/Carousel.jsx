import '../css/carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import example from '../assets/example.png';

function Galery() {
  return (
    <section className='container-fluid p-0'>
      <Carousel fade className="carousel-container">
        <Carousel.Item className="carousel-item">
              <img src={example} alt="Imagen 1" className="carousel-image" />
          <Carousel.Caption>
              <h3 className='text'>Primer noticia</h3>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
              <img src={example} alt="Imagen 2" className="carousel-image" />
          <Carousel.Caption>
              <h3 className='text'>Segunda noticia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
              <img src={example} alt="Imagen 3" className="carousel-image" />
          <Carousel.Caption>
              <h3 className='text'>Tercera noticia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
              <img src={example} alt="Imagen 4" className="carousel-image" />
          <Carousel.Caption>
              <h3 className='text'>Cuarta noticia</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Galery;
