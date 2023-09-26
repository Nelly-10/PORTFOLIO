import React from 'react'

import "./FooterStyles.css"; 
import {FaPhone, FaMailBulk, FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    +234 70-5324-1699</h4>
                </div>
                <div className="mail">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    odumahnelson300@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>This is me O.Anthony Nelson. I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                    <FaFacebook 
                        size={30}
                        style={{color: "#fff", marginRight: "2rem"}}
                    />
                    <FaTwitter
                        size={30}
                        style={{color: "#fff", marginRight: "2rem"}}
                    />
                    <FaLinkedin
                        size={30}
                        style={{color: "#fff", marginRight: "2rem"}}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;