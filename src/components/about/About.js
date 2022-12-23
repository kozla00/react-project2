import React from 'react'

import "./About.css"

const About = () => {
  return (
    <div class="container-container">
        <div class="item-pic">
            <img className="image" src='whoarewe.jpg' />
        </div>
        <div class="item">
            <p>WHO ARE WE?</p>
            <h3>SMARTHOME COMPANY</h3>
            <p>Home automation also helps consumers improve efficiency. Instead of leaving the air conditioning on all day, a smart home system can learn behaviors and make sure the house is cooled down by the time homeowners arrive home from work. </p>
            <button>MORE ABOUT US</button>
        </div>
    </div>
  )
}

export default About