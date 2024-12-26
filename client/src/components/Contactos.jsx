import '../css/logo.css'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import facebook from '../assets/logoFacebook.png';
import x from '../assets/logoX.png';
import whatsapp from '../assets/logoWhatsapp.png';
import instagram from '../assets/logoInstagram.png';
import youtube from '../assets/logoYoutube.png';
import linkedin from '../assets/logoLinkedin.png';

function Logo() {
    return (
        <Container>
            <Row>
                <Col>
                    <Image  src={facebook} alt="imagen" className='logo'/>
                </Col>
                <Col>
                    <Image  src={x} alt="imagen" className='logo'/>
                </Col>
                {/* 
                <Col>
                    <Image  src={linkedin} alt="imagen" className='logo'/>
                </Col>
                */}
                <Col>
                    <Image  src={whatsapp} alt="imagen" className='logo'/>
                </Col>
                <Col>
                    <Image  src={instagram} alt="imagen" className='logo'/>
                </Col>
                <Col>
                    <Image  src={youtube} alt="imagen" className='logo'/>
                </Col>
            </Row>
        </Container>
    );
}

export default Logo;