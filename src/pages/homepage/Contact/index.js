import React from 'react';

function ContactBox(content) {
    const { header, links } = content.content

    const contactInformation = links.map((item,i) => {
        return <li key={i}><a href={item.url}>{item.name}</a></li>
    })

    return (
        <div className="text-box">
            <div className="category-container">
                <h1>{header}</h1>
                <ul>
                    {contactInformation}
                </ul>
            </div>
        </div>
    )
}

export default ContactBox;