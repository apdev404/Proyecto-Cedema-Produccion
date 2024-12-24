import '../css/Home.css';
import Galery from '../components/Carousel.jsx';
import Cards from '../components/Card.jsx';
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
        <Button variant="primary" className='seeMoreBtn'>Ver mas</Button>
      </section>

      <h1>Homeeeeee</h1>
    </>
  )
};
