import { useEffect, useState } from "react";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import "../css/listlinks.css";
import axios from "axios";
import { GoToArrow } from '../components/GoToArrow';
// import { Link } from 'react-router-dom';

function ListLinks({title, ruta}) {
  // const ruta = title == "FORMACIÓN" ? 'courses' : 'activities'; 
  // Define si se solicitan cursos o actividades
  // Esto seria mas facil si tuvieramos un componente por cada tabla de la bbdd
  console.log(ruta);

  // Estado para manejar los datos de las tarjetas
  const [datos, setDatos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [selectedFiltersRegion, setSelectedFiltersRegion] = useState([]);
  const [selectedFiltersTema, setSelectedFiltersTema] = useState([]);
  const [selectedFiltersTipo, setSelectedFiltersTipo] = useState([]);
  const [selectedFiltersModalidad, setSelectedFiltersModalidad] = useState([]);

  // fetch a la base de datos (o API)
  useEffect(() => {
    // Solicitud get al server de los cursos y charlas
    axios
    .get(`http://localhost:3001/${ruta}`)
    .then((response) => {
      // console.log(response.data);
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
  const tipos = [...new Set(datos.map((uniqueDato) => uniqueDato.tipo))];
  const modalidades = [...new Set(datos.map((uniqueDato) => uniqueDato.formato))];

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
      // console.log(selectedFiltersTema);
    } else {
      setSelectedFiltersTema([...selectedFiltersTema, selectedTema]); // Si el filtro no estaba, se agrega a la lista.
    }
  };

  // Filtro de TIPO
  const handleFilterTipo = (selectedTipo) => {
    if(selectedFiltersTipo.includes(selectedTipo)) {
      let filters = selectedFiltersTipo.filter((filtro) => filtro !== selectedTipo); // Se fija si el filtro ya esta seleccionado y lo saca de la lista de filtros seleccionados
      setSelectedFiltersTipo(filters); // Actualiza los filtros seleccionados.
      // console.log(selectedFiltersTipo);
    } else {
      setSelectedFiltersTipo([...selectedFiltersTipo, selectedTipo]); // Si el filtro no estaba, se agrega a la lista.
    }
  };

  // Filtro de MODALIDAD
  const handleFilterModalidad = (selectedModalidad) => {
    if(selectedFiltersModalidad.includes(selectedModalidad)) {
      let filters = selectedFiltersModalidad.filter((filtro) => filtro !== selectedModalidad); // Se fija si el filtro ya esta seleccionado y lo saca de la lista de filtros seleccionados
      setSelectedFiltersModalidad(filters); // Actualiza los filtros seleccionados.
      // console.log(selectedFiltersModalidad);
    } else {
      setSelectedFiltersModalidad([...selectedFiltersModalidad, selectedModalidad]); // Si el filtro no estaba, se agrega a la lista.
    }
  }

  const handleChange =e => {
    setBusqueda(e.target.value);
    // console.log("Busqueda: "+e.target.value);
    filterSearch(e.target.value);
  };

  const filterSearch = (endSearch) => {
    var searchResult = datos.filter((item)=>{
      if(item.titulo.toString().toLowerCase().includes(endSearch.toLowerCase()) || item.region.toString().toLowerCase().includes(endSearch.toLowerCase()) || item.temas.toString().toLowerCase().includes(endSearch.toLowerCase()) || item.tipo.toString().toLowerCase().includes(endSearch.toLowerCase()) || item.formato.toString().toLowerCase().includes(endSearch.toLowerCase())) 
        return item;
    })
    setDatosFiltrados(searchResult);
  }

  // FILTRADO DE DATOS QUE SE RENDERIZAN
    useEffect(() => {
      let result = datos;
      result = filterItemsRegion(result);
      result = filterItemsTema(result);
      result = filterItemsTipo(result);
      result = filterItemsModalidad(result);
      setDatosFiltrados(result);
    }, [selectedFiltersRegion, selectedFiltersTema, selectedFiltersTipo, selectedFiltersModalidad]); // Depende de los filtros seleccionados

    const filterItemsRegion = (items) => {
      if (selectedFiltersRegion.length > 0) { // Si hay filtros seleccionados
        let tempDatos = selectedFiltersRegion.map((filtro) => { // Por cada filtro seleccionado, trae los datos que tengan esa misma categoria
          let temp = items.filter((item) => item.region === filtro); // Retorna el dato que tiene misma region que el filtro
          return temp;
        });
        // console.log(tempDatos);
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
        // console.log(tempDatos);
        return tempDatos.flat();
      } else {
        return items;
      }
    };

    const filterItemsTipo = (items) => {
      if (selectedFiltersTipo.length > 0) { // Si hay filtros seleccionados
        let tempDatos = selectedFiltersTipo.map((filtro) => { // Por cada filtro seleccionado, trae los datos que tengan esa misma categoria
          let temp = items.filter((item) => item.tipo === filtro); // Retorna el dato que tiene misma region que el filtro
          return temp;
        });
        // console.log(tempDatos);
        return tempDatos.flat();
      } else {
        return items;
      }
    };

    const filterItemsModalidad = (items) => {
      if (selectedFiltersModalidad.length > 0) { // Si hay filtros seleccionados
        let tempDatos = selectedFiltersModalidad.map((filtro) => { // Por cada filtro seleccionado, trae los datos que tengan esa misma categoria
          let temp = items.filter((item) => item.formato === filtro); // Retorna el dato que tiene misma region que el filtro
          return temp;
        });
        // console.log(tempDatos);
        return tempDatos.flat();
      } else {
        return items;
      }
    };


  return (
    <>
    <GoToArrow page={""}/>
    <div className="container-fluid container-listlinks">
      <h1 className="encode-sans-condensed-regular section-title title-list row" data-aos="flip-up">
        {title}
      </h1>
      <div className="row container container-links">
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
        
        <div className="container-filters container row p-0">
          {/* Filtros */}
          <div
            className="btn-group container row encode-sans-condensed-regular dropdown-filters"
            role="group"
            aria-label="Default button group"
          >
            <div className="btn-group col dropdownButton" role="group">
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
            <div className="btn-group col dropdownButton" role="group">
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
            <div className="btn-group col dropdownButton" role="group">
              <button
                type="button"
                className="btnDropdown btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TIPO
              </button>
              <ul className="dropdown-menu">
                {tipos.map((tipo, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleFilterTipo(tipo)}
                      className={selectedFiltersTipo?.includes(tipo) ?"activo dropdown-item" : "dropdown-item"}
                      href="#">
                      {tipo}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-group col dropdownButton" role="group">
              <button
                type="button"
                className="btnDropdown btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MODALIDAD
              </button>
              <ul className="dropdown-menu">
              {modalidades.map((modalidad, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleFilterModalidad(modalidad)}
                      className={selectedFiltersModalidad?.includes(modalidad) ?"activo dropdown-item" : "dropdown-item"}
                      href="#">
                      {modalidad}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        {/* Si el titulo es FORMACION, se renderizan las tarjetas de cursos (Cards), sino se renderizan las de Actiidades (Cards2) */}
        {title == "FORMACIÓN" ?
        (<div className="container-list row row-cols-2">
          {datosFiltrados.map((uniqueDato) => (
            <Cards
              key={uniqueDato.id} // Clave única para cada tarjeta
              image={uniqueDato.image1_path}
              buttonText={[uniqueDato.tipo, uniqueDato.region, uniqueDato.temas]}
              head={uniqueDato.fecha.split('T')[0]}
              body={uniqueDato.titulo}
              footer={uniqueDato.formato}
              id={uniqueDato.id}
              ruta={ruta}
              width={'20rem'}
            />
          ))}
        </div>)
        :
        (<div className="container-list row row-cols-2">
          {datosFiltrados.map((uniqueDato) => (
            <Cards2
              key={uniqueDato.id} // Clave única para cada tarjeta
              image={uniqueDato.image1_path}
              buttonText={[uniqueDato.tipo, uniqueDato.region, uniqueDato.temas]}
              head={uniqueDato.fecha.split('T')[0]}
              body={uniqueDato.titulo}
              footer={uniqueDato.formato}
              id={uniqueDato.id}
              ruta={ruta}
              width={'20rem'}
            />
          ))}
        </div>)
      }
      </div>
    </div>
    </>
  );
}

export default ListLinks;
