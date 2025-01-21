import { useEffect, useState } from "react";
import CardNews from "../components/CardNews";
import "../css/listlinks.css";
import axios from "axios";
// import { Link } from 'react-router-dom';

function ListNews() {
  

  // Estado para manejar los datos de las tarjetas
  // const [actividades, setActividades] = useState([]);
  const [datos, setDatos] = useState([]);
  const [uniqueDatos, setUniqueDatos] = useState([]);

  // fetch a la base de datos (o API)
  useEffect(() => {
    // Solicitud get al server de los cursos y charlas
    axios
    .get(`http://localhost:3001/news`)
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

  // FILTROS
  const regiones = [...new Set(uniqueDatos.map((uniqueDato) => uniqueDato.region))];
  const temas = [...new Set(uniqueDatos.map((uniqueDato) => uniqueDato.temas))];
  const fechas = [...new Set(uniqueDatos.map((uniqueDato) => uniqueDato.mes))];

  return (
    <div className="container-fluid container-listlinks">
      <h1 className="encode-sans-condensed-regular title-list row">
        NOTICIAS
      </h1>
      <div className="row container-links">
        <div className="container-filters p-0">
          {/* Filtros */}
          <div
            className="btn-group encode-sans-condensed-regular dropdown-filters"
            role="group"
            aria-label="Default button group"
          >
            <div className="btn-group dropdownButton" role="group">
              <button
                type="button"
                className="btnDropdown btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                REGION
              </button>
              <ul className="dropdown-menu">
              {regiones.map((region) => (
                  <li>
                    <a className="dropdown-item" href="#">
                      {region}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-group dropdownButton" role="group">
              <button
                type="button"
                className="btnDropdown btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TEMA
              </button>
              <ul className="dropdown-menu">
              {temas.map((tema) => (
                  <li>
                    <a className="dropdown-item" href="#">
                      {tema}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-group dropdownButton" role="group">
              <button
                type="button"
                className="btnDropdown btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FECHA
              </button>
              <ul className="dropdown-menu">
              {fechas.map((fecha) => (
                  <li>
                    <a className="dropdown-item" href="#">
                      {fecha}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="container-list">
          {uniqueDatos.map((uniqueDato) => (
            <CardNews
              key={uniqueDato.id} // Clave única para cada tarjeta
              image={uniqueDato.image1_path}
              head={uniqueDato.fecha.split('T')[0]}
              body={uniqueDato.titulo}
              subtitle={uniqueDato.subtitulo}
              autor={uniqueDato.autor}
              texto={uniqueDato.texto}
              id={uniqueDato.id}
              ruta='news'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListNews;
