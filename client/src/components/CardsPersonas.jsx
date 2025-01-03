import CardPersonal from './CardPersonal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/card.css';

function CardsPersonas() {
    return (
        <div className="cards-personas-container">
            <Row className="justify-content-center g-4">
                <Col xs={12} sm={6} md={5} lg={4}>
                    <CardPersonal
                        image='/img-persona1.jpg'
                        name="Iñaki Agüero Clarembaux"
                        role="Coordinador General"
                    />
                </Col>
                <Col xs={12} sm={6} md={5} lg={4}>
                    <CardPersonal
                        image='/img-persona2.jpg'
                        name="Agustina Ortega"
                        role="Coordinadora de capital Humano y comunicación"
                    />
                </Col>
                <Col xs={12} sm={6} md={5} lg={4}>
                    <CardPersonal
                        image='/img-persona3.jpg'
                        name="Yesenia Motola"
                        role="Secretaria de Proyectos"
                    />
                </Col>
                <Col xs={12} sm={6} md={5} lg={4}>
                    <CardPersonal
                        image='/img-persona4.jpg'
                        name="Anibal Mella"
                        role="Área de articulación académica internacional"
                    />
                </Col>
                <Col xs={12} sm={6} md={5} lg={4}>
                    <CardPersonal
                        image='/img-persona5.jpg'
                        name="Valeria Delgado"
                        role="Área de antártida y atlántico sur"
                    />
                </Col>
                <Col xs={12} sm={6} md={5} lg={4}>
                    <CardPersonal
                        image='/img-persona6.jpg'
                        name="Iñaki Santos"
                        role="Secretario de relaciones institucionales"
                    />
                </Col>
            </Row>
        </div>
    );
}

export default CardsPersonas;