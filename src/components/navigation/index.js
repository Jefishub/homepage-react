import React from 'react';

function Navigation() {

    return (
        <div className="inner_box">    
            <nav id="paavalikko">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/education">Education</a></li>
                    <li><a href="/work">Work history</a></li>
                    <li><a href="/skills">Skills</a></li>
                </ul>
            </nav>
            <br></br>
        </div>
    )
}

export default Navigation;