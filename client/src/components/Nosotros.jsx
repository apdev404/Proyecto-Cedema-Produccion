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
        <Container fluid className="container-fluid p-0 m-auto">
            <Row className='nosotros-row'>
                <Col xs={12} md={6} className='img-nosotros'>
                <div data-aos="fade-right">
                    <Image src={example}/>
                </div>
                </Col>
                <Col xs={12} md={6} >
                <div data-aos="fade-left">
                    <h2 className='encode-sans-condensed-light'>Centro de Debate Multidisplicinar Argentino</h2>
                    <h3 className='encode-sans-condensed-light'>Tu espacio de Comunidad Internacional</h3>
                    <p className='encode-sans-condensed-light'>
                        Desccripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?
                        Desccripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?
                    </p>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='container-fluid section-nosotros p-2' data-aos="zoom-in">
                        <h2 className='encode-sans-condensed-light'>Una red de personas que contribuyen al crecimiento de la Organización</h2>
                        <h3 className='encode-sans-condensed-light'>Conoce más sobre ellos</h3>
                        <Link className="react-link encode-sans-condensed-regular" to='/about'><Button className='seeMoreBtn'>VER MÁS</Button></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Nosotros;