import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import { ProductContext } from '../Context/productsContext';


const Detail = () => {
    // Cotexto de productos y funciones de increment y decrement.
    const { productos, increment, decrement } = useContext(ProductContext);
    // Hook de useParams para traer el detail correcto.
    const { id } = useParams();

    const product = productos.find(product => product.id === id); // Asegúrate de que ambos sean strings

    if (!product) return <p>Producto no encontrado.</p>;

    return (
        <div className="detail-container" >
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="detail-image" />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button className="card-button" onClick={() => decrement(product.id)}>
                - Carrito
            </button>
            <button className="card-button" onClick={() => increment(product.id)}>
                + Carrito
            </button>
        </div>
    );
};

export default Detail;
