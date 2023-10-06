import React from "react";
import {useParams} from 'react-router-dom'
//productContext
import {
  UseProductContext
} from '../context/products'
//cartContext
import {
  UseCartContext
} from '../context/cart'
import {useHistory} from 'react-router-dom'
import Loading from '../components/Loading'


export default function ProductDetails() {
  const {id} = useParams()
  const history = useHistory()
  const {products} =UseProductContext()
  //fromCartContext
  const {addToCart}=UseCartContext()
  const product = products.find(i=>i.id === parseInt(id))
  if(products.length === 0){
    return <Loading/>
  }
  else{
    const {image, title, price, description} = product
    return(
      <section className="single-product">
        <img src={image} alt={title} className="single-product-image"/>
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description }</p>
          <button className="btn btn-primary btn-block" onClick={()=>{
            //add to cart
            addToCart(product)
            history.push('/cart')
          }}>add to cart</button>
        </article>
      </section>
    )
  }
}
