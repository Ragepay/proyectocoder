import './CardAdmin.css'; // Asegúrate de crear este archivo para los estilos



const CardAdmin = ({ id, title, image, description, price, stock }) => {

    return (
        <div className="card" key={id}>
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <p className="card-stock">Stock: {stock}</p>
            </div>
            <div className="buttonCard">
                <button className="cantidad-button" disabled={true} >- Carrito</button>
                <span>0</span>
                <button className="cantidad-button" disabled={true} >+ Carrrito</button>
            </div>
        </div>
    );
};

export default CardAdmin;
