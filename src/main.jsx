import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ProductProvider from './components/Context/productsContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ProductProvider>
        <App />
      </ProductProvider>
    </StrictMode>
  </BrowserRouter>
)