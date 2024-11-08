import './Home.css'; // Asegúrate de tener un archivo CSS para estilos

const Home = () => {
    return (

        <div className="home-container">
            <h1 className="home-title">¡Bienvenido a Herramientas Morelli!</h1>
            <p className="home-intro">
                En Herramientas Morelli encontrarás una amplia variedad de herramientas para construcción,
                carpintería, electricidad y mucho más. Desde herramientas manuales hasta las más avanzadas
                eléctricas, ofrecemos productos de alta calidad a precios competitivos.
                ¡Haz de tus proyectos un éxito con nosotros!
            </p>
            <button className="home-button" onClick={() => window.location.href = '/productos'}>
                Ver Productos
            </button>
        </div>

    );
};

export default Home;
