import React from 'react'
import 'react-icons'
import './css/Item.css'

function Item(props) {
    return (
        <li>
            <a className='aside-item' href={props.href}>
                <div className='aside-icon'>{props.icon}</div>
                <div className='aside-title'>{props.title}</div>
            </a>
        </li>
    )
}

export default Item