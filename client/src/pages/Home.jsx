import '../css/Home.css';
import Galery from '../components/Carousel.jsx';
import CardsAct from '../components/CardsAct.jsx';
import CardsNews from '../components/CardsNews.jsx';
import Redes from '../components/Contactos.jsx';
import Nosotros from '../components/Nosotros.jsx';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className='container-fluid p-0 col'>
        <Galery />
        <section className='section first-section container-fluid'>
          <h2 className='section-title row encode-sans-condensed-regular'>NOVEDADES</h2>
          <CardsNews/>
          <Link className="react-link encode-sans-condensed-bold" to='/formacion'><Button className='seeMoreBtn' size='lg'>VER TODAS</Button></Link>
        </section>

        <section className='section container-fluid'>
          <h2 className='section-title row encode-sans-condensed-regular'>ACTIVIDADES</h2>
          <CardsAct/>
          <Link className="react-link encode-sans-condensed-regular" to='/actividades'><Button className='seeMoreBtn'>VER TODAS</Button></Link>
        </section >
        
        <section className='section container-fluid'>
          <h2 className='section-title row encode-sans-condensed-regular'>SOBRE NOSOTROS</h2>
          <Nosotros/>
        </section>

        <section className='section container-fluid'>
          <h3 className='encode-sans-condensed-semibold'>No te pierdas de nada</h3>
          <h2 className='encode-sans-condensed-semibold'>Seguinos en nuestras Redes Sociales</h2>
          <Redes/>
        </section>
      </div>
    </>
  )
};