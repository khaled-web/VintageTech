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
 const [item, setItem]=useState(0)
  return (
    <CartContext.Provider value={{cart, total, item}}>
      {children}
    </CartContext.Provider>
  )
}

export const UseProductContext = ()=>{
  return useContext(CartContext)
}
