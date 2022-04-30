import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import image from '../assets/images/IMG_0493.jpeg'
import imagetwo from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={image} alt="" />
      </a>
      <h1>
        <strong>Frank De La Mota's Portfolio</strong>,
        <br />
        React Website
        <br />
        crafted by <a href="#">Frank De La Mota</a>.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
