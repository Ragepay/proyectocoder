import { useContext } from "react";
import { ProductContext } from "../Context/productsContext";

const ItemCount = ({ id, textMas, textMenos, classMas, classMenos }) => {
    const { increment, decrement, productos } = useContext(ProductContext);
    const producto = productos.find((producto) => producto.id === id);



    return (
        <>
            <button className={classMenos} onClick={() => decrement(id)} >{textMenos}</button>
            <span>{producto?.quantity}</span>
            <button className={classMas} onClick={() => increment(id)} >{textMas}</button>
        </>
    );
};

export default ItemCount;


/*
className="cantidad-button"
*/