import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import '../css/cardNews.css';

function CardNews({ image, head, body, subtitle, id }) {
    return (
        <Card style={{ width: '90%' }} className="card-containerNews encode-sans-condensed-regular">
            <Link to={`/news/details/${id}`} className="link">
                <div className="row g-0 align-items-center">
                    {/* Imagen */}
                    <div className="col-12 col-md-4 imgNews">
                        <Card.Img 
                            src={image} 
                            alt="imagen" 
                            className="img-fluid card-imageNews" 
                        />
                    </div>
                    {/* Cuerpo */}
                    <div className="col-12 col-md-8 textNews">
                        <Card.Body>
                            <Card.Title className="card-titleNews">{head}</Card.Title>
                            <Card.Text>
                                {body}
                            </Card.Text>
                            <Card.Subtitle className="card-subtitleNews mb-2">
                                {subtitle}
                            </Card.Subtitle>
                        </Card.Body>
                    </div>
                </div>
            </Link>
        </Card>
    );
}

export default CardNews;
