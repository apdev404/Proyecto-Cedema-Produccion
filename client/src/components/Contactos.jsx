import '../css/logo.css';

function Redes() {
    return (
        <div className="container-fluid p-0">
            <ul className='list-social row p-0'>
                <li className='social-elements col' data-aos="fade-up" data-aos-delay="100"><a href='https://www.facebook.com/cedema.arg/'><i className="fa-brands fa-facebook-f social"></i></a></li>
                <li className='social-elements col' data-aos="fade-up" data-aos-delay="200"><a href='https://chat.whatsapp.com/IDauAcD6Pmv5pzYhmyGvRP'><i className="fa-brands fa-whatsapp social"/></a></li>
                <li className="social-elements col" data-aos="fade-up" data-aos-delay="300"><a href='https://www.youtube.com/@cedemaarg1850'><i className="fa-brands fa-youtube social"/></a></li>
                <li className="social-elements col" data-aos="fade-up" data-aos-delay="400"><a href='https://www.instagram.com/cedema.arg/'><i className="fa-brands fa-instagram social fa-instagram-redes"/></a></li>
                <li className="social-elements col" data-aos="fade-up" data-aos-delay="500"><a href='https://www.linkedin.com/in/cedema-arg-ab61ab206/'><i className="fa-brands fa-linkedin-in social fa-linkedin-redes"/></a></li>
                {/*<li className="social-elements col"><a href='https://x.com/cedemaarg?s=21&t=rSDaeal1gk1xmAUlPwKb9w'><i className="fa-brands fa-twitter social fa-twitter-redes"/></a></li>*/}
            </ul>
        </div>  
    );
}

export default Redes;