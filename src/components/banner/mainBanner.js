import React from 'react';
import '../../css/bannerStyle.css'

const MainBanner = () => {
    const banner_text_style = {
        color: "yellow"
    }
    return (
        <div className="banner-box">
            <div className="banner-image">
                <div className="banner-text">
                    <h1 className="banner-header"><u>Jere Manni</u></h1>
                    <p>Full-stack<span style={banner_text_style}> Developer</span> (1 year)</p>
                    <p><span style={banner_text_style}>Expert</span> in Materials Science (9 years)</p>
                    <p>10+ years of working <span style={banner_text_style}>Experience</span></p>
                    <p>2 years of <span style={banner_text_style}>Team Lead</span> experience</p>

                </div>
            </div>
        </div>
    )
}

export default MainBanner;