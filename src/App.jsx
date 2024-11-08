// Utils
import { Route } from 'react-router-dom';
//  Componentes
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
//  Pages
import Carrito from './components/pages/Carrito';
import Contacto from './components/pages/Contacto';
import Detail from './components/pages/Detail';
import Home from './components/pages/Home';
import ItemListContainer from './components/pages/ItemListContainer';
import AdminManager from './components/Admin/AdminManager';
import NotFound from './components/pages/NotFound';
import WhatsAppButton from './components/Layout/Whatsapp';
//  CSS
import "./App.css"
// USE STATE
import { Routes } from 'react-router-dom';


const App = () => {
  // Layout de Header + Children + Footer.
  const Layout = ({ children }) => {
    return (
      <div>
        <NavBar />
        {children}
        <Footer />
        <WhatsAppButton/>
      </div>
    )
  }



  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin/:password" element={<AdminManager />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

