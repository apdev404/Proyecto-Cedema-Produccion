import '../css/Home.css';
import Galery from '../components/Carousel.jsx';
import Cards from '../components/Card.jsx';
import Button from 'react-bootstrap/Button';


export const Home = () => {
  return (
    <>
      <Galery />

      <section className='news-section container-fluid p-0'>
        <div className='news-container row'>
          <Cards className='card-news col'/>
          <Cards className='card-news col'/>
        </div>
        <Button variant="primary" className='seeMoreBtn'>Ver mas</Button>
      </section>

      <h1>Homeeeeee</h1>
    </>
  )
};
