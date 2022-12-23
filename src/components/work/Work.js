import React from 'react'

import {BiPhoneCall} from "react-icons/bi"
import {BsBoxSeam} from "react-icons/bs"
import {SiHomeassistant} from "react-icons/si"
import {AiOutlineSafety} from "react-icons/ai"


import "./Work.css"

const Work = () => {
  return (
    <div className='work-proccess'>
        <div className='work'>
            <h3>How to become Our customer</h3>  
        </div>
        <div className='work-type'>
        <div className="work-step">
            <h3>Your Order<BiPhoneCall className='work-icon' /></h3>     
        </div>
        <div className="work-step">
            <h3>Installation<BsBoxSeam className='work-icon' /></h3>   
        </div>
        <div className="work-step">
            <h3>Track your home<SiHomeassistant className='work-icon' /></h3>   
        </div>
        <div className="work-step">
            <h3>Enjoy Your Safety<AiOutlineSafety className='work-icon' /></h3>   
        </div>
        </div>
    </div>
  )
}

export default Work
