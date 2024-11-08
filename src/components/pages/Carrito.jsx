import { useState, useContext, useEffect } from 'react';
import './Carrito.css';
import { ProductContext } from '../Context/productsContext';
import Loading from './Loading';

const Carrito = () => {
    // Usando el contexto de productos y funciones increment y drecrement.
    const { productos, increment, decrement, eliminarProducto } = useContext(ProductContext);
    // Estado para productos del carrito.
    const [productosCart, setProductosCart] = useState([]);
    const [loading, setLoading] = useState(true);

    /*
    const carritoGuardado = JSON.parse(localStorage.getItem("productosCart"));
    console.log > (carritoGuardado);
    */

    // useEffect para establecer el estado de productos
    useEffect(() => {
        setTimeout(() => {
            setProductosCart(productos);
            setLoading(false);
        }, 100)

    }, [productos]); // Ejecuta solo una vez al montar el componente

    // Guardar productos en localStorage cada vez que productosCart cambia
    useEffect(() => {
        if (productosCart.length > 0) {
            localStorage.setItem('productosCart', JSON.stringify(productosCart));
        }
    }, [productosCart])

    // Aumentar cantidad de un producto en el carrito.
    const aumentarCantidad = (id) => {
        increment(id);
        setProductosCart(productos);
    };

    // Disminuir cantidad de un producto en el carrito.
    const disminuirCantidad = (id) => {
        decrement(id);
        setProductosCart(productos);
    };

    // Calculo del total del carrito.
    const totalCarrito = () => {
        return productosCart.reduce((total, producto) => total + (producto.price * producto.quantity), 0);
    };

    // Pagina cargando si hay algun problema.
    if (loading) return <Loading />

    return (
        <div className="carrito-container">
            <h1 className="carrito-title">Carrito de Compras</h1>
            <div className="productos-list">
                {productosCart.map((producto) => {
                    // Comprobar que la cantidad es mayor a 0.
                    if (producto.quantity > 0) {
                        return (
                            <div key={producto.id} className="producto-item">
                                <h2>{producto.title}</h2>
                                <p>Precio: ${producto.price}</p>
                                <div className="cantidad-container">
                                    <button onClick={() => disminuirCantidad(producto.id)}>-</button>
                                    <span>{producto.quantity}</span>
                                    <button onClick={() => aumentarCantidad(producto.id)}>+</button>
                                </div>
                                <button onClick={() => eliminarProducto(producto.id)} className="eliminar-button">Eliminar</button>
                            </div>
                        );
                    }
                    // Retorna null si la condición no se cumple (si la cantidad es menor a 0)
                    return null;
                })}
            </div>
            <div className="total">
                <h3>Total: ${totalCarrito()}</h3>
            </div>
            <button className="finalizar-button">Finalizar Compra</button>
        </div>
    );
};

export default Carrito;
