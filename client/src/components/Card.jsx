import '../css/card.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import example from '../assets/example.png';
import { Link } from "react-router-dom";


function Cards() {
  
  return (
    <Card style={{ width: '22rem' }} className='card-container'>
        <Link to ='details'>
              <Card.Img variant="top" src={example} alt="imagen" className='card-image'/>
              <Card.ImgOverlay>
                  <Button variant="outline-danger" className='btn-act'>Charlas</Button>
              </Card.ImgOverlay>
              <Card.Body className='body-act'>
                  <Card.Title size="sm" className='text-date'>Fecha</Card.Title>
                  <Card.Text className='card-text'>
                  Titulo
                  </Card.Text>
              </Card.Body>
              <Card.Footer className="text-gray">Modalidad</Card.Footer>
          </Link>
        </Card>
  );
}

export default Cards;