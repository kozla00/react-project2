import React from 'react'

import "./Contactus.css"

const Contactus = () => {
  return (
    
    <section class="footer_get_touch_outer">
    <div class="container">
      <div class="footer_get_touch_inner grid-70-30">
        <div class="colmun-70 get_form">
          <div class="get_form_inner">
            <div class="get_form_inner_text">
              <h3>Get In Touch with Us</h3>
            </div>
            <form action="#">
              <div class="grid-50-50">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone/Skype" />
              </div>
              <div class="grid-full">
                <textarea placeholder="Type your message" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>   
      </div>
    </div>
    </section> 
  )
}

export default Contactus
