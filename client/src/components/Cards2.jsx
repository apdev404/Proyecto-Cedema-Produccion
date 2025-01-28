import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/card2.css';

function Cards2({image, head, body, footer, buttonText, id, ruta, width}) {
    return (
        <Card style={{ width: `${width}` }} className='card-container encode-sans-condensed-regular col-3 card-act-container'>
          <Link to ={`/${ruta}/details/${id}`} className="link">

            <Card.Body className='body'>
                <Card.Title size="sm" className='text-head'>{head}</Card.Title>
                <Card.Text className='card-text'>
                {body}
                </Card.Text>
            </Card.Body>
            
            <Card.ImgOverlay className="card-img-overlay-act text-center">
              {buttonText.map((el, index) => (
                <Button key={index} variant="outline-danger" className='btn btn-filtro'>{el}</Button>
              ))}
            </Card.ImgOverlay>

            <Card.Img variant="top" src={image} alt="imagen" className='card-image-act'/>

            <Card.Footer className="text-gray">{footer}</Card.Footer>

          </Link>
        </Card>
    );
}

export default Cards2;