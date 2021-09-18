import React from 'react';
import jere from '../../../images/Jere.jpg'
import { profile } from './ProfileContent'

function ProfileBox() {
    const { profileText, header, links } = profile

    const contactInformation = links.map((item,i) => {
        return item.icon
    })

    return (
        <div className="text-box">
            <div className="category-container">
                <div className="responsive-flex-box">
                    <div className="profile-text-box">
                        <div className="profile-header-box">
                            <h1>{header}</h1>
                            <div className="profile-icons">
                                {contactInformation}
                            </div>
                        </div>
                        <p>{profileText}</p>
                    </div>
                    <div>    
                        <img src={jere} alt="Me posing =)"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBox;
