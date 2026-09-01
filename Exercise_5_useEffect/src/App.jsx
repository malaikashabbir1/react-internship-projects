import React, { useState } from 'react'
import DigitalClock from './components/DigitalClock'
import SearchEngine from './components/SearchEngine'
import Product from './components/Product'


const App = () => {

  const [show, setShow] = useState(false)
  const [showProduct, setShowProduct] = useState(false)

  return (
    <div>
      <button onClick={ () =>{
          setShow(!show)
      }}> {show ? "Hide Time" : "Show Time"} </button>
      {show && <DigitalClock/>}


      <br/> <br/><br/>


      <h1>IKEA SEARCH ENGINE</h1>
      <SearchEngine/>


      <br/> <br/><br/>
      <h1>HIGHFY PRODUCTS</h1>
      <button onClick={ () =>{
          setShowProduct(!showProduct)
      }}> {showProduct ? "Hide Products" : "Show Products"} </button>
      {showProduct && <Product/>}

      
    </div>


  )
}

export default App