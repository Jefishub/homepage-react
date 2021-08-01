import React from 'react';

function CategoryBox(content) {
    const { header, listItems, url } = content.content
    const Items = () => {
        const listContents = listItems.map((listItem) => {
            const item = listItem.item
            const bullets = listItem.bullets.map((bullet) => {
                return <li>{bullet}</li>
            })
            return (
                <>
                    <strong>{item}</strong>
                    <ul>
                        {bullets}
                    </ul>
                </>
            )
        })

        return listContents
    }

    return (
        <a href={url} className="a_ref">
                <div className="container">
                    <div className="otsikkotausta">
                        <div className="otsikko">{header}</div>
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