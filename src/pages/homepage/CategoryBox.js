import React from 'react';

function CategoryBox(content) {
    const { header, listItems, url } = content.content
    const Items = () => {
        const listContents = listItems.map((listItem, i) => {
            const item = listItem.item
            const bullets = listItem.bullets.map((bullet, i) => {
                return <li key={i}>{bullet}</li>
            })
            return (
                <div key={i}>
                    <strong>{item}</strong>
                    <ul>
                        {bullets}
                    </ul>
                </div>
            )
        })

        return listContents
    }

    return (
        <a href={url} className="a_ref">
                <div className="category-container">
                    <div className="header-background">
                        <div className="category-header">{header}</div>
                    </div>
                    <div className="overlay">
                        <div className="overlaytext">
                            {Items()}
                        </div>
                    </div>
                </div>
            </a>
    )
}

export default CategoryBox;