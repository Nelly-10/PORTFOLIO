import "./AboutContentStyles.css";  

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/premium_photo.jpeg";
import React2 from "../assets/premium_photo.jpeg";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a react front-end developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} alt="" className="img"/>
                </div>
            </div>

            <div className="img-container">
                <div className="img-stack bottom">
                    <img src={React2} alt="" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default AboutContent;