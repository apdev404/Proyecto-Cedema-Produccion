import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import '../css/cardRedaccion.css';
import '../css/card.css'
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';

function CardRedaccion({portada,perfil, titulo, descripcion, fecha, autor}) {
    return (
        <Card style={{ width: '70%' }} className="card-redaccion">
            <Row>  
                {/* Cuerpo */}
                <Col xs={7}>
                <Row>
                    <Col className="container-autor">
                        <div className="image-container-perfil"> 
                            <Card.Img className="perfil-image" src={perfil} />
                        </div>
                        <blockquote className="blockquote mb-0 autor-redaccion">
                            <footer className="encode-sans-condensed-light blockquote-footer">{autor}</footer>
                        </blockquote>
                    </Col>
                </Row>
                    <Card.Body className="body-redaccion">
                        <Card.Title className="encode-sans-condensed-light title-redaccion">{titulo}</Card.Title>
                        <Card.Text className="encode-sans-condensed-light description-redaccion">{descripcion}</Card.Text>
                        
                    </Card.Body>
                </Col>
                <Col xs={5}>
                    {/* Imagen */}
                    <div className="portada-container row">
                        <Card.Text className="encode-sans-condensed-light fecha-redaccion col">{fecha}</Card.Text>
                        <Card.Img variant="top" className='col' src={portada}/>
                    </div>
                </Col>
                <hr className="hr-redaccion" />
            </Row> 
        </Card>
    );
}

export default CardRedaccion;
