import React from 'react'
//reactRouterDom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//pages
import {
 Home,
 Cart,
 Checkout,
 Error,
 Login,
 ProductDetails,
 Products,
 About
} from './pages'
//components
import Header from './components/Header'
function App() {
  return (
    <Router>
      <Header/>
      {/* ((Switch)) to don't match errorPage in each route */}
      <Switch>
      {/* ((exact)) to don't match homePage in each route */}
      <Route exact path="/"><Home/></Route> 
      <Route path="/about"><About/></Route>
      <Route path="/cart"><Cart/></Route>
      <Route path="/checkout"><Checkout/></Route>
      <Route path="/login"><Login/></Route>
      {/* ((exact)) to know that there is detailedPage will comes from GeneralPage */}
      <Route exact path="/products"><Products/></Route>
      <Route path="/products/:id" children={<ProductDetails/>}></Route>
      <Route path="*"><Error/></Route>
      </Switch>
    </Router>
  )
}

export default App

