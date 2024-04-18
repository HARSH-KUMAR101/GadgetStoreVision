import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ReducerCart'

const CartContext = createContext() 

 

const initialstate={
    cart:[],
    total_item:"",
    total_price:"",
    shipping_fee: 50000
}
   
const CartProvider=({children})=>{

   const [state,dispatch]=useReducer(reducer,initialstate) 
       const addtoCart=(id,amount,color,product)=>{
     dispatch({type:"ADD_TO_CART",payload:{id,amount,color,product}})
    }

    const deleteItem=(id)=>{
      dispatch({type:"DELETE_ITEM",payload:id})        
    }

   const clearCart=()=>{
     dispatch({type:"CLEAR_CART"})
   }

  const setincrement=(id)=>{
    dispatch({type:"SET_INCREMENT",payload:id})
  }
  const setdecrement=(id)=>{
    dispatch({type:"SET_DECREMENT",payload:id})
  }

    useEffect(()=>{
      dispatch({type:"CART_TOTAL_PRICE"})
    },[state.cart]) 

    return <CartContext.Provider
         value={{
            ...state,
            addtoCart,
            deleteItem,
            clearCart,
            setincrement,
            setdecrement
            }}>
           {children}
        </CartContext.Provider>
}


const useCartContext=()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext}