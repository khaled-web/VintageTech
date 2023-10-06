//Cart Context

import React, {
 useReducer,
 useContext,
 useEffect,
 useState
} from 'react'
import localCart from '../utils/localCart'

//getCartFromLocalStorage
const getCartFromLocalStorage = ()=>{
  return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}



export const CartContext = React.createContext()

//Provider, Consumer, useContext()
export default function CartProvider({children}) {
  //getCartFromLocalStorage...toSaveInLocalStorage
 const [cart, setCart]=useState(getCartFromLocalStorage)
 const [total, setTotal]=useState(0)
 const [cartItem, setCartItem]=useState(0)

 //useEffect
 useEffect(()=>{
  //localStorage
  localStorage.setItem('cart', JSON.stringify(cart))
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
 const removeItem = id=>{
  setCart([...cart].filter((i)=>i.id !==id))
 }
 //increaseAmount
 const increaseAmount = id=>{
  setCart([...cart].map((i)=>{
    return i.id === id ? {...i, amount:i.amount+1}:{...i}
  }))
 }
 //decreaseAmount
 const decreaseAmount = (id,amount)=>{
  if(amount === 1){
    setCart([...cart].filter((i)=>i.id !==id))
  }
  else{
    setCart([...cart].map((i)=>{
      return i.id === id?{...i, amount:i.amount-1}:{...i}
    }))
  }
 }
 //addToCart
 const addToCart = product=>{
 const {id, image, price, title} = product
 const item  = [...cart].find((i)=>i.id === id)
 if(item){
  increaseAmount(id)
  return
 }
 else{
  const newItem = {id, image, price, title, amount:1}
  const newCart = [...cart, newItem]
  setCart(newCart)
 }
 }
 //clearCart
 const clearCart = ()=>{
  setCart([])
 }
  return (
    <CartContext.Provider value={{cart, total, cartItem,removeItem,increaseAmount, decreaseAmount,addToCart,clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const UseCartContext = ()=>{
  return useContext(CartContext)
}
