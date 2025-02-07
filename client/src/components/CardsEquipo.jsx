import CardEquipos from './CardEquipos.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from "react";
import axios from "axios";

function CardsEquipo() {
    const ruta = 'equipo'; // Define si se solicitan cursos o actividades
    // Esto seria mas facil si tuvieramos un componente por cada bbdd
  
    // Estado para manejar los datos de las tarjetas
    // const [actividades, setActividades] = useState([]);
    const [datos, setDatos] = useState([]);
    const [uniqueDatos, setUniqueDatos] = useState([]);
  
    // fetch a la base de datos (o API)
    useEffect(() => {
      // Solicitud get al server de los cursos y charlas
      axios
      .get(`https://proyecto-cedema-produccion-production.up.railway.app/equipo`)
      .then((response) => {
        // console.log(response.data);
        setDatos(response.data);
  
        // Filtrar duplicados por ID
        const filtrados = response.data.reduce((acc, current) => {
          if (!acc.some(item => item.id === current.id)) {
              acc.push(current);
          }
          return acc;
        }, []);
        // console.log(filtrados);
        setUniqueDatos(filtrados);
        // console.log(uniqueDatos);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
    }, []); // Este efecto se ejecuta solo una vez al montar el componente
  
    return (
        <Row>
            {uniqueDatos.map((uniqueDato, index) => (
                <Col key={`${uniqueDato.id}-${index}`} xs={12} md={6}>
                <CardEquipos
                    image={uniqueDato.image1_path}
                    nombre={uniqueDato.nombre}
                    cargo={uniqueDato.cargo}
                    titulo={uniqueDato.titulo}
                    edad={uniqueDato.edad}
                    id={uniqueDato.id}
                    ruta={ruta}
                />
                </Col>
            ))}
        </Row>
    );
}

export default CardsEquipo;