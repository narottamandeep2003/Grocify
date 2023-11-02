import React, { useState } from 'react'

export default function CartItem(props) {
    const [val,setVal]=useState(0)
    return (
        <div className="CartItem">
            <div className="CartItemLeft">
                <img src={props.data.imgUrl} alt="..." className='CartImg' />
            </div>
            <div className="CartItemRight">
                <h1>{props.data.name}</h1>
                <p className='CartDisc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim a reprehenderit porro suscipit quam et sint in. Corrupti aliquid mollitia atque ducimus nobis praesentium voluptate vero veritatis cumque inventore? Rerum!</p>
                <p className='CartPrice'>{(props.data.type.kg) ? props.data.type.kg : props.data.type.Lt} - {(props.data.type.kg) ? "Kg" : "lt"} <span> Rs.{props.data.price}</span></p>
                <div className="CartAdd">
                    <button className='Cartl'
                    onClick={() => {
                        if (val !== 0)
                            setVal(val - 1)
                    }}
                    >-</button><button className='Cartm'>{val}</button><button className='Cartr' onClick={() => { setVal(val + 1) }}>+</button>
                </div>
                <span className='CartDel'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}
