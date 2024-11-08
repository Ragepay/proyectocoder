import './Card.css'; // Asegúrate de crear este archivo para los estilos
import { Link } from 'react-router-dom';
import ItemCount from '../pages/ItemCount';

const Card = ({ id, title, image, description, price, stock }) => {

    return (
        <div className="card" key={id}>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={title} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <p className="card-price">${price}</p>
                    <p className="card-stock">Stock: {stock}</p>
                </div>
            </Link>
            <div className="buttonCard">
                <ItemCount id={id} textMas={"+ Carrito"} textMenos={"- Carrito"} classMas={"card-button"} classMenos={"card-button"}/>
            </div>
        </div>
    );
};

export default Card;