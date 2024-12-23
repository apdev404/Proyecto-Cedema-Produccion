import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Header /> }>
          <Route index element={ <Home /> }/>
          <Route path="about" element={ <AboutPage /> }/>
          <Route path="contact" element={ <ContactPage /> }/>
        </Route>
      </Routes>
    </>
  )
};

// Header es un componente para navegar por las diferentes url dentro de la pagina. Ruta <Header/>: contiene a las otras rutas, porque él se mantiene en toda la pagina. 