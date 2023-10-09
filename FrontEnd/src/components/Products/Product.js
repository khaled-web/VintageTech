import React from "react";
import {Link} from 'react-router-dom'
export default function Product(i) {
  const {id} = i
  const {image, title, price} = i.attributes
  const url = image.data[0].attributes.url
  // console.log(url)
  return(
    <article className="product">
      <div className="img-container">
        <img src={url} alt={title}/>
        <Link to={`products/${id}`} className="btn bnt-primary product-link">details</Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title}</p>
        <p className="product-price">${price}</p>
      </div>
    </article>
  )
}
