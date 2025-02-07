import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { AboutPage } from '../pages/AboutPage.jsx';
import { Formacion } from '../pages/Formacion.jsx';
import { Actividades } from '../pages/Actividades.jsx';
import { ContactPage } from '../pages/ContactPage.jsx';
import { DetailsPage } from '../pages/DetailsPage.jsx';
import { NewsDetails } from '../pages/NewsDetails.jsx';
import { NewsPage } from '../pages/NewsPage.jsx';
import { FormInscripcion } from '../pages/FormInscripcion.jsx';
import { DatosBancarios } from '../pages/DatosBancarios.jsx';
import { Redaccion } from '../pages/Redaccion.jsx';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Header /> }>
          <Route index element={ <Home /> }/>
          <Route path="about" element={ <AboutPage /> }/>
          <Route path="courses" element={ <Formacion /> }/>
          <Route path="activities" element={ <Actividades /> }/>
          <Route path="contact" element={ <ContactPage /> }/>
          <Route path="news" element={ <NewsPage /> }/>
          <Route path="datos-bancarios" element={ <DatosBancarios /> }/>
          <Route path=":ruta/details/:id" element={ <DetailsPage /> }/>
          <Route path=":ruta/inscripcion/:id" element={ <FormInscripcion /> }/>
          <Route path="/news/details/:id" element={ <NewsDetails /> }/>
          <Route path="redacciones" element={ <Redaccion /> }/>
        
        </Route>
      </Routes>
    </>
  )
};

// Header es un componente para navegar por las diferentes url dentro de la pagina. Ruta <Header/>: contiene a las otras rutas, porque él se mantiene en toda la pagina. 