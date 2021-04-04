import React from 'react'
import {
  Search as SearchIcon,
  FavoriteBorder as FavoriteBorderIcon,
  PersonOutline as PersonOutlineIcon,
  ShoppingCartOutlined as ShoppingCartIcon,
} from '@material-ui/icons'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">Vedas</div>
      <div className="navbar__search">
        <SearchIcon />
      </div>
      <div className="navbar__fav">
        <FavoriteBorderIcon />
      </div>
      <div className="navbar__account">
        <PersonOutlineIcon />{' '}
      </div>
      <div className="navbar__cart">
        <ShoppingCartIcon />
        <span className="navbar__cartlabel">Cart (0)</span>
      </div>
    </div>
  )
}

export default Navbar
