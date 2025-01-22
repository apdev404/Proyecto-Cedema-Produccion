import { useEffect, useState } from "react";
import CardNews from "../components/CardNews";
import "../css/listlinks.css";
import axios from "axios";
// import { Link } from 'react-router-dom';

function ListNews() {
  

  // Estado para manejar los datos de las tarjetas
  // const [actividades, setActividades] = useState([]);
  const [datos, setDatos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [selectedFiltersRegion, setSelectedFiltersRegion] = useState([]);
  const [selectedFiltersTema, setSelectedFiltersTema] = useState([]);
  const [selectedFiltersFecha, setSelectedFiltersFecha] = useState([]);

  // fetch a la base de datos (o API)
  useEffect(() => {
    // Solicitud get al server de los cursos y charlas
    axios
    .get(`http://localhost:3001/news`)
    .then((response) => {
      console.log(response.data);
      setDatos(response.data);
      setDatosFiltrados(response.data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  // FILTROS
  const regiones = [...new Set(datos.map((uniqueDato) => uniqueDato.region))];
  const temas = [...new Set(datos.map((uniqueDato) => uniqueDato.temas))];
  const fechas = [...new Set(datos.map((uniqueDato) => uniqueDato.mes))];

    // FUNCIONES DE FILTRADO
  // Filtro de REGION
  const handleFilterRegion = (selectedRegion) => {
    if(selectedFiltersRegion.includes(selectedRegion)) {
      let filters = selectedFiltersRegion.filter((filtro) => filtro !== selectedRegion); // Se fija si el filtro ya esta seleccionado y lo saca de la lista de filtros seleccionados
      setSelectedFiltersRegion(filters); // Actualiza los filtros seleccionados.
    } else {
      setSelectedFiltersRegion([...selectedFiltersRegion, selectedRegion]); // Si el filtro no estaba, se agrega a la lista.
    }
  };

  // Filtro de TEMA
  const handleFilterTema = (selectedTema) => {
    if(selectedFiltersTema.includes(selectedTema)) {
      let filters = selectedFiltersTema.filter((filtro) => filtro !== selectedTema); // Se fija si el filtro ya esta seleccionado y lo saca de la lista de filtros seleccionados
      setSelectedFiltersTema(filters); // Actualiza los filtros seleccionados.
      console.log(selectedFiltersTema);
    } else {
      setSelectedFiltersTema([...selectedFiltersTema, selectedTema]); // Si el filtro no estaba, se agrega a la lista.
    }
  };

  // Filtro de FECHA
  const handleFilterFecha = (selectedFecha) => {
    if(selectedFiltersFecha.includes(selectedFecha)) {
      let filters = selectedFiltersFecha.filter((filtro) => filtro !== selectedFecha); // Se fija si el filtro ya esta seleccionado y lo saca de la lista de filtros seleccionados
      setSelectedFiltersFecha(filters); // Actualiza los filtros seleccionados.
      console.log(selectedFiltersFecha);
    } else {
      setSelectedFiltersFecha([...selectedFiltersFecha, selectedFecha]); // Si el filtro no estaba, se agrega a la lista.
    }
  };


  const handleChange =e => {
    setBusqueda(e.target.value);
    console.log("Busqueda: "+e.target.value);
    filterSearch(e.target.value);
  };

  const filterSearch = (endSearch) => {
    var searchResult = datos.filter((item)=>{
      if(item.titulo.toString().toLowerCase().includes(endSearch.toLowerCase())) 
        return item;
    })
    setDatosFiltrados(searchResult);
  }

  // FILTRADO DE DATOS QUE SE RENDERIZAN
  useEffect(() => {
    let result = datos;
    result = filterItemsRegion(result);
    result = filterItemsTema(result);
    result = filterItemsFecha(result);
    setDatosFiltrados(result);
  }, [selectedFiltersRegion, selectedFiltersTema, selectedFiltersFecha]); // Depende de los filtros seleccionados

  const filterItemsRegion = (items) => {
    if (selectedFiltersRegion.length > 0) { // Si hay filtros seleccionados
      let tempDatos = selectedFiltersRegion.map((filtro) => { // Por cada filtro seleccionado, trae los datos que tengan esa misma categoria
        let temp = items.filter((item) => item.region === filtro); // Retorna el dato que tiene misma region que el filtro
        return temp;
      });
      console.log(tempDatos);
      return tempDatos.flat();
    } else {
      return items;
    }
  };

  const filterItemsTema = (items) => {
    if (selectedFiltersTema.length > 0) { // Si hay filtros seleccionados
      let tempDatos = selectedFiltersTema.map((filtro) => { // Por cada filtro seleccionado, trae los datos que tengan esa misma categoria
        let temp = items.filter((item) => item.temas === filtro); // Retorna el dato que tiene misma region que el filtro
        return temp;
      });
      console.log(tempDatos);
      return tempDatos.flat();
    } else {
      return items;
    }
  };

  const filterItemsFecha = (items) => {
    if (selectedFiltersFecha.length > 0) { // Si hay filtros seleccionados
      let tempDatos = selectedFiltersFecha.map((filtro) => { // Por cada filtro seleccionado, trae los datos que tengan esa misma categoria
        let temp = items.filter((item) => item.mes === filtro); // Retorna el dato que tiene misma region que el filtro
        return temp;
      });
      console.log(tempDatos);
      return tempDatos.flat();
    } else {
      return items;
    }
  };

  return (
    <div className="container-fluid container-listlinks">
      <h1 className="encode-sans-condensed-regular title-list row">
        NOTICIAS
      </h1>
      <div className="row container-links">
      <div className="row inputSearch-container">
          <input 
            className="inputSearch"
            type="text" 
            value={busqueda}
            placeholder="Buscador" 
            onChange={handleChange}
          />
            <i className="searchLogo fa fa-search" aria-hidden="true"></i>
        </div>
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
              {regiones.map((region, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleFilterRegion(region)}
                      className={selectedFiltersRegion?.includes(region) ?"activo dropdown-item" : "dropdown-item"}
                      href="#">
                      {region}
                    </button>
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
              {temas.map((tema, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleFilterTema(tema)}
                      className={selectedFiltersTema?.includes(tema) ?"activo dropdown-item" : "dropdown-item"}
                      href="#">
                      {tema}
                    </button>
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
              {fechas.map((fecha, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleFilterFecha(fecha)}
                      className={selectedFiltersFecha?.includes(fecha) ?"activo dropdown-item" : "dropdown-item"}
                      href="#">
                      {fecha}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="container-list">
          {datosFiltrados.map((uniqueDato) => (
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
