import { useContext, useState } from "react";
import { ProductContext } from "../Context/productsContext";
import './CardManager.css';


const CardManager = () => {
    // Uso de contexto Product.
    const { UpdateProduct, DeleteProduct, productos } = useContext(ProductContext);
    //  Uso del estado FormDAta
    const [formData, setFormData] = useState({});

    // Función para manejar cambios en los inputs de cada producto
    const handleChange = (e, productoId) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [productoId]: {
                ...prevData[productoId],
                [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
            }
        }));
    };

    // Función para manejar el submit y actualizar el producto
    const handleSubmit = async (e, productoId) => {
        e.preventDefault();
    
        // Obtén los datos del producto que deseas actualizar desde formData
        const productData = formData[productoId];
    
        // Llamar a la función para actualizar el producto en Firebase
        UpdateProduct(productoId, productData); // Pasamos el id y el objeto de datos
    
        // Limpiar el formulario de ese producto
        setFormData((prevData) => ({
            ...prevData,
            [productoId]: {}  // Limpiar el estado de este producto específico
        }));
    };

    const handleClickDelete = async (id) => {
        DeleteProduct(id)
    }

    return (
        <div className="card-manager-container">
            <h2 className="card-manager-title">CardManager</h2>
            <div className="Productos" >
                {productos.map((producto) => (
                    <form key={producto.id} className="card-update-form" onSubmit={(e) => handleSubmit(e, producto.id)}>
                        <div className="form-group">
                            <label htmlFor={`title-${producto.id}`} className="form-label">Title:</label>
                            <input
                                type="text"
                                id={`title-${producto.id}`}
                                name="title"
                                value={formData[producto.id]?.title || ''}
                                onChange={(e) => handleChange(e, producto.id)}
                                placeholder={producto.title}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`price-${producto.id}`} className="form-label">Price:</label>
                            <input
                                type="number"
                                id={`price-${producto.id}`}
                                name="price"
                                value={formData[producto.id]?.price || ''}
                                onChange={(e) => handleChange(e, producto.id)}
                                placeholder={producto.price}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`stock-${producto.id}`} className="form-label">Stock:</label>
                            <input
                                type="number"
                                id={`stock-${producto.id}`}
                                name="stock"
                                value={formData[producto.id]?.stock || ''}
                                onChange={(e) => handleChange(e, producto.id)}
                                placeholder={producto.stock}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`status-${producto.id}`} className="form-label">Status:</label>
                            <input
                                type="checkbox"
                                id={`status-${producto.id}`}
                                name="status"
                                checked={formData[producto.id]?.status || false}
                                onChange={(e) => handleChange(e, producto.id)}
                                className="form-input-checkbox"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`description-${producto.id}`} className="form-label">Description:</label>
                            <input
                                type="text"
                                id={`description-${producto.id}`}
                                name="description"
                                value={formData[producto.id]?.description || ''}
                                onChange={(e) => handleChange(e, producto.id)}
                                placeholder={producto.description}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`category-${producto.id}`} className="form-label">Category:</label>
                            <input
                                type="text"
                                id={`category-${producto.id}`}
                                name="category"
                                value={formData[producto.id]?.category || ''}
                                onChange={(e) => handleChange(e, producto.id)}
                                placeholder={producto.category}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`quantity-${producto.id}`} className="form-label">Quantity:</label>
                            <input
                                type="number"
                                id={`quantity-${producto.id}`}
                                name="quantity"
                                value={formData[producto.id]?.quantity || ''}
                                onChange={(e) => handleChange(e, producto.id)}
                                placeholder={producto.quantity}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`image-${producto.id}`} className="form-label">Image:</label>
                            <input
                                type="file"
                                id={`image-${producto.id}`}
                                name="image"
                                onChange={(e) => handleChange(e, producto.id)}
                                className="form-input"
                            />
                        </div>

                        <button type="submit" className="submit-btn">Update Product</button>
                        <button type="button" className="submit-btn" onClick={(e) => {
                            e.preventDefault(); // Evitar cualquier comportamiento inesperado
                            handleClickDelete(producto.id);
                        }}>Eliminar Product</button>
                    </form>
                ))}
            </div>
        </div>
    );
};

export default CardManager;
