import React, { useState } from 'react'


export default function ProductsItem(props) {
    const [val, setVal] = useState(0)

    return (
        <div className="ProductsItemBox">
            <div className='ProductsItem'>
                <div className="ProductImgSec">
                    <img src={props.data.imgUrl} alt="..." className='ProductImg' />
                </div>
                <div className="ProductBody">
                    <h1>{props.data.name}</h1>
                    <p>{(props.data.type.kg) ? props.data.type.kg : props.data.type.Lt} - {(props.data.type.kg) ? "Kg" : "lt"} <span className='ProductRs'> Rs.{props.data.price}</span></p>
                    <div className="ProductPrice">
                        <div className="ProductAdd">
                            <button className='Productl' onClick={() => {
                                if (val !== 0)
                                    setVal(val - 1)
                            }} >-</button><button className='Productm'>{val}</button><button className='Productr' onClick={() => { setVal(val + 1) }}>+</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
