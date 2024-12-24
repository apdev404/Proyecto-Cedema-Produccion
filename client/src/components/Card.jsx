import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/card.css'
import example from '../assets/example.png';

function Cards() {
  return (
    <Card style={{ width: '18rem' }} className='card-container'>
      <Card.Img variant="top" src={example} alt="imagen" className='card-image'/>
      <Card.Body>
        <Card.Title>Titulo</Card.Title>
        <Card.Text>
          Descripcion breve
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;