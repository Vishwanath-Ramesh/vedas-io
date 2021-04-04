import React from 'react'

import BookCard from '../BookCard/BookCard'
import './BookSlider.css'

const BookSlider = () => {
  return (
    <div className="bookslider">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
        return <BookCard />
      })}
    </div>
  )
}

export default BookSlider
