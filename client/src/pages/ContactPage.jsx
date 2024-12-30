import { useState } from 'react';
import Redes from '../components/Contactos.jsx';
import '../css/contact.css';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export const ContactPage = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");



  return (
    <>
      <section className='section contactos container-fluid'>
        <h3 className='encode-sans-condensed-semibold'>No te pierdas de nada</h3>
        <h2 className='encode-sans-condensed-semibold'>Seguinos en nuestras Redes Sociales</h2>
        <Redes className='redes-contact'/>
      </section>

      <section className="section section-form-contacto container-fluid center justify-content-center">
        <h3 className='section-title titulo-contact  encode-sans-condensed-regular row'>Envianos un mensaje</h3>
        <Form className="form-contact container-sm encode-sans-condensed-semibold row">
          
          <div className="row-sm">
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
      </section>
    </>
  )
};
