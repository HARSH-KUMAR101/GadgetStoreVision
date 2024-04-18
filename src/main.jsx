import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterContextProvider } from  './context/ContextFilter.jsx'
import { CartProvider } from './context/ContextCart.jsx'
 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterContextProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FilterContextProvider>
  
)
