import React from "react";
import {Link} from 'react-router-dom'
import localUrl from '../../utils/URL'



export default function Product(i) {
  // console.log(i)
  const {id} = i
  const{title, price,image} = i.attributes
  const url = image.data[0].attributes.url

  return(
    <article className="product">
      <div className="img-container">
        <img className="image-products" src={`${localUrl}${url}`} alt={title}/>
        <Link to={`products/${id}`} className="btn bnt-primary product-link">details</Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title}</p>
        <p className="product-price">${price}</p>
      </div>
    </article>
  )
}
