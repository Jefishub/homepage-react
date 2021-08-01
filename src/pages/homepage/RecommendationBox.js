import React from 'react';

function RecommendationBox(content) {
    const { header, quote, url, signature } = content.content

    return (
        <div className="text_box">
            <h1>{header}</h1>
            <div style={{maxWidth: "1000px"}}>
                <p>
                    <em>{quote}</em>
                    <br></br>
                    <strong><a href={ url }>{signature}</a></strong>
                </p>
            </div>
        </div>
    )
}

export default RecommendationBox;
