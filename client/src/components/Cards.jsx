import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/card.css';

function Cards({image, head, body, footer, buttonText, id, ruta, width}) {
    return (
        <Card style={{ width: `${width}` }} className='card-container encode-sans-condensed-regular col-3'>
          <Link to ={`/${ruta}/details/${id}`} className="link">
            <Card.Img variant="top" src={image ? image : "../../img/imageNotFound.jpg"} alt="imagen" className='card-image'/>
            <Card.ImgOverlay>
              {buttonText.map((el, index) => (
                <Button key={index} variant="outline-danger" className='btn btn-filtro'>{el}</Button>
              ))}
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


