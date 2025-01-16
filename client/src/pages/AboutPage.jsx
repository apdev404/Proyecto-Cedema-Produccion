import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListSupports from "../components/ListSupports";

import '../css/aboutPage.css';
import '../css/Home.css'
import CardsEquipo from '../components/CardsEquipo';

import { useEffect } from "react";

export const AboutPage = () => {
  {/*
  // Logica de Scroll to top
  const onScroll = () => {
    window.scrollY === 0 ? AOS.refreshHard() : AOS.init({duration: 1000, once: true, offset: 200});
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });
  */}
  
  return (
    <section className='section container-fluid aboutPage'>
      <Container>
        {/* HEAD */}
        <section className='section container-fluid'>
          <h2 className='section-title row encode-sans-condensed-regular' data-aos="flip-up">¿Quiénes somos?</h2>
        </section>
        <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <p className='encode-sans-condensed-light text-head' data-aos="fade-up">
            El Centro de Debate Multidisciplinario Argentino (CEDEMA) es una comunidad de debate, formación y producción de contenido independiente y plural sin ideología política partidaria, conformada por jóvenes estudiantes, graduados e intelectuales de distintas disciplinas y universidades de todo el país y la región latinoamericana.  
          </p>
          <hr data-aos="fade-up"/>
          <p className='encode-sans-condensed-light text-head' data-aos="fade-up">
            Nuestra Misión es crear una comunidad abierta e inclusiva que fomente el debate a lo largo de nuestra plataforma moderna e integradora, centrada en la dialéctica y discusión sobre diversas temáticas a partir del respeto de la pluralidad de perspectivas y el análisis crítico y argumentativo.
          </p>
        </Col>
        </Row>
        <Image src='/img/aboutPage/imgGrupo1.jpg' fluid className='img-1' data-aos="fade-left"/>

        {/* OBJETIVOS */}
        <Row className='cedema-description'>
          <Col xs={{ order: 2 }} md={{ order: 1 }}>
            <Image src="https://i.pinimg.com/736x/19/e8/c2/19e8c2772bbd766bb39127c69ac03da1.jpg" fluid className='img-2' data-aos="fade-right"/>
          </Col>
          <Col xs={{ order: 1 }} md={{ order: 2 }}>
            <h1 className='encode-sans-condensed-regular text-title' data-aos="flip-up">Objetivos</h1>
            <ul className='encode-sans-condensed-light text-description' data-aos="fade-up">
              <li>Construir lazos que acerquen diferentes comunidades, culturas y sociedades</li>
              <li>Promover el debate y el análisis multidisciplinario de tópicos de interés en un marco nacional e internacional</li>
              <li>Establecer vínculos estratégicos con diversos actores del plano local, regional y mundial, entre ellos, organismos, centros, organizaciones, observatorios, fundaciones, cámaras, universidades e instituciones.</li>
            </ul>
          </Col>
        </Row>

        {/* ALGO MÁS */}
        <Row className='cedema-description d-flex align-items-center'>
          <Col xs={12} md={6}>
            <h1 className='encode-sans-condensed-regular text-title' data-aos="flip-up" >¿Qué hacemos?</h1>
            <p className='encode-sans-condensed-light text-description' data-aos="fade-up">
              Estamos comprometidos con el análisis imparcial y el debate no sólo de los asuntos domésticos de la Argentina sino también de aquellos que tienen lugar en el plano internacional en las áreas de la geopolítica, las relaciones internacionales, la ciencia política, los negocios y el comercio mundial, entre otras, a través de un abordaje interdisciplinario. 
            </p>
            <h1 className='encode-sans-condensed-regular text-title' data-aos="flip-up" >¿Cómo lo hacemos?</h1>
            <p className='encode-sans-condensed-light text-description' data-aos="fade-up">
              Buscamos compartir y transmitir junto a especialistas un conocimiento auténtico, académico y profesional a través de Cursos, Foros, Seminarios, Talleres, Workshops, Charlas, Podcasts, Artículos y otro tipo de actividades, incluyendo visitas a Embajadas, Museos, Centros Culturales.             </p>
          </Col>
          <Col xs={12} md={6}>
            <Image src="/img/aboutPage/imgGrupo2.jpg" fluid className='img-3' data-aos="fade-right"/>
          </Col>
        </Row>

        {/* EQUIPO */}
        <hr data-aos="flip-up"/>
        <h1 className='encode-sans-condensed-regular text-title' data-aos="flip-up">Nuestro equipo</h1>
        <CardsEquipo/>

      </Container>
      <ListSupports/>
    </section>
  );
}
