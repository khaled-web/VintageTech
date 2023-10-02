//products Context

import React, {
 useReducer,
 useContext,
 useEffect,
 useState
} from 'react'
import {data} from '../utils/FakeData'

export const ProductContext = React.createContext()

//Provider, Consumer, useContext()


export default function ProductProvider({children}) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(data)
  const [featured, setFeatured] = useState([])

  useEffect(()=>{ 
    setLoading(true)
    console.log(data)
    setLoading(false)
  })
  return (
    <ProductContext.Provider value={{loading, products, featured}}>
      {children}
    </ProductContext.Provider>
  )
}

export const UseProductContext = ()=>{
  return useContext(ProductContext)
}


