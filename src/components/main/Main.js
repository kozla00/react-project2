import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'

import './Main.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>TAKE FULL CONTROL  OF Your Home</h1>
                <div className="btn">
                    <button href='customer' className="button button2">LEARN MORE<AiOutlineRight className='icon'/></button>
                </div>
            </div>
        </div>
    )
}

export default Hero