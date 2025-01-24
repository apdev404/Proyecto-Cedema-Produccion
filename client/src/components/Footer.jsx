import { Link } from "react-router-dom";
import '../css/footer.css';
//import cedemaIcon from '../assets/cedemaIcon.png';
import logo from '../assets/logo.png';


const Footer = () => {
    return (
      <footer className="footer container-fluid text-center encode-sans-condensed-regular">
        <div className="footer-container container-fluid row">
            <div className='footer-section-top container-fluid row p-0'>
                <div className="footer-about elements-top col-md">
                    <div className='cedemaFooter --'>
                        <h4>CEDEMA <img src={logo} alt="CEDEMA" className="cedemaIcon"/></h4>
                    </div>
                    <p className="">El Centro de Debate Multidisciplinario Argentino (CEDEMA) es una comunidad de debate, formación y producción de contenido independiente y plural sin ideología política partidaria, conformada por jóvenes estudiantes, graduados e intelectuales de distintas disciplinas y universidades de todo el país y la región latinoamericana.  
                    </p>
                </div>
                <div className="footer-enlaces elements-top col-md">
                    <h4 className="row p-0">Enlaces</h4>
                    <ul className="footer-links row p-0">
                        <li><Link className="nav-link" to="/">Inicio</Link></li>
                        <li><Link className="nav-link" to="/about">Nosotros</Link></li>
                        <li><Link className="nav-link" to="/formacion">Formacion</Link></li>
                        <li><Link className="nav-link" to="/actividades">Actividades</Link></li>
                        <li><Link className="nav-link" to="/news">Noticias</Link></li>
                        <li><Link className="nav-link" to="/contact">Contacto</Link></li>
                    </ul>
                </div>
                <div className="footer-contact elements-top col-md">
                    <h4 className="row p-0">Contacto:</h4>
                    <p className="row p-0">Email: cedemaarg@gmail.com </p>
                    <p className="row p-0">Teléfono: </p>
                    <Link className="row p-0 text-white" to="/datos-bancarios">Datos Bancarios</Link>
                </div>
            </div>
            <div className='footer-redes row p-0'>
                <ul className='list'>
                    <li className='listElement'><a href='https://www.facebook.com/'> <i className="fa-brands fa-facebook icons"></i> </a></li>
                    <li className='listElement'><a href='https://www.instagram.com/cedema.arg/'> <i className="fa-brands fa-instagram icons"></i> </a></li>
                    <li className='listElement'><a href='https://www.twitter.com/'><i className="fa-brands fa-twitter icons"></i></a></li>
                </ul>
            </div>    
        </div>
        
        <p className="">&copy; 2024 CEDEMA. Todos los derechos reservados.</p>
    </footer>
    )
  };

export default Footer;
