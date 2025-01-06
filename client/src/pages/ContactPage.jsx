import { useState } from 'react';
import Redes from '../components/Contactos.jsx';
import '../css/contact.css';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export const ContactPage = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");



  return (
    <>
      <section className='section contactos container-fluid' >
        <h3 className='encode-sans-condensed-semibold' data-aos="flip-up">No te pierdas de nada</h3>
        <h2 className='encode-sans-condensed-semibold' data-aos="flip-down">Seguinos en nuestras Redes Sociales</h2>
        <Redes className='redes-contact'/>
      </section>

      <section className="section section-form-contacto container-fluid center justify-content-center">
        <h3 className='section-title titulo-contact  encode-sans-condensed-regular row' data-aos="flip-up">Envianos un mensaje</h3>

        <div className='row container-lg mt-3 align-items-center justify-content-center'>

          <div className="encode-sans-condensed-semibold col info-left-form" data-aos="fade-right">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique inventore fuga asperiores voluptatibus. Corporis vitae quam praesentium molestias qui tempora maxime laudantium eum ipsa, fugit nam tenetur velit sunt at!
          </div>

          <div className="form-contact container-fluid encode-sans-condensed-semibold col" data-aos="fade-right" data-aos-delay="40">
          <Form className="container-sm">
            
            <div className="row-sm">
              <div className="col">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  id=""
                  placeholder="Su nombre"
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />  
              </div>
              <div className="col">
                <Form.Label>Apellido:</Form.Label>
                <Form.Control
                  id=""
                  placeholder="Su apellido"
                  type="text"
                  required
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />  
              </div>
              
            </div>

            <div className="row-sm">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                id=""
                placeholder="email"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="row-sm">
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control
                id=""
                placeholder="Escriba su mensaje..."
                as="textarea"
                required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>

            <div className="row-sm">
            <Button type="submit" className="btn-form-contact">
              ENVIAR
            </Button>
            </div>

          </Form>
          </div>
        </div>

      </section>
      <i className="fa-solid fa-envelope mail-fondo"></i>
    </>
  )
};
