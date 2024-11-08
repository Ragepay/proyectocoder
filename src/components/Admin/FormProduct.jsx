import { useContext, useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import firebaseConfig from "../../config/firebase";
import "./FormProduct.css";
import CardAdmin from './CardAdmin.jsx';
import { ProductContext } from '../Context/productsContext.jsx';

const FormProduct = () => {
    // Usar context, para agregar nuevo producto a la BBDD.
    const { AddProduct } = useContext(ProductContext);
    // Hook de estado, de los datos del nuevo producto
    const [formData, setFormData] = useState({
        title: '',
        stock: 0,
        status: true,
        price: '',
        image: null,
        description: '',
        category: '',
        quantity: 0
    });
    //  Estado para guardar al url de la imagen subida.
    const [imageURL, setImageURL] = useState('');

    // Función para ir rellenando el FormData de los productos sin manejar archivos ni checkboxes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    // Funcion para agregar nuevo producto a la BBDD en el click de "Agregar Producto".
    const handleSubmit = async (e) => {
        e.preventDefault();
        await AddProduct({ ...formData, image: imageURL });
        setFormData({
            title: '',
            stock: 0,
            status: true,
            price: '',
            image: null,
            description: '',
            category: '',
            quantity: 0
        })
        setImageURL('')
    };

    // Funcion para subir imagen y guardar el url en imageURL
    const handleChangeImage = async (e) => {
        const id = new Date;
        const refStorage = ref(firebaseConfig.storage, `imagen${id}`);
        const fileSnap = await uploadBytes(refStorage, e.target.files[0]);
        const fileUrl = await getDownloadURL(fileSnap.ref);
        // { desc: '', price: '', category: '', disccount: '', fileSrc: '' }
        setImageURL(fileUrl);
    };

    return (
        <div className="form-container">
            <h2>Agregar Producto</h2>
            <div className="containerFormCard">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Stock:</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Image:</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChangeImage}
                            accept="image/*"
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Agregar Producto</button>
                </form>
                <div className="card-preview">
                    <CardAdmin
                        id={formData.id}
                        title={formData.title}
                        image={imageURL} //formData.image ? URL.createObjectURL(formData.image) : ''}
                        description={formData.description}
                        price={formData.price}
                        stock={formData.stock}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormProduct;
