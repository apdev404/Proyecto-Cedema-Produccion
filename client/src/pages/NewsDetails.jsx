import '../css/Details.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const NewsDetails = () => {
  const { id } = useParams();
  const ruta = 'news'
  const [datos, setDatos] = useState(null);

  useEffect(() => {
   console.log("Ruta:", ruta, "ID:", id); // Verifica los valores



    const fetchDatos = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${ruta}/${id}`);
        console.log("Datos recibidos:", response.data);
        const detalle = Array.isArray(response.data) ? response.data[0] : response.data; // Toma el primer elemento si es un array
        setDatos(detalle);
        console.log("Estado actualizado:", detalle);
      } catch (error) {
        console.error("Error al obtener los detalles:", error);
      }
    };
  
    fetchDatos();
  }, [ruta, id]);
  

  console.log("Estado actual de details:", datos); // Verifica el estado
  
  
  if (!datos) return <p>Cargando detalles...</p>;

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
    <>
      <section className='container-fluid p-0 encode-sans-condensed-regular'>
        <div className='banner row-md container-fluid p-0'>
          <Image src={datos.image1_path} fluid  alt="imagen" className='banner-image container-fluid p-0'/>
        </div>
        <div className='info-container container-sm p-4'>

          <div className='info-top row container-sm align-items-center'>
            <div className='col-md infoLeft'>
              <ul className='infoList container-fluid m-0 p-0'>
                <li><h3 className='element row'>Fecha: {formatFecha(datos.fecha)}</h3></li>
                <li><h1 className='element row'>{capitalizarPrimeraLetra(datos.titulo)}</h1></li>
                <li><h4 className='element row'>{datos.subtitulo}</h4></li>
              </ul>
            </div>
            <div className='col-md infoSecund'>
              
            </div>  
          </div>
              
          <div className='description-container row container-sm justify-content-center'>
            <Image src={datos.image1_path} fluid  alt="imagen" className='description-image row'/>
            <h6 className='description-text row element'>{datos.texto}
            </h6>
            <h6>
              Autor: {datos.autor}
            </h6>
          </div>
        </div>
            
      </section>
    </>
  )
};