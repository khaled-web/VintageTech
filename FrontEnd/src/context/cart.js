//Cart Context

import React, {
 useReducer,
 useContext,
 useEffect,
 useState
} from 'react'
import localCart from '../utils/localCart'



export const CartContext = React.createContext()

//Provider, Consumer, useContext()
export default function CartProvider({children}) {
 const [cart, setCart]=useState(localCart)
 const [total, setTotal]=useState(0)
 const [cartItem, setCartItem]=useState(0)

 //useEffect
 useEffect(()=>{
  //localStorage
  //cartItems
  let newCartItems = cart.reduce((total,cartItem)=>{
    return total += cartItem.amount
  },0)
  setCartItem(newCartItems)
  //cartTotal
  let newCartTotal = cart.reduce((total,cartItem)=>{
    return total += cartItem.price * cartItem.amount
  },0)
  newCartTotal = parseFloat(newCartTotal.toFixed(2))
  setTotal(newCartTotal)
 },[cart])


 //removeItem
 const removeItem = id=>{}
 //increaseAmount
 const increaseAmount = id=>{}
 //decreaseAmount
 const decreaseAmount = id=>{}
 //addToCart
 const addToCart = product=>{}
 //clearCart
 const clearCart = ()=>{}
  return (
    <CartContext.Provider value={{cart, total, cartItem,removeItem,increaseAmount, decreaseAmount,addToCart,clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const UseCartContext = ()=>{
  return useContext(CartContext)
}
