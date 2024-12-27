import '../css/Home.css';
import Galery from '../components/Carousel.jsx';
import Cards from '../components/Card.jsx';
import CardAct from '../components/CardAct.jsx';
import Logo from '../components/Contactos.jsx';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer.jsx';


export const Home = () => {
  return (
    <>
      <div className='container-fluid p-0 col'>
        <Galery />
        <section className='section container-fluid p-0'>
          <h2 className='row'>News</h2>
          <div className='news-container row'>
            <Cards className='card-news col'/>
            <Cards className='card-news col'/>
          </div>
          <Button className='seeMoreBtn'>Ver todas</Button>
        </section>

        <section className='section container-fluid p-0'>
          <h2>Actividades</h2>
          <div className='act-container row'>
            <CardAct className='card-act col'/>
            <CardAct className='card-act col'/>
          </div>
          <Button variant="primary" className='seeMoreBtn'>Ver todas</Button>
        </section >

        <section className='section'>
          <h2>Seguinos en nuestras Redes Sociales</h2>
          <Logo/>
        </section>
      </div>
        
      

      <Footer />
    </>
  )
};