import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../css/nosotros.css';
import example from '../assets/example.png';


function Nosotros() {
    return (
        <Container fluid className="container-fluid m-auto">
            <Row className='nosotros-row'>
                <Col sm={8} className='img-nosotros'>
                    <div data-aos="fade-right">
                        <Image src={example}/>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className='section-description-cedema' data-aos="fade-left">
                        <h2 className='encode-sans-condensed-light'>Centro de Debate Multidisplicinar Argentino</h2>
                        <h3 className='encode-sans-condensed-light'>Tu espacio de Comunidad Internacional</h3>
                        <hr/>
                        <p className='encode-sans-condensed-light text-cedema'>
                            El Centro de Debate Multidisciplinario Argentino (CEDEMA) es una comunidad de debate, formación y producción de contenido independiente y plural sin ideología política partidaria, conformada por jóvenes estudiantes, graduados e intelectuales de distintas disciplinas y universidades de todo el país y la región latinoamericana.  
                        </p>
                        <p className='encode-sans-condensed-light text-cedema'>
                            Nuestra Misión es crear una comunidad abierta e inclusiva que fomente el debate a lo largo de nuestra plataforma moderna e integradora, centrada en la dialéctica y discusión sobre diversas temáticas a partir del respeto de la pluralidad de perspectivas y el análisis crítico y argumentativo.
                        </p>
                    </div>
                </Col >

                <Col className='section-nosotros' data-aos="zoom-in">
                    <h2 className='encode-sans-condensed-light'>Una red de personas que contribuyen al crecimiento de la Organización</h2>
                    <h3 className='encode-sans-condensed-light'>Conoce más sobre ellos</h3>
                    <Link className="react-link encode-sans-condensed-regular" to='/about'><Button className='seeMoreBtn'>VER MÁS</Button></Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Nosotros;