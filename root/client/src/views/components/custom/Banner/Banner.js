import React from 'react'

import bannerImg from '../../../../assets/images/old-paper-background-2.png'
import './Banner.css'

const Banner = () => {
  return (
    <header className="banner">
      <img className="banner__bg" src={bannerImg} alt="" srcSet="" />
    </header>
  )
}

export default Banner
