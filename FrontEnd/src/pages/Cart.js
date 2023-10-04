import React from "react";
import {
  UseCartContext
} from '../context/cart'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItem from '../components/Cart/CartItem'
import {Link} from 'react-router-dom'
// import {UseUserContext} from '../context/user'


export default function Cart() {
  let user = false
  const {cart, total, item} = UseCartContext()
  //return-emptyCart
  if(cart.length === 0){
    return <EmptyCart/>
  }
  //return-fullyCart
  return(
    <section className="cart-items section">
      <h2>your cart</h2>
      {cart.map((i)=>{
        return <CartItem key={i.id} {...i}/>
      })}
      <h2>total : $ {total}</h2>
      {user?
      <Link to ='/checkout' className='btn btn-primary btn-block'>
        checkout
      </Link>      
      :      
      <Link to ='/login' className='btn btn-primary btn-block'>
        login
      </Link>
      }
    </section>
  )
}
