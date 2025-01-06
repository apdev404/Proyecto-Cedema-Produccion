import '../css/Home.css';
import Galery from '../components/Carousel.jsx';
import CardNews from '../components/CardNews.jsx';
import Redes from '../components/Contactos.jsx';
import Nosotros from '../components/Nosotros.jsx';
import Button from 'react-bootstrap/Button';
import ListNews from '../components/ListNews.jsx';
import { Link } from 'react-router-dom';

export const NewsPage = () => {
  return (
    <>
      <div className='container-fluid p-0 col encode-sans-condensed-regular'>
        <ListNews title="NOTICIAS"/>
      </div>
    </>
  )
};