import '../css/Home.css';
import Galery from '../components/Carousel.jsx';
import CardsAct from '../components/CardsAct.jsx';
import CardsNews from '../components/CardsNews.jsx';
import LastNews from '../components/LastNews.jsx';
import Redes from '../components/Contactos.jsx';
import Nosotros from '../components/Nosotros.jsx';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Home = () => {
  const scrollUp = () => window.scrollTo(0, 0);

  return (
    <>
      <div className='container-fluid p-0 col encode-sans-condensed-regular'>
        <Galery />

        <section className='section grey-section container-fluid'>
          <h2 className='section-title row encode-sans-condensed-regular' data-aos="flip-up">NOVEDADES</h2>
          <div data-aos="fade-down"> 
            <LastNews />
          </div>
          <Link className="react-link encode-sans-condensed-bold" to='/news' data-aos="zoom-in" onClick={scrollUp}><Button className='seeMoreBtn' size='lg'>VER TODAS</Button></Link>
        </section>     

        <section className='section container-fluid'>
          <h2 className='section-title row encode-sans-condensed-regular' data-aos="flip-up">CURSOS</h2>
          <div data-aos="fade-down" data-aos-anchor=".section-title"> 
            <CardsNews/>
          </div>
          <Link className="react-link encode-sans-condensed-bold" to='/formacion' data-aos="zoom-in" onClick={scrollUp}><Button className='seeMoreBtn' size='lg'>VER TODAS</Button></Link>
        </section>

        <section className='section grey-section container-fluid'>
            <h2 className='section-title row encode-sans-condensed-regular' data-aos="flip-up">ACTIVIDADES</h2>
            <div data-aos="fade-up"> 
            <CardsAct/>
            </div>
            <Link className="react-link encode-sans-condensed-regular" to='/actividades' data-aos="zoom-in" onClick={scrollUp}><Button className='seeMoreBtn'>VER TODAS</Button></Link>
        </section >
        
        <section className='section container-fluid'>
            <h2 className='section-title row encode-sans-condensed-regular' data-aos="flip-up">SOBRE NOSOTROS</h2>
            <Nosotros/>
        </section>

        <section className='section container-fluid'>
            <h3 className='encode-sans-condensed-semibold' data-aos="flip-up">No te pierdas de nada</h3>
            <h2 className='encode-sans-condensed-semibold' data-aos="flip-down">Seguinos en nuestras Redes Sociales</h2>
            <Redes/>
        </section>
      </div>
    </>
  )
};