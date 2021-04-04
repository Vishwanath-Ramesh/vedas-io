import React from 'react'
import {
  GradeOutlined as GradeOutlinedIcon,
  Add as AddIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

import './BookCard.css'

const BookCard = () => {
  return (
    <div className="bookcard">
      <img
        className="bookcard__bookimage"
        src="https://image.tmdb.org/t/p/w200//ajKpYK7XdzIYjy9Uy8nkgRboKyv.jpg"
        alt=""
      />
      <div className="bookcard__offers">
        <div className="bookcard__discount">-20%</div>
        <IconButton disableRipple className="bookcard__like">
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
      </div>
      <div className="bookcard__bookdetails">
        <div className="bookcard__bookhead">
          <div className="bookcard__title">Rich dad poor dad</div>
          <div className="bookcard__rate">3.99</div>
        </div>
        <div className="bookcard__bookinfo">
          <div className="bookcard__rating">
            <GradeOutlinedIcon />
            <span className="bookcard__ratinglabel">4.8</span>
          </div>
          <div className="bookcard__buy">
            <span className="bookcard__buylabel">Buy</span>
            <AddIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard
