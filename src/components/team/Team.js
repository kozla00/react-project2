import React from 'react'

import {FiFacebook} from "react-icons/fi"
import {CiTwitter} from "react-icons/ci"
import {AiOutlineInstagram} from "react-icons/ai"
import {CiLinkedin} from "react-icons/ci"

import "./Team.css"

const Team = () => {
  return (
    <div className='team-group'>
        <div className='team-title'>
            <h3>Team</h3>
            <h1>Meet Our Team</h1>
        </div>
        <div className='team-members'>
        <div className="team-member">
            <img src="em-1.jpg" className='member-picture' />
            <h3>Moshe Jefferson</h3>
            <p>CEO</p>
            <FiFacebook className='member-social' />
            <CiTwitter className='member-social' />
            <AiOutlineInstagram className='member-social' />
            <CiLinkedin className='member-social' />
        </div>
        <div className="team-member">
            <img src="em-2.jpg" className='member-picture' />
            <h3>Litzy Yoder</h3>
            <p>Employee</p>
            <FiFacebook className='member-social' />
            <CiTwitter className='member-social' />
            <AiOutlineInstagram className='member-social' />
            <CiLinkedin className='member-social' />
            </div>
        <div className="team-member">
            <img src="em-3.jpg" className='member-picture' />
            <h3>Aaron Blankenship</h3>
            <p>Employee</p>
            <FiFacebook className='member-social' />
            <CiTwitter className='member-social' />
            <AiOutlineInstagram className='member-social' />
            <CiLinkedin className='member-social' />
            </div>
        </div>
    </div>
  )
}

export default Team
