import React from 'react'
import ProductsItem from './ProductsItem'
import { useContext } from 'react'
import { UserContext } from '../Store'
export default function Product(props) {

  const list = useContext(UserContext)["list"]
  return (
    <div className='Product' style={{ marginTop: props["Margin"].margin }} >
      {
        list.map((ele) => {
          console.log(ele.name)
          return <ProductsItem data={ele} key={ele.name}></ProductsItem>
        })
      }
    </div>
  )
}
