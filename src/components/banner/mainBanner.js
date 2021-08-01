import React from 'react';
import './style.css';


function CategoryBox() {
    const banner_text_style = {
        color: "yellow"
    }
    return (
        <div className="hero-box">
            <div className="hero-image">
                <div className="hero-text">
                    <h1 className="banner-header"><u>Jere Manni</u></h1>
                    <p>Master of <span style={banner_text_style}>Physics</span></p>
                    <p><span style={banner_text_style}>Expert</span> in Materials Science</p>
                    <p>10 years working <span style={banner_text_style}>experience</span></p>
                    <p><span style={banner_text_style}>Python</span>-programmer</p>
                    <p>Future <span style={banner_text_style}>IT specialist</span></p>
                </div>
            </div>
        </div>
    )
}

export default CategoryBox;