import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import example from "../assets/example.png"; // Imagen de ejemplo mientras no llegan datos reales
import "../css/listlinks.css";
import { Link } from 'react-router-dom';

function ListLinks({title}) {
  // Estado para manejar la lista de actividades (tarjetas)
  const [actividades, setActividades] = useState([]);

  // Simulación de fetch a la base de datos (o API)
  useEffect(() => {
    // Simula datos que provendrían de una API (base de datos)
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          image: example,
          buttonText: "Charlas",
          fecha: "2024-12-30",
          titulo: "Título de la actividad 1",
          modalidad: "Virtual"
        },
        {
          id: 2,
          image: example,
          buttonText: "Cursos",
          fecha: "2024-12-31",
          titulo: "Título de la actividad 2",
          modalidad: "Presencial"
        },
        {
          id: 3,
          image: example,
          buttonText: "Seminarios",
          fecha: "2024-12-29",
          titulo: "Título de la actividad 3",
          modalidad: "Híbrido"
        }
      ];
      setActividades(data); // Actualiza el estado con los datos simulados
    };

    fetchData();
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  return (
    <div className="container-fluid container-listlinks row">
      <h1 className="encode-sans-condensed-regular title-list row" data-aos="flip-up">
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
          {actividades.map((actividad) => (
            <Cards
              key={actividad.id} // Clave única para cada tarjeta
              image={actividad.image}
              buttonText={actividad.buttonText}
              head={actividad.fecha}
              body={actividad.titulo}
              footer={actividad.modalidad}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListLinks;
