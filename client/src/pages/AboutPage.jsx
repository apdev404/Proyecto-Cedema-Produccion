import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListSupports from "../components/ListSupports";

import '../css/aboutPage.css';
import '../css/Home.css'
import CardsEquipo from '../components/CardsEquipo';

export const AboutPage = () => {
  return (
    <section className='section container-fluid aboutPage'>
      <Container>
        {/* HEAD */}
        <section className='section container-fluid'>
          <h2 className='section-title row encode-sans-condensed-regular' data-aos="flip-up">¿Quienes somos?</h2>
        </section>
        <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <p className='encode-sans-condensed-light text-head' data-aos="fade-up">
            Centro de Debate Multidisciplinario Argentino (CEDEMA) es una comunidad comprometida con el análisis y el debate de los asuntos que suceden al interior de nuestro país como en cuestiones y hechos que tienen lugar en todo el mundo, conformado, por estudiantes, graduados, e intelectuales, de distintas disciplinas y universidades, con diferentes puntos de vistas.
          </p>
          <hr data-aos="fade-up"/>
          <p className='encode-sans-condensed-light text-head' data-aos="fade-up">
            Tiene como misión crear una comunidad abierta e inclusiva que se extrapole a un debate en nuestra plataforma, moderna e integradora, centrada en la dialéctica y discusión sobre diversas temáticas debido a la pluralidad de posturas mediante el análisis crítico y argumentativo.
          </p>
        </Col>
        </Row>
        <Image src="/imgMain-AboutPage.jpg" fluid className='img-1' data-aos="fade-left"/>

        {/* OBJETIVOS */}
        <Row className='cedema-description'>
          <Col xs={{ order: 2 }} md={{ order: 1 }}>
            <Image src="https://i.pinimg.com/736x/19/e8/c2/19e8c2772bbd766bb39127c69ac03da1.jpg" fluid className='img-2' data-aos="fade-right"/>
          </Col>
          <Col xs={{ order: 1 }} md={{ order: 2 }}>
            <h1 className='encode-sans-condensed-regular text-title' data-aos="flip-up">Objetivos</h1>
            <ul className='encode-sans-condensed-light text-description' data-aos="fade-up">
              <li>Construir lazos que nos acerquen para enriquecernos académica, social y culturalmente. </li>
              <li>Fomentar el debate y el análisis multidisciplinario en un marco nacional e internacional. </li>
              <li>Estrechar vínculos con otros organismos a través de la cooperación y el diálogo abierto.</li>
              <li>Generar proyectos, programas, actividades de impacto social y político.</li>
            </ul>
          </Col>
        </Row>

        {/* ALGO MÁS */}
        <Row className='cedema-description'>
          <Col xs={12} md={6}>
            <h1 className='encode-sans-condensed-regular text-title' data-aos="flip-up" >Titulo</h1>
            <p className='encode-sans-condensed-light text-description' data-aos="fade-up">
              Desccripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?
              Desccripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? 
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Image src="/imgGrupo.jpg" fluid className='img-3' data-aos="fade-right"/>
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
