import React, {useContext} from "react";
import {UseProductContext} from '../context/products'
export default function Products() {
  const {loading, products, featured} = UseProductContext()
  console.log(loading, products, featured)
  return <h1>Hello from products page</h1>;
}
