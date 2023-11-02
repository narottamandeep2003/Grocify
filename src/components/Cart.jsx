import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export default function Cart() {

  let list = [
    {
      name: "Pineapple",
      imgUrl: "./S1.jpg",
      type: {
        kg: 2
      },
      price: 200,

    }, {
      name: "Fruit",
      imgUrl: "./S2.jpg",
      type: {
        kg: 2
      },
      price: 150,

    }, {
      name: "Papaya",
      imgUrl: "./S3.jpg",
      type: {
        kg: 2
      },
      price: 100,

    }, {
      name: "Apple",
      imgUrl: "./S4.jpg",
      type: {
        kg: 5
      },
      price: 100,

    }, {
      name: "Kevin",
      imgUrl: "./S5.jpg",
      type: {
        kg: 1
      },
      price: 300,

    }, {
      name: "Orange",
      imgUrl: "./S6.jpg",
      type: {
        kg: 1
      },
      price: 300,

    }, {
      name: "Pear",
      imgUrl: "./S7.jpg",
      type: {
        kg: 1
      },
      price: 300,

    }, {
      name: "Milk",
      imgUrl: "./S8.jpg",
      type: {
        Lt: 1
      },
      price: 30,
    }
  ]
  return (
    <div className='CartPage'>
      <h1 className='CartPageHeading'>Your Cart List</h1>
      <div className="CartWindow">
        <div className="CartList">
          {list.map((ele)=>{
            return <CartItem key={ele.name} data={ele}></CartItem>
          })}
          
        </div>

        <div className="CartDetails">
          <div className="CartDetail">
            <h1>Order Summary</h1>
            <div className="DetailItem">
              <span>Sub cost</span>
              <span className='ItemB'>1000Rs</span>
            </div>
            <div className="DetailItem">
              <span>Discount</span>
              <span className='ItemB'>30Rs</span>
            </div>
            <div className="DetailItem">
              <span>Tax</span>
              <span className='ItemB'>0Rs</span>
            </div>
            <div className="DetailItem">
              <span>Shoping</span>
              <span className='ItemY'>free</span>
            </div>
            <div className="DetailItem">
              <span>Total Cost</span>
              <span className='ItemB'>5000Rs</span>
            </div>
            <button className='CartBtn'> <Link to={"/Payment"}>Proceed to Checkout</Link></button>
          </div>

        </div>
      </div>
    </div>
  )
}
