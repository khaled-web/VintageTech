import React from "react";
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import {
  UseCartContext
} from '../../context/cart'
import localUrl from '../../utils/URL'




export default function CartItem({id,deployImage,title,price,amount}) {
  
  //cart context
  const {removeItem,increaseAmount,decreaseAmount} = UseCartContext()
  return(
    <article className="cart-item">
      <img src={deployImage} alt={title}/>
      <div className="">
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button type="button" className="cart-btn remove-btn " onClick={()=>removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button type="button" className="cart-btn amount-btn" onClick={()=>increaseAmount(id)}>
          <FaAngleUp/>
          </button>
        <p className="item-amount">{amount}</p>
        <button type="button" className="cart-btn amount-btn" onClick={()=>decreaseAmount(id,amount)}>
          <FaAngleDown/>
          </button>
      </div>
    </article>
  )
}
