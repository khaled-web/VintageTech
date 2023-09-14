import React from "react";
import '../assets/Css/error.css'
import {Link} from 'react-router-dom'

export default function Error() {
  return(
    <section className="error-page section">
      <div className="error-container">
        <h1>OOps! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">back to home</Link>
      </div>
    </section>
  )
}
