import { Link, Outlet } from "react-router-dom";
import "../css/header.css";

export const Header = () => {

  return (
    <>
      <header>
      <nav className="navbar navbar-expand-md header">
        <div className="container-fluid">
          <Link className="navbar-brand logo-inicio" to="/">
            <img src="../../public/vite.svg" alt="logo de Cedema" className="logo"/>
          </Link>
          <button className="navbar-toggler boton-nav" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasMd" aria-controls="navbarOffcanvasMd" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="navbarOffcanvasMd" aria-labelledby="navbarOffcanvasMdLabel">
            <div className="offcanvas-header">
              <img src="../../public/vite.svg" alt="logo de Cedema" className="offcanvas-title logo"  id="offcanvasNavbarLabel"/>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="navbar-nav offcanvas-body">
              <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
              <Link className="nav-link" to="/about" >Nosotros</Link>{/*onClick={(e) => this.setAttribute("data-bs-toggle","offcanvas")} Esto recarga la pagina cada vez que se navega (tipo la pag de china)*/}
              <Link className="nav-link" to="/contact">Contacto</Link>
              <Link className="nav-link disabled" aria-disabled="true">Formación</Link>
              <Link className="nav-link disabled" aria-disabled="true">Actividades</Link>
              <Link className="nav-link disabled" aria-disabled="true">Registrarse</Link>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <Outlet />
    </>
  )
};
// <Outlet /> Espacio vacio donde se renderiza la vista de la url/ruta, pero se mantiene el header.
