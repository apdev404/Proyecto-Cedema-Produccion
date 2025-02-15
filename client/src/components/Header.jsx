import { Link, Outlet } from "react-router-dom";
import "../css/header.css";
import logo from "/logo-cedema-largo.ico";
import Footer from './Footer.jsx';
import { ArrowUp } from "./ArrowUp.jsx";

export const Header = () => {

  return (
    <>
      <header>
      <nav className="navbar navbar-expand-lg header p-0">
        <div className="container-fluid">
          <Link className="navbar-brand logo-inicio" to="/">
            <img src={logo} width="116" height="49" alt="logo de Cedema" className="logo"/>
          </Link>
          <button className="navbar-toggler boton-nav" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end offcanvas-container encode-sans-condensed-regular" tabIndex={-1} id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
            <div className="offcanvas-header">
              <img src={logo} width="116" height="49" alt="logo de Cedema" className="offcanvas-title logo"  id="offcanvasNavbarLabel"/>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="navbar-nav" data-bs-dismiss="offcanvas">
              <Link className="nav-link header-link" aria-current="page" to="/">INICIO</Link>
              <Link className="nav-link header-link" to="/about">NOSOTROS</Link>{/*onClick={(e) => this.setAttribute("data-bs-toggle","offcanvas")} Esto recarga la pagina cada vez que se navega (tipo la pag de china)*/}
              <Link className="nav-link header-link" aria-disabled="true" to="/courses">FORMACIÓN</Link>
              <Link className="nav-link header-link" aria-disabled="true" to="/activities">ACTIVIDADES</Link>
              <Link className="nav-link header-link" to="/news">NOVEDADES</Link>
              <Link className="nav-link header-link" to="/redacciones">REDACCIONES</Link>
              <Link className="nav-link header-link" to="/contact">CONTACTO</Link>
              {/* <Link className="nav-link header-link disabled" aria-disabled="true">REGISTRARSE</Link> */}
            </div>
          </div>
        </div>
      </nav>
      </header>
      <Outlet />
      <Footer />
      <ArrowUp />
    </>
  )
};
// <Outlet /> Espacio vacio donde se renderiza la vista de la url/ruta, pero se mantiene el header.
// <Footer /> Colocandolo aca, se renderiza en todas las rutas de la pagina. No hace falta ponerlo en los componentes o vistas de otras paginas.
// <ArrowUp /> Componente de flecha que se encarga del Scroll To Top en todas las paginas.
