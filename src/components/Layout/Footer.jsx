import './Footer.css'; // Puedes agregar tus estilos en un archivo separado

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2024 Herramientas Morelli. Todos los derechos reservados.</p>
        <ul className="links">
          <li><a href="https://wa.me/5493489675553?text=Hola%2C%20me%20comunico%20desde%20el%20E-Commerce%20de%20Herramientas%20Morelli.%20Estoy%20interesado%20en%20un%20producto%20y%20quisiera%20obtener%20más%20información." target="_blank" >WhatsApp</a></li>
          <li><a href="mailto:ezequiel87morelli@gmail.com" target="_blank" >Email</a></li>
          <li><a href="https://www.instagram.com/herramientas.morelli/" target="_blank" >Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;