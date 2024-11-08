import './WhatsApp.css';  // Asegúrate de crear este archivo para los estilos

const WhatsAppButton = () => {
    const handleClick = () => {
        window.open('https://wa.me/5493489675553?text=Hola%2C%20me%20comunico%20desde%20el%20E-Commerce%20de%20Herramientas%20Morelli.%20Estoy%20interesado%20en%20un%20producto%20y%20quisiera%20obtener%20más%20información.', '_blank');  // Reemplaza con tu número de WhatsApp
    };

    return (
        <div className="whatsapp-button" onClick={handleClick}>
            <i className="fab fa-whatsapp"></i>
        </div>
    );
};

export default WhatsAppButton;
