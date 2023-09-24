//products Context

import React, {
 useReducer,
 useContext,
 useEffect,
 useState
} from 'react'

export const ProductContext = React.createContext()

//Provider, Consumer, useContext()


export default function ProductProvider({children}) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  return (
    <ProductContext.Provider value={{loading, products, featured}}>
      {children}
    </ProductContext.Provider>
  )
}

export const UseProductContext = ()=>{
  return useContext(ProductContext)
}


