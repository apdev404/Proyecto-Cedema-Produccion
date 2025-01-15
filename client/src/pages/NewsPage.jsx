import '../css/Home.css';
import ListNews from '../components/ListNews.jsx';

export const NewsPage = () => {
  return (
    <>
      <div className='container-fluid p-0 col encode-sans-condensed-regular'>
        <ListNews />
      </div>
    </>
  )
};