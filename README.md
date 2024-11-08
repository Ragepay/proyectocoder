# Herramientas Morelli - E-commerce

## Descripción

**Herramientas Morelli** es un e-commerce interactivo y completo desarrollado en React, diseñado para ofrecer a los usuarios una experiencia fluida y amigable al explorar y comprar herramientas. Los usuarios pueden navegar entre diferentes productos, agregar artículos al carrito de compras, y gestionar su selección. Además, el proyecto cuenta con una **sección administrativa secreta** que permite agregar, actualizar y eliminar productos, ideal para la gestión de inventario.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **React Router**: Para la navegación entre las diferentes páginas del sitio.
- **CSS**: Personalización y diseño visual de la aplicación.
- **Local Storage**: Almacena los datos del carrito de compras para que persistan incluso al cerrar la aplicación.
- **SweetAlert2**: Para mostrar alertas elegantes en diversas interacciones, como confirmaciones de carrito y operaciones en la sección de administración.

## Funcionalidades

- **Lista de Productos**: Muestra todos los productos de herramientas disponibles, con detalles rápidos de cada uno.
- **Detalles del Producto**: Cada producto tiene una página individual donde se puede ver su descripción completa, precio, disponibilidad en stock y la opción para agregarlo al carrito.
- **Carrito de Compras Interactivo**: Permite agregar, quitar y ajustar la cantidad de productos en el carrito, calcula el total de la compra en tiempo real y guarda el contenido del carrito en Local Storage.
- **Sección de Contacto**: Formulario de contacto para que los usuarios puedan comunicarse directamente con la tienda.
- **Enlaces Útiles**: Accesos directos a redes sociales y medios de contacto, como WhatsApp e Instagram.
- **Sección de Administración Secreta**: Un panel exclusivo que permite:
  - Agregar nuevos productos al catálogo.
  - Actualizar la información de productos existentes.
  - Eliminar productos del inventario.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Ragepay/CreaTuLandingPeyraga

cd HerramientasMorelli
npm install
npm run dev


.env necesarios:

VITE_API_KEY=AIzaSyD8D6C1kDoMBKEQ2JUEKbtA2rfUO3Vbt8o
VITE_AUTH_DOMAIN=oderhouseproyect-react-peyra.firebaseapp.com
VITE_PROJECT_ID=coderhouseproyect-react-peyra
VITE_STORAGE_BUCKET=coderhouseproyect-react-peyra.appspot.com
VITE_MESSAGING_SENDER_ID=947146217435
VITE_APP_ID=1:947146217435:web:4a057d8fdc790a422079fe
VITE_MEASUREMENT_ID=G-B7ZRSPRXVP
VITE_ADMIN_PASSWORD=12345678
