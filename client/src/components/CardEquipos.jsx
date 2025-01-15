import Card from 'react-bootstrap/Card';
import '../css/cardEquipo.css';

function CardEquipos({ image, nombre, cargo, titulo, edad}) {
    return (
        <Card style={{ width: '90%' }} className="card-containerEquipo encode-sans-condensed-regular" data-aos="flip-left">
            <div className="row g-0 align-items-center">
                {/* Imagen */}
                <div className="col-12 col-md-4 imgEquipo">
                    <Card.Img 
                        src={image} 
                        alt="imagen" 
                        className="img-fluid card-imageEquipo" 
                    />
                </div>
                {/* Cuerpo */}
                <div className="col-12 col-md-8 textEquipo">
                    <Card.Body>
                        <Card.Title className="card-titleEquipo">{nombre}</Card.Title>
                        <Card.Text>
                            {cargo}
                        </Card.Text>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
}

export default CardEquipos;
