import React from 'react'
import LandingPage from './LandingPage'
import Offers from './Offers'
import Category from './Category'
import Product from './Product'
import Footer from './Footer'


export default function Home() {
  return (
    <div>
      <LandingPage></LandingPage>
      <h1 className='HProduct'>Product</h1>
      <div className="section">
       
        <Product Margin={{ "margin": "100px" }}></Product>
      </div>
      <Category></Category>
      <Offers></Offers>
      <Footer></Footer>
    </div>
  )
}
