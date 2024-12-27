import '../css/Details.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Footer from '../components/Footer.jsx';
import example from '../assets/example.png';

export const DetailsPage = () => {
  return (
    <>
      <div className='container-fluid p-0 col'>
          <div className='col banner container-fluid'>
                <Image src={example} fluid  alt="imagen" className='banner-image container-fluid'/>

          </div>

          <div className='info-container col'>

            <div className='info-top'>
                <div className='row infoLeft'>
                  <ul className='infoList'>
                    <li><h1 className='element'>Titulo</h1></li>
                    <li><h3 className='element'>Fecha y hora: 99/99/9999 - 19:30hs</h3></li>
                    <li><h3 className='element'>Modalidad: Virtual/Presencial/Hibrida</h3></li>
                  </ul>
                </div>

                <div className='row infoSecund'>
                      <ul className='infoList infoRight'>
                        <li className='element right'><h3>Temas:</h3></li>
                        <li className='element right'><h3>Region:</h3></li>
                      </ul>
                </div>  
              </div>
              

              <div className='description-container'>
                      <Image src={example} fluid  alt="imagen" className='description-image element row'/>;
                      
                      <h6 className='description-text element'>Desccripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?
                      Desccripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?
                      Desccripcion: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?
                      </h6>
                      <Button variant="primary" className='seeMoreBtn element left'>INSCRIBIRSE</Button>
              </div>
                
              
            </div>
            
          </div>
    
      <Footer className='col container-fluid'/>
    </>
  )
};