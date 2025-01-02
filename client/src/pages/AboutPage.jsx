import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import '../css/aboutPage.css';

export const AboutPage = () => {
  return (
    <section className='section container-fluid aboutPage'>
      <Container className='cedema-head'>
        <Row className='cedema-description'>
          <Col xs={12} md={6}>
            <h3 className='section-title row encode-sans-condensed-regular' data-aos="flip-up">¿Quiénes somos?</h3>
            <p className='encode-sans-condensed-light' data-aos="fade-up">
              Centro de Debate Multidisciplinario Argentino (CEDEMA) es una comunidad comprometida con el análisis y el debate de los asuntos que suceden al interior de nuestro país como en cuestiones y hechos que tienen lugar en todo el mundo, conformado, por estudiantes, graduados, e intelectuales, de distintas disciplinas y universidades, con diferentes puntos de vistas.
            </p>
            <hr data-aos="fade-up"/>
            <p className='encode-sans-condensed-light' data-aos="fade-up">
              Tiene como misión crear una comunidad abierta e inclusiva que se extrapole a un debate en nuestra plataforma, moderna e integradora, centrada en la dialéctica y discusión sobre diversas temáticas debido a la pluralidad de posturas mediante el análisis crítico y argumentativo.
            </p>
          </Col>
          <Col xs={12} md={6} >
            <Image src="/imgMain-AboutPage.jpg" fluid className='img-1' data-aos="fade-left"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Image src="/quienes_somos_2.jpg" fluid className='img-2' data-aos="fade-right"/>
          </Col>
          <Col xs={12} md={6}>
            <h2 className='encode-sans-condensed-regular' data-aos="flip-up">Objetivos</h2>
            <ul className='encode-sans-condensed-light' data-aos="fade-up">
              <li>Construir lazos que nos acerquen para enriquecernos académica, social y culturalmente. </li>
              <li>Fomentar el debate y el análisis multidisciplinario en un marco nacional e internacional. </li>
              <li>Estrechar vínculos con otros organismos a través de la cooperación y el diálogo abierto.</li>
              <li>Generar proyectos, programas, actividades de impacto social y político.</li>
            </ul>
          </Col>
        </Row>
        {/*
          <Row className="justify-content-md-center">
          <h1 className='encode-sans-condensed-regular' data-aos="flip-up">Nos conforman...</h1>
          <Col xs={6} md={4}>
            <Image src='/img-persona1.jpg' fluid className='persona1'></Image>
          </Col>
          <Col xs={12} md={8}>
            <p className='encode-sans-condensed-light text-aboutPage' data-aos="fade-up">Iñaki Agüero Clarembaux</p>
          </Col>
        </Row>
        */}
      </Container>
    </section>
    
  );
}
