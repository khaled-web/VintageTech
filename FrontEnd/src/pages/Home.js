import React from "react";
import {Hero} from '../components'
import {Link} from 'react-router-dom'
import FeaturedProducts from '../components/Products/FeaturedProducts'
export default function Home() {
  return(
      <>
        <Hero>
          <Link to="/products" className="btn btn-primary bnt-hero">
            our products
          </Link>
        </Hero>
        <FeaturedProducts/>
      </>
    )
}
