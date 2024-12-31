import { Link } from "react-router-dom";
import '../css/footer.css';
//import cedemaIcon from '../assets/cedemaIcon.png';
import logo from '../assets/logo.png';


const Footer = () => {
    return (
      <footer className="footer container-fluid text-center encode-sans-condensed-regular">
        <div className="footer-container row">
            <div className='footer-section-top'>
                <div className="footer-about elements-top col">
                    <div className='cedemaFooter'>
                        <h4>CEDEMA <img src={logo} alt="CEDEMA" className="cedemaIcon"/></h4>
                    </div>
                    <p>Somos una empresa comprometida con ofrecer los mejores productos.</p>
                </div>
                <div className="footer-enlaces elements-top col">
                    <h4>Enlaces</h4>
                    <ul className="footer-links">
                        <li><Link className="nav-link" to="/home">Inicio</Link></li>
                        <li><Link className="nav-link" to="/formacion">Formacion</Link></li>
                        <li><Link className="nav-link" to="/about">Nosotros</Link></li>
                        <li><Link className="nav-link" to="/contact">Contacto</Link></li>
                    </ul>
                </div>
                <div className="footer-contact elements-top col">
                    <h4>Contacto:</h4>
                    <p>Email: </p>
                    <p>Teléfono: </p>
                </div>
            </div>
            <div className='footer-redes'>
                <ul className='list'>
                    <li className='listElement'><a href='https://www.facebook.com/'> <i className="fa-brands fa-facebook icons"></i> </a></li>
                    <li className='listElement'><a href='https://www.instagram.com/cedema.arg/'> <i className="fa-brands fa-instagram icons"></i> </a></li>
                    <li className='listElement'><a href='https://www.twitter.com/'><i className="fa-brands fa-twitter icons"></i></a></li>
                </ul>
            </div>    
        </div>
        
        <p className="row-sm mt-1">&copy; 2024 CEDEMA. Todos los derechos reservados.</p>
    </footer>
    )
  };

export default Footer;
