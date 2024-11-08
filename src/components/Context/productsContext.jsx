import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import BBDD from "../../config/firebase";
// import db from '../../config/firebase';




export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
    // Hook useState de contador de productos y productos.
    const [count, setCount] = useState(0);
    const [productos, setProductos] = useState([]);

    // useEffect para traer los productos del BBDD de firestore y del carrito guardado en localStorage.
    useEffect(() => {
        const collectionRef = collection(BBDD.db, "Products");

        getDocs(collectionRef).then((snaps) => {
            const { docs } = snaps;
            const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }));

            // Cargar productos de la BBDD.
            const productosPredeterminados = list;

            // Cargar carrito guardado desde localStorage
            const carritoGuardado = JSON.parse(localStorage.getItem("productosCart")) || [];

            // Ajustar los productos con la cantidad del carrito guardado y verificar el stock
            const productosConCantidad = productosPredeterminados.map((producto) => {
                const productoEnCarrito = carritoGuardado.find(item => item.id === producto.id);
                const cantidadAjustada = productoEnCarrito
                    ? Math.min(productoEnCarrito.quantity, producto.stock) // Ajustar quantity según stock disponible
                    : 0;

                return {
                    ...producto,
                    quantity: cantidadAjustada,
                    stock: producto.stock
                };
            });

            // Cargar la cantidad a los productos existentes desde la BBDD.
            setProductos(productosConCantidad);

            // Calcular el total de quantities en el carrito guardado
            const totalQuantity = productosConCantidad.reduce((acc, producto) => acc + producto.quantity, 0);
            setCount(totalQuantity); // Establecer count con el total de quantities
        });

    }, []); // Ejecuta solo una vez al montar el componente

    // Incrementar contador de carrito y quantity. Y disminuir stock.
    const increment = (id) => {
        setProductos((productos) =>
            productos.map((producto) => {
                // Si el producto coincide y su stock es mayor que 0, realiza el incremento
                if (producto.id === id && producto.stock > 0) {
                    setCount(count + 1);
                    return {
                        ...producto,
                        stock: producto.stock - 1,
                        quantity: producto.quantity + 1
                    };
                }
                // Si no cumple, retorna el producto sin cambios
                return producto;
            })
        );
    };

    //  Decrementar contador de carrito y quantity. Y aumentar stock.
    const decrement = (id) => {
        const producto = productos.find(producto => producto.id === id);

        if ((count > 0) && (producto.quantity > 0)) {
            setCount(count - 1);
            setProductos((productos) =>
                productos.map((producto) =>
                    producto.id === id
                        ? { ...producto, stock: producto.stock + 1, quantity: producto.quantity - 1 }
                        : producto
                )
            );
        }
    };

    //  Agregar productos a la BBDD.
    const AddProduct = async (producto) => {
        const collRef = collection(BBDD.db, "Products");
        const doc = await addDoc(collRef, { ...producto });
        
    };

    // Actualizar Producto de la BBDD.
    const UpdateProduct = async (id, producto) => {
        const collRef = doc(BBDD.db, "Products", id)
        // setDoc sobre escribo todo el elemento
        // updateDoc sobreescribe lo necesario.
        await updateDoc(collRef, { ...producto });
    }

    // Elimianr Producto de la BBDD.
    const DeleteProduct = async (id) => {
        const docRef = doc(BBDD.db, "Products", id);
        await deleteDoc(docRef);
    }

    // Eliminar Producto del carrito
    const eliminarProducto = (id) => {
        // Encuentra el producto y cambia su quantity a 0
        const nuevosProductos = productos.map(producto => {
            if (producto.id === id) {
                return { ...producto, quantity: 0 };
            }
            return producto;
        });
        // Guarda los cambios.
        setProductos(nuevosProductos);

        // Actualiza el carrito y la cantidad total
        const productoAEliminar = productos.find(producto => producto.id === id);
        const cantidadEliminada = productoAEliminar ? productoAEliminar.quantity : 0;
        setCount(count - cantidadEliminada);
    };

    // Exportacion de estados y funciones del Context.
    const value = {
        count,
        setCount,
        productos,
        setProductos,
        increment,
        decrement,
        eliminarProducto,
        AddProduct,
        UpdateProduct,
        DeleteProduct
    }

    // Componente que va a proveer el context
    return <ProductContext.Provider value={value
    }>{children}</ProductContext.Provider>
    // Componente de orden superior. Un HOC
}; // HOC va a proveer a todo lo que sea children.

export default ProductProvider;



/*
       // Cargar productos predeterminados
       const productosPredeterminados = [
           {
               "id": "gfh347fj",
               "title": "Xbox Series X",
               "image": "https://via.placeholder.com/300x300",
               "description": "Disponible en 1 TB.",
               "price": "600",
               "stock": 15,
               "quantity": 0,
               "category": "Consolas"
           },
           {
               "id": "sdfg457fh",
               "title": "Xbox Series S",
               "image": "https://via.placeholder.com/300x300",
               "description": "Disponible en 500 GB.",
               "price": "400",
               "stock": 2,
               "quantity": 0,
               "category": "Consolas"
           },
           {
               "id": "gjsnfj48fh",
               "title": "Nintendo Switch",
               "image": "https://via.placeholder.com/300x300",
               "description": "Edición estándar con Joy-Con azul y rojo.",
               "price": "300",
               "stock": 40,
               "quantity": 0,
               "category": "Consolas"
           },
           {
               "id": "lsdnfj234jh",
               "title": "Nintendo Switch OLED",
               "image": "https://via.placeholder.com/300x300",
               "description": "Pantalla OLED y 64 GB de almacenamiento interno.",
               "price": "350",
               "stock": 30,
               "quantity": 0,
               "category": "Consolas"
           },
           {
               "id": "jsdhfbv84fj",
               "title": "PlayStation VR",
               "image": "https://via.placeholder.com/300x300",
               "description": "Auriculares de realidad virtual para PS4 y PS5.",
               "price": "250",
               "stock": 20,
               "quantity": 0,
               "category": "Accesorios"
           },
           {
               "id": "bvfngj347dj",
               "title": "Xbox Elite Controller",
               "image": "https://via.placeholder.com/300x300",
               "description": "Controlador de alta precisión para Xbox y PC.",
               "price": "150",
               "stock": 35,
               "quantity": 0,
               "category": "Accesorios"
           },
           {
               "id": "hsdjfhg734hj",
               "title": "DualSense Controller",
               "image": "https://via.placeholder.com/300x300",
               "description": "Controlador inalámbrico para PS5.",
               "price": "70",
               "stock": 50,
               "quantity": 0,
               "category": "Accesorios"
           },
           {
               "id": "kgfhwiu847dh",
               "title": "PlayStation 4 Slim",
               "image": "https://via.placeholder.com/300x300",
               "description": "Versión compacta de la PS4, 500 GB.",
               "price": "400",
               "stock": 25,
               "quantity": 0,
               "category": "Consolas"
           },
           {
               "id": "asdfg8347kj",
               "title": "Nintendo Switch Lite",
               "image": "https://via.placeholder.com/300x300",
               "description": "Consola portátil en colores variados.",
               "price": "200",
               "stock": 45,
               "quantity": 0,
               "category": "Consolas"
           },
           {
               "id": "qwer5482bn",
               "title": "Xbox Game Pass Ultimate",
               "image": "https://via.placeholder.com/300x300",
               "description": "Suscripción de 12 meses con acceso a más de 100 juegos.",
               "price": "100",
               "stock": 100,
               "quantity": 0,
               "category": "Suscripciones"
           }
       ];
       */