import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { AboutPage } from '../pages/AboutPage';
import { Formacion } from '../pages/Formacion';
import { Actividades } from '../pages/Actividades';
import { ContactPage } from '../pages/ContactPage';
import { DetailsPage } from '../pages/DetailsPage';
import { NewsDetails } from '../pages/NewsDetails';
import { NewsPage } from '../pages/NewsPage';
import { FormInscripcion } from '../pages/FormInscripcion';
import { DatosBancarios } from '../pages/DatosBancarios';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Header /> }>
          <Route index element={ <Home /> }/>
          <Route path="about" element={ <AboutPage /> }/>
          <Route path="formacion" element={ <Formacion /> }/>
          <Route path="actividades" element={ <Actividades /> }/>
          <Route path="contact" element={ <ContactPage /> }/>
          <Route path="news" element={ <NewsPage /> }/>
          <Route path="datos-bancarios" element={ <DatosBancarios /> }/>
          <Route path=":ruta/details/:id" element={ <DetailsPage /> }/>
          <Route path=":ruta/inscripcion/:id" element={ <FormInscripcion /> }/>
          <Route path="/news/details/:id" element={ <NewsDetails /> }/>
        
        </Route>
      </Routes>
    </>
  )
};

// Header es un componente para navegar por las diferentes url dentro de la pagina. Ruta <Header/>: contiene a las otras rutas, porque él se mantiene en toda la pagina. 