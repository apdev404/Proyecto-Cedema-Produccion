//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/act.css'
import example from '../assets/example.png';

function Act() {
    return (
        <Card className='card-act'>
            <Card.Img src={example} alt="imagen" className='card-image-act'/>
            <Card.ImgOverlay>
                <Button variant="outline-danger" className='btn-act'>Actividades</Button>
            </Card.ImgOverlay>
            <Card.Body className='body-act'>
                <Card.Title size="sm" className='text-date'>Fecha actividad</Card.Title>
                <Card.Text className='card-text'>
                Descripción breve
                </Card.Text>
                <Card.Footer className="text-gray">Horario actividad</Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default Act;