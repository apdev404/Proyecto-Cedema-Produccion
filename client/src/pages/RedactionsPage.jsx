import '../css/Home.css';
import ListRedactions from '../components/ListRedactions.jsx';

export const RedactionsPage = () => {
  return (
    <>
      <div className='container-fluid p-0 col encode-sans-condensed-regular'>
        <ListRedactions />
      </div>
    </>
  )
};