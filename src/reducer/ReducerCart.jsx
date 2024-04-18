import React from 'react'

function ReducerCart(state,action) {

  if(action.type === "ADD_TO_CART"){
    let {id,amount,color,product} = action.payload
    
    let cartProduct={
        id:id+color,
        name : product.name,
        amount,
        color,
        price:product.price,
        max:product.stock,
        image : product.image[0].url
    } 

    return {
        ...state,
        cart : [...state.cart,cartProduct]
    }
  }  

  if(action.type === "DELETE_ITEM"){
    let updatedCart = state.cart.filter((currElm)=>currElm.id != action.payload)
    return {
        ...state,
        cart :updatedCart
    }
  }

  if(action.type === "CLEAR_CART"){
    return {
        ...state,
        cart :[]
    }
  }
  if(action.type === "SET_INCREMENT"){
    let updatedProduct = state.cart.map((currElm)=>{
        console.log(currElm)
        if(currElm.id === action.payload){
            let incAmount = currElm.amount + 1;
            if(incAmount >= currElm.max){
                incAmount = currElm.max
            }
            return {
                ...currElm,
                amount:incAmount
            }
        }else {
            return currElm
        }
    })
    return {
        ...state,
        cart:updatedProduct
    }
  }
  if(action.type === "SET_DECREMENT"){
    let updatedProduct = state.cart.map((currElm)=>{
        console.log(currElm)
        if(currElm.id === action.payload){
            let decAmount = currElm.amount - 1;
            if(decAmount <= 1){
                decAmount = 1
            }
            return {
                ...currElm,
                amount:decAmount
            }
        }else {
            return currElm
        }
    })
    return {
        ...state,
        cart:updatedProduct
    }
  }
  if(action.type === "CART_TOTAL_PRICE"){
    let totalPrice= state.cart.reduce((initialvalue,currElm)=>{
        let {price,amount} = currElm
       initialvalue = initialvalue + (price * amount) 

       return initialvalue
    },0)

    return {
        ...state,
        total_price : totalPrice
    }
  }
  return state
}

export default ReducerCart