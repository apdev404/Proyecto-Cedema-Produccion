import '../css/Home.css';
import Galery from '../components/Carousel.jsx';
import CardsAct from '../components/CardsAct.jsx';
import CardsNews from '../components/CardsNews.jsx';
import Redes from '../components/Contactos.jsx';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer.jsx';


export const Home = () => {
  return (
    <>
      <div className='container-fluid p-0 col'>
        <Galery />
        <section className='section container-fluid p-0'>
          <h2 className='row'>News</h2>
          <CardsNews/>
          <Button className='seeMoreBtn'>Ver todas</Button>
        </section>

        <section className='section container-fluid p-0'>
          <h2>Actividades</h2>
          <CardsAct/>
          <Button variant="primary" className='seeMoreBtn'>Ver todas</Button>
        </section >

        <section className='section'>
          <h3>No te pierdas de nada</h3>
          <h2>Seguinos en nuestras Redes Sociales</h2>
          <Redes/>
        </section>
      </div>
    </>
  )
};