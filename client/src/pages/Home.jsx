import '../css/Home.css';
import Galery from '../components/Carousel.jsx';
import Cards from '../components/Card.jsx';
import Act from '../components/Act.jsx';
import Button from 'react-bootstrap/Button';


export const Home = () => {
  return (
    <>
      <Galery />

      <section className='news-section'>
        <div className='news-container'>
          <Cards className='card-news'/>
          <Cards className='card-news'/>
        </div>
        <h2>Actividades</h2>
        <Button variant="primary" className='seeMoreBtn'>Ver mas</Button>
        <div className='act-container'>
          <Act className='card-act'/>
          <Act className='card-act'/>
          <Act className='card-act'/>
        </div>
      </section>
      <h1>Homeeeeee</h1>
    </>
  )
};
