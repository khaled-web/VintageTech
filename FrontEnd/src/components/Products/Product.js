import React from "react";
import {Link} from 'react-router-dom'
export default function Product({id, image, title, price}) {
  return(
    <article className="product">
      <div className="img-container">
        <img src={image} alt={title}/>
        <Link to={`products/${id}`} className="btn bnt-primary product-link">details</Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title}</p>
        <p className="product-price">${price}</p>
      </div>
    </article>
  )
}
