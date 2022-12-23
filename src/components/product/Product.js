import React from 'react'

import {RiHomeWifiFill} from "react-icons/ri"
import {MdOutlineWindow} from "react-icons/md"
import {RiRemoteControlLine} from "react-icons/ri"
import {GiSmokeBomb} from "react-icons/gi"
import {FaHandHoldingWater} from "react-icons/fa"
import {TiWeatherPartlySunny} from "react-icons/ti"

import "./Product.css"

const Product = () => {
  return (
    <div className='header'>
        <h1>All Our Products</h1>
    <div className="martix-container">
    <div className="matrix-board">
      <div className="matrix-box"><RiHomeWifiFill className='product-icon' /><p>Monitor Sensor</p></div>
      <div className="matrix-box"><TiWeatherPartlySunny className='product-icon' /><p>Weather Sensor</p></div>
      <div className="matrix-box"><GiSmokeBomb className='product-icon' /><p>Smoke Detector</p></div>
      <div className="matrix-box"><FaHandHoldingWater className='product-icon' /><p>Water Sensor</p></div>
      <div className="matrix-box"><RiRemoteControlLine className='product-icon' /><p>Climate Control</p></div>
      <div className="matrix-box"><MdOutlineWindow className='product-icon' /><p>Window Contact</p></div>
    </div>
  </div>
  </div>
  )
}

export default Product
