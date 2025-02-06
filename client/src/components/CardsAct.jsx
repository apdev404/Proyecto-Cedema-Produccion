// En CardsNews.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards2 from './Cards2';
import example from '../assets/example.png';

function CardsNews() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Mantén la URL como está
    axios.get('http://localhost:3001/api/last-activities')
      .then((response) => {
        setActivities(response.data); // Actualiza el estado con los cursos obtenidos
        // console.log(activities);
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
      {activities.length === 0 ? (
        // Si la lista está vacía
        <p>Próximamente</p>
      ) : (
        <>
          {activities.length >= 1 && (
            <Cards2
              key={activities[0].id} // Clave única para la primera tarjeta
              image={activities[0].image1_path}
              buttonText={[activities[0].tipo, activities[0].region, activities[0].temas]}
              head={formatFecha(activities[0].fecha)}
              body={capitalizarPrimeraLetra(activities[0].titulo)}
              footer={activities[0].formato}
              id={activities[0].id}
              width={'25rem'}
              ruta='activities'
            />
          )}
  
          {activities.length >= 2 && (
            <Cards2
              key={activities[1].id} // Clave única para la segunda tarjeta
              image={activities[1].image1_path}
              buttonText={[activities[1].tipo, activities[1].region, activities[1].temas]}
              head={formatFecha(activities[1].fecha)}
              body={capitalizarPrimeraLetra(activities[1].titulo)}
              footer={activities[1].formato}
              id={activities[1].id}
              width={'25rem'}
              ruta='activities'
            />
          )}
        </>
      )}
    </div>
  );
}  
export default CardsNews;
