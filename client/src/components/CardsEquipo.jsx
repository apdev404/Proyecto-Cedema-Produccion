import CardEquipos from './CardEquipos';
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
      .get(`http://localhost:3001/equipo`)
      .then((response) => {
        console.log(response.data);
        setDatos(response.data);
  
        // Filtrar duplicados por ID
        const filtrados = response.data.reduce((acc, current) => {
          const exists = acc.find(item => item.id === current.id);
          if (!exists) {
            acc.push(current);
          }
          return acc;
        }, []);
        // console.log(filtrados);
        setUniqueDatos(filtrados);
        console.log(uniqueDatos);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
    }, []); // Este efecto se ejecuta solo una vez al montar el componente
  
    return (
        <Row>
            {uniqueDatos.map((uniqueDato, index) => (
                <Col xs={12} md={6}>
                <CardEquipos
                    key={`${uniqueDato.id}-${index}`} // Clave única para cada tarjeta
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