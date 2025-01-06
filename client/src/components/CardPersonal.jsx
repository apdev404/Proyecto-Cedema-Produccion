import Card from 'react-bootstrap/Card';
import '../css/card.css';

function CardPersonal({image, name, role}) {
    return (
        <Card style={{ width: '18rem' }} className='card-personal h-100'>
        <Card.Img variant="top" src={image} className='img-personal ' />
        <Card.Body>
            <Card.Text>{name}</Card.Text>
            <Card.Title>{role}</Card.Title>
        </Card.Body>
        </Card>
    );
}

export default CardPersonal;