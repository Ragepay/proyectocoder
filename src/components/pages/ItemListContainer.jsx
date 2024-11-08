import { useContext, useState } from "react";
import Card from "../Card/Card.jsx";
import Filtro from "../filtro/Filtro.jsx";
import "./ItemListContainer.css";
import { ProductContext } from "../Context/productsContext.jsx";

const ItemListContainer = () => {
    // Usando el contexto de productos.
    const { productos } = useContext(ProductContext);


    const [selectedCategory, setSelectedCategory] = useState("all");
    const categories = [...new Set(productos.map(product => product.category).filter(Boolean))];
    const filteredProducts = selectedCategory === "all"
        ? productos
        : productos.filter(product => product.category === selectedCategory);



    return (
        <div className="item-list-container">
            <div className="filter-container">
                <Filtro
                    categories={categories}
                    onCategoryChange={setSelectedCategory}
                />
            </div>
            <h3>Productos:</h3>
            <div className="products-container">
                {filteredProducts
                    .filter((producto) => producto.status === true) // Filtramos los productos con status true
                    .map((producto) => (
                        <Card
                            key={producto.id}
                            id={producto.id}
                            title={producto.title}
                            image={producto.image}
                            description={producto.description}
                            price={producto.price}
                            stock={producto.stock}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ItemListContainer;