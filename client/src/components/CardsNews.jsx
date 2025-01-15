// En CardsNews.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

function CardsNews() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Mantén la URL como está
    axios.get('http://localhost:3001/api/last-courses')
      .then((response) => {
        setCourses(response.data); // Actualiza el estado con los cursos obtenidos
      })
      .catch((error) => {
        console.error('Error al obtener los cursos:', error);
      });
  }, []);

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const anio = date.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };
  
  const capitalizarPrimeraLetra = (texto) => {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  };

  return (
    <div className='news-container row'>
      {courses.length > 0 && (
        <>
          <Cards
             key={courses[0].id} // Clave única para cada tarjeta
             image={courses[0].image1_path}
             buttonText={courses[0].tipo ? courses[0].tipo : courses[0].direccion }
             head={formatFecha(courses[0].fecha)}
             body={capitalizarPrimeraLetra(courses[0].titulo)}
             footer={courses[0].formato}
             id={courses[0].id}
             ruta='courses'
          />
          <Cards
              key={courses[1].id} // Clave única para cada tarjeta
              image={courses[1].image1_path}
              buttonText={courses[1].tipo ? courses[1].tipo : courses[1].direccion }
              head={formatFecha(courses[1].fecha)}
              body={capitalizarPrimeraLetra(courses[1].titulo)}
              footer={courses[1].formato}
              id={courses[1].id}
              ruta='courses'
          />
        </>
      )}
    </div>
  );
}

export default CardsNews;
