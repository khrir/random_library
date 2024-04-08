import React from 'react'
import './css/Book.css'

const Book = (props) => {
  return (
    <div className='book'>
      <img src={props.url} alt={props.alt} className='book-cover'/>
      <h3 className='book-title'>{props.title}</h3>
      <p className='book-info'>{props.author}, {props.year}</p>
    </div>
  )
}

export default Book