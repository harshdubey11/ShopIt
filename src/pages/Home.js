import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import ProductList from '../features/product-list/ProductList'

function Home() {
  return (
    <div>
         <Navbar Children={ProductList}/>
    </div>
  )
}

export default Home