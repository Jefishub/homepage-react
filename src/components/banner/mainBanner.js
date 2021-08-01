import React from 'react';
import './style.css'

function MainBanner() {
    const banner_text_style = {
        color: "yellow"
    }
    return (
        <div className="hero-box">
            <div className="hero-image">
                <div className="hero-text">
                    <h1 className="banner-header"><u>Jere Manni</u></h1>
                    <p><span style={banner_text_style}>Master</span> of Physics</p>
                    <p>Full-stack<span style={banner_text_style}> Developer</span></p>
                    <p><span style={banner_text_style}>Expert</span> in Materials Science</p>
                    <p>10+ years of working <span style={banner_text_style}>Experience</span></p>
                    <p>2 years of <span style={banner_text_style}>Team Lead</span> experience</p>

                </div>
            </div>
        </div>
    )
}

export default MainBanner;