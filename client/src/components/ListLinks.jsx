import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import "../css/listlinks.css";
import axios from "axios";
import { Link } from 'react-router-dom';

function ListLinks({title}) {
  const ruta = title == "FORMACIÓN" ? 'courses' : 'actividades'; // Define si se solicitan cursos o actividades
  // Esto seria mas facil si tuvieramos un componente por cada bbdd

  // Estado para manejar los datos de las tarjetas
  // const [actividades, setActividades] = useState([]);
  const [datos, setDatos] = useState([]);
  const [uniqueDatos, setUniqueDatos] = useState([]);

  // Simulación de fetch a la base de datos (o API)
  useEffect(() => {
    // Solicitud get al server de los cursos y charlas
    axios
    .get(`http://localhost:3001/${ruta}`)
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
    <div className="container-fluid container-listlinks row">
      <h1 className="encode-sans-condensed-regular title-list row">
        {title}
      </h1>
      <div className="row container-links">
        <div className="container-filters col-2">
          {/* Filtros */}
          <div
            className="btn-group-vertical encode-sans-condensed-regular dropdown-filters"
            role="group"
            aria-label="Vertical button group"
          >
            <div className="dropdownButton" role="group">
              <button
                type="button"
                className="btnDropdown btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                REGION
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdownButton" role="group">
              <button
                type="button"
                className="btnDropdown btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TEMA
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdownButton" role="group">
              <button
                type="button"
                className="btnDropdown btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MODALIDAD
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="container-list row col-8">
          {uniqueDatos.map((uniqueDato) => (
            <Cards
              key={uniqueDato.id} // Clave única para cada tarjeta
              image={uniqueDato.image_path}
              buttonText={uniqueDato.tipo}
              head={uniqueDato.fecha.split('T')[0]}
              body={uniqueDato.titulo}
              footer={uniqueDato.formato}
              id={uniqueDato.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListLinks;
