import React, {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {RxExit} from 'react-icons/rx'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1>Connected Life</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='/'>smart home</a></li>
                    <li><a href='customer'>become our customer</a></li>
                    <li><a href='about'>about</a></li>
                    <li><a href='contact'>contact</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<RxExit className='icon-exit' />) : (<RxHamburgerMenu className='icon-open' />)}            
                </div>
            </div>
        </div>
    )
}

export default Navbar
