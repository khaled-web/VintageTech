import React from "react";
import loading from '../assets/Loading-new.gif'

export default function Loading() {
  return(
    <div className="loading">
      <h2>loading....</h2>
      <img src={loading} alt="loading"/>
    </div>
  )
}
