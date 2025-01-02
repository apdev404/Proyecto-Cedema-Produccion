import Cards from './Cards';
import example from '../assets/example.png';

function CardsNews() {
  return (
    <div className='news-container row'>
      <Cards
      image={example}
      buttonText="Charlas"
      head="Fecha"
      body="Título"
      footer="Modalidad"
      /> 
      <Cards
      image={example}
      buttonText="Charlas"
      head="Fecha"
      body="Título"
      footer="Modalidad"
      />
      </div>
  );
}

export default CardsNews;