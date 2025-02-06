import '../css/Home.css';
import '../css/redaccion.css';
import "../css/listlinks.css";
import CardsRedaccion from '../components/CardsRedaccion.jsx';
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const Redaccion = () => {
    return (
        <>
        <Row className='container-fluid p-0 m-0'>
            <section className='section container-fluid'>
                <h2 className='section-title row encode-sans-condensed-regular p-0 main-title'>REDACCIÓN</h2>
            </section>
                <Col lg={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }}>
                    <CardsRedaccion />
                </Col>
                <Col lg={{ span: 4, order: 2 }} xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} className='container-fluid p-0'>
                    <Card style={{ width: '28rem' }} className='card-aside p-0'>
                        <div className="sticky-column p-0">
                            <Card.Body>
                                <h2 className='encode-sans-condensed-light aside-text'>Explora Artículos, Reflexiones y Más</h2>
                                <p className='encode-sans-condensed-light aside-text-p'>Te invitamos a sumergirte en una sección de artículos, escritos y reflexiones sobre temas diversos. Desde piezas informativas hasta narrativas creativas, encontrarás contenido que desafía, inspira y educa. Navega por las últimas publicaciones, explora el trabajo de autores apasionados y apoya la escritura de calidad mientras accedes a un vasto universo literario.</p>
                                <Card.Img src='/public/img/redaccion.jpg' className='img-redaccion'/>
                                <i className="fa-solid fa-angles-right deco"></i>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
        </Row>
        </>
    )
};