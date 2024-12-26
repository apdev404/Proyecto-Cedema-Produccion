import '../css/Home.css';
import Galery from '../components/Carousel.jsx';
import Cards from '../components/Card.jsx';
import CardAct from '../components/CardAct.jsx';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer.jsx';


export const Home = () => {
  return (
    <>
      <Galery />

      <section className='section'>
        <h2>News</h2>
        <div className='news-container'>
          <Cards className='card-news'/>
          <Cards className='card-news'/>
        </div>
        <Button className='seeMoreBtn'>Ver todas</Button>
      </section>
      <section className='section'>
        <h2>Actividades</h2>
        <div className='act-container'>
          <CardAct className='card-act'/>
          <CardAct className='card-act'/>
        </div>
        <Button variant="primary" className='seeMoreBtn'>Ver todas</Button>
      </section>
        
      

      <Footer />
    </>
  )
};