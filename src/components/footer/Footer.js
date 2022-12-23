import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {ImReddit} from "react-icons/im"

import "./Footer.css"

const Footer = () => {
  return (

    <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>Save the panda's</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>visit</h4>
                <ul>
                    <li><a href="#">location: swizans</a></li>
                    <li><a href="#">address: south Gate, 592 kazlaw street </a></li>
                    <li><a href="#">Phone number: +932 930 3920</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><a href="#">plushies</a></li>
                    <li><a href="#">mug's</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><BsInstagram /></a>
                    <a href=""><BsTwitter /></a>
                    <a href=""><ImReddit /></a>
                </div>
            </div>
        </div>
    </div>
    </footer>  
  )
}

export default Footer