// En CardsNews.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardNews from './CardNews.jsx';
import '../css/lastNews.css';


function LastNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Mantén la URL como está
    axios.get('http://localhost:3001/api/last-news')
      .then((response) => {
        setNews(response.data); // Actualiza el estado con los cursos obtenidos
      })
      .catch((error) => {
        console.error('Error al obtener los cursos:', error);
      });
  }, []);

  const capitalizarPrimeraLetra = (texto) => {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  };

  return (
    <div className='news-container newsCard-container row'>
      {news.length === 0 ? (
        // Si la lista está vacía
        <p>Próximamente</p>
      ) : (
        <div className='news-card-container'>
          {news.length >= 1 && (
                <CardNews 
                key={news[0].id} // Clave única para cada tarjeta
                image={news[0].image1_path}
                head={news[0].fecha.split('T')[0]}
                body={news[0].titulo}
                subtitle={news[0].subtitulo}
                autor={news[0].autor}
                texto={news[0].texto}
                id={news[0].id}
                width={'25rem'}
                ruta='news'
                className='news-card' />
          )}
  
          {news.length >= 2 && (
                <CardNews
                key={news[1].id} // Clave única para cada tarjeta
                image={news[1].image1_path}
                head={news[1].fecha.split('T')[0]}
                body={news[1].titulo}
                subtitle={news[1].subtitulo}
                autor={news[1].autor}
                texto={news[1].texto}
                id={news[1].id}
                width={'25rem'}
                ruta='news'
                className='news-card'/>
          )}
        </div>
      )}
    </div>
  );
}  
export default LastNews;
