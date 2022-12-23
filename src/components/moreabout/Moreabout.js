import React from 'react'

import "./Moreabout.css"

const Moreabout = () => {
  return (
    <div className='about'>
        <div className='about-text'>
            <h1>What is Home Automation?</h1>        
            <p>Home Automation, often referred to as “Smart Home Technology”, is the use of technology to automate your home. Home automation allows you to control almost every aspect of your home through the Internet of Things (IoT).
                Home Automation started with the invention of the Thermostat and has developed into one of the biggest and fastest growing markets in technology. Home Automation’s potential continues to grow. You can use it for home security, controlling appliances, monitoring energy use, as a personal assistant, for looking after the elderly or disabled and more.
            </p>       
      </div>
      <div className='about-image'>
        <img src="./security.jpg" className='ab-pic'/>
      </div>
    </div>
  )
}

export default Moreabout
