//products Context

import React, {
 useReducer,
 useContext,
 useEffect,
 useState
} from 'react'
import axios from 'axios'
import url from '../utils/URL'
import {data} from '../utils/FakeData'
import {featuredProducts,flattenProduct} from '../utils/helpers'



export const ProductContext = React.createContext()

//Provider, Consumer, useContext()
export default function ProductProvider({children}) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])

  useEffect(()=>{ 
    setLoading(true)
    axios.get(`${url}/api/products?populate=*`).then((i)=>{
      console.log(flattenProduct(i.data.data))
      setProducts(flattenProduct(i.data.data))
      const newFeatured = featuredProducts(flattenProduct(i.data.data))
      setFeatured(newFeatured)
      setLoading(false)
      return(()=>{})
    })
  },[])
  return (
    <ProductContext.Provider value={{loading, products, featured}}>
      {children}
    </ProductContext.Provider>
  )
}

export const UseProductContext = ()=>{
  return useContext(ProductContext)
}


