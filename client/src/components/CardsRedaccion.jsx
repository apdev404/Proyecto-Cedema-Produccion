import CardRedaccion from './CardRedaccion.jsx';
import '../css/cardRedaccion.css';
import { useEffect, useState } from "react";
import axios from "axios";

function CardsRedaccion() {
    const ruta = 'redaccion'; 
    // Esto seria mas facil si tuvieramos un componente por cada bbdd
  
    // Estado para manejar los datos de las tarjetas
    // const [actividades, setActividades] = useState([]);
    const [datos, setDatos] = useState([]);
    const [uniqueDatos, setUniqueDatos] = useState([]);
    const [datosFiltrados, setDatosFiltrados] = useState([]);
    
  
    // fetch a la base de datos (o API)
    useEffect(() => {
      // Solicitud get al server de los cursos y charlas
      axios
      .get(`http://localhost:3001/redaccion`)
      .then((response) => {
        console.log(response.data);
        setDatos(response.data);
        setDatosFiltrados(response.data);
  
        // Filtrar duplicados por ID
        const filtrados = response.data.reduce((acc, current) => {
          if (!acc.some(item => item.id === current.id)) {
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

    const [busqueda, setBusqueda] = useState("");
    const handleChange =e => {
        setBusqueda(e.target.value);
        // console.log("Busqueda: "+e.target.value);
        filterSearch(e.target.value);
      };
    
      const filterSearch = (endSearch) => {
        var searchResult = datos.filter((item)=>{
          if(item.titulo.toString().toLowerCase().includes(endSearch.toLowerCase())) 
            return item;
        })
        setDatosFiltrados(searchResult);
      }

    return (
      <>
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
        </div>
        <div className='redaccion-container'>
            {datosFiltrados.map((uniqueDato) => (
                <CardRedaccion
                    portada={uniqueDato.image1_path}
                    perfil={uniqueDato.image2_path}
                    titulo={uniqueDato.titulo}
                    descripcion={uniqueDato.descripcion}
                    fecha={uniqueDato.fecha}
                    autor={uniqueDato.autor}
                    id={uniqueDato.id}
                    ruta={ruta}
                />  
            ))}
        </div>
      </>
    );
}

export default CardsRedaccion;
