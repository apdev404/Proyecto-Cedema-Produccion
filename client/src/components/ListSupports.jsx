import '../css/listSupport.css';
//import cedemaIcon from '../assets/cedemaIcon.png';
import uai from '/img/supports/uai.png';
import eppur from '/img/supports/eppur.png';
import espaz from '/img/supports/espaz.png';
import iape from '/img/supports/iape.png';
import iri from '/img/supports/iri.png';
import isf from '/img/supports/isf.png';
import panfletoPol from '/img/supports/panfletoPol.png';
import ra from '/img/supports/ra.png';
import tarpan from '/img/supports/tarpan.png';
import ulp from '/img/supports/ulp.png';
import yd from '/img/supports/yd.png';
import zeit from '/img/supports/zeit.png';

const ListSupports = () => {
    const images = [uai,iape,iri,ulp, eppur, espaz , isf, panfletoPol, ra, tarpan , yd, zeit]
    return (
      <div className='container-supports'>
        <h2 className='section-title encode-sans-condensed-light support-title'>NUESTRAS ALIANZAS:</h2>
        <div className='img-container-support'>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Imagen ${index + 1}`} className='img-support' />
            ))}
        </div>
      </div>
    )
  };

export default ListSupports;
