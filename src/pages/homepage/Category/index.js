import React from 'react';

const CategoryBox = (props) => {
    const { align } = props.data
    const { categoryHeader, listItems, url } = props.data.content

    const Items = () => {
        const listContents = listItems.map((listItem, i) => {
            const header = listItem.header
            const bullets = listItem.bullets.map((bullet, i) => {
                return <li key={i}>{bullet}</li>
            })
            return (
                <div key={i}>
                    <strong>{header}</strong>
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
            <div id={align} className="category-container">
                <div className="header-background">
                    <div className="category-header">{categoryHeader}</div>
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