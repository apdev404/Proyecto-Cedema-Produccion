import '../css/cardAct.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import example from '../assets/example.png';

function CardAct() {
    return (
        <Card style={{ width: '22rem' }} className='card-act'>
            <Card.Img variant="top" src={example} alt="imagen" className='card-image-act'/>
            <Card.ImgOverlay>
                <Button className='btn-act'>Actividades</Button>
            </Card.ImgOverlay>
            <Card.Body className='body-act'>
                <Card.Title size="sm" className='text-date'>Fecha</Card.Title>
                <Card.Text className='card-text'>
                Descripción breve
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-gray">Ubicación</Card.Footer>
        </Card>
    );
}

export default CardAct;