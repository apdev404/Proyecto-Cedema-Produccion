import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/card.css';

function Cards({image, head, body, footer, buttonText}) {
    return (
        <Card style={{ width: '18rem' }} className='card-container'>
          <Link to ='details' className="link">
            <Card.Img variant="top" src={image} alt="imagen" className='card-image'/>
            <Card.ImgOverlay>
                <Button variant="outline-danger" className='btn'>{buttonText}</Button>
            </Card.ImgOverlay>
            <Card.Body className='body'>
                <Card.Title size="sm" className='text-head'>{head}</Card.Title>
                <Card.Text className='card-text'>
                {body}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-gray">{footer}</Card.Footer>
          </Link>
        </Card>
    );
}

export default Cards;


