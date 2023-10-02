import React, {useContext} from "react";
import {UseProductContext} from '../context/products'
import Loading from '../components/Loading'
import ProductList from '../components/Products/ProductList'
export default function Products() {
  const {loading, products, featured} = UseProductContext()

  if(loading){
    return <Loading/>
  }
  return <ProductList title='Our products' products={products}/>
}
