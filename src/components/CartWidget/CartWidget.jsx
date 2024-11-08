import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context/productsContext';
import './cartWidget.css'

const CartWidget = () => {
  const { count } = useContext(ProductContext)
  return (
    <div className="cart-widget">
      <Link to="/carrito" className="cart-link">
        <span><img src="https://img.icons8.com/?size=100&id=ii6Lr4KivOiE&format=png&color=000000" alt="Carrito" title="Carrito" /></span> {/* Icono del carrito */}
        <span>{count}</span> {/* Número de artículos en el carrito */}
      </Link>
    </div>
  );
};

export default CartWidget;