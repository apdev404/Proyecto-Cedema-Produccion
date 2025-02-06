import { useEffect, useState } from "react";
import '../css/goToArrow.css';
import { Link } from "react-router-dom";

export const GoToArrow = ({page}) => {
  const title = page == "courses" ? "FORMACION" : (page == "activities" ? "ACTIVIDADES" : (page == "news" ? "NOVEDADES" : "INICIO"));
  // console.log(title);
  
  return (
      <Link to={`/${page}`} className="container-fluid arrowleft-container m-0">
      <i className="showBackButton fa-solid fa-angle-left col"></i>
      <p className="col m-0">Ir a {title}</p>
      </Link>
  )
}