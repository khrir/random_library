import React from 'react'
import "./css/RecommendedSection.css"
import Book from './Book'
import path from '/book.jpg'

const RecommendedSection = (props) => {
  return (
    <div className='dashboard-recommended-section'>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='books'>
        <Book
          url = {path}
          alt = "teste"
          title = "O teste"
          author = "Kaique"
          year = "2000"
        />
        <Book
          url = {path}
          alt = "teste"
          title = "O teste"
          author = "Kaique"
          year = "2000"
        />
        <Book
          url = {path}
          alt = "teste"
          title = "O teste"
          author = "Kaique"
          year = "2000"
        />
      </div>
    </div>
  )
}

export default RecommendedSection