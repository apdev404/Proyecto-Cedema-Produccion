import '../css/listSupport.css';
//import cedemaIcon from '../assets/cedemaIcon.png';
import uai from '../../public/img/supports/uai.png';
import eppur from '../../public/img/supports/eppur.png';
import espaz from '../../public/img/supports/espaz.png';
import iape from '../../public/img/supports/iape.png';
import iri from '../../public/img/supports/iri.png';
import isf from '../../public/img/supports/isf.png';
import panfletoPol from '../../public/img/supports/panfletoPol.png';
import ra from '../../public/img/supports/ra.png';
import tarpan from '../../public/img/supports/tarpan.png';
import ulp from '../../public/img/supports/ulp.png';
import yd from '../../public/img/supports/yd.png';
import zeit from '../../public/img/supports/zeit.png';

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
