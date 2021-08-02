import React from 'react';

function Navigation() {

    return ( 
            <nav className="bottom">
                <div className="navigation-box">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/education">Education</a></li>
                        <li><a href="/work">Work history</a></li>
                        <li><a href="/skills">Skills</a></li>
                    </ul>
                </div>
                <br></br>
            </nav>
    )
}

export default Navigation;