import Cards from './Cards';
import example from '../assets/example.png';

function CardsAct() {
    return (
        <div className='act-container row'>
            <Cards
                image={example}
                buttonText="Actividades"
                head="Fecha"
                body="Descripción breve"
                footer="Ubicación"
            />
            <Cards
                image={example}
                buttonText="Actividades"
                head="Fecha"
                body="Descripción breve"
                footer="Ubicación"
            />
        </div>
    );
}

export default CardsAct;