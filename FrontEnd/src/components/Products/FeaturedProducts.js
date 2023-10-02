import React from "react";
import ProductList from './ProductList'
import {UseProductContext} from '../../context/products'
import Loading from '../Loading'

export default function FeaturedProducts() {
  const {loading, featured} = UseProductContext()
  if(loading){
    return <Loading/>
  }
  return <ProductList title='Featured Products' products={featured}/>
}
