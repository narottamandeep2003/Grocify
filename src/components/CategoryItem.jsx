import React from 'react'

export default function CategoryItem(props) {
    return (
        <div className="CategoryItem">
            <img src={props.imgUrl} alt="..." className='CategoryImg' />
            <p>{props.title}</p>
        </div>
    )
}
