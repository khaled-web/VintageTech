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

import {featuredProducts} from '../utils/helpers'

export const ProductContext = React.createContext()

//Provider, Consumer, useContext()


export default function ProductProvider({children}) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])

  useEffect(()=>{ 
    setLoading(true)
    setProducts(data)
    const newFeatured = featuredProducts(data)
    setFeatured(newFeatured)
    setLoading(false)
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


