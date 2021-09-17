import React from 'react';

import { recommendations } from './RecommendationContent';

function RecommendationBox() {
    const content = recommendations.map((recommendation) => {
        const { url, signature, quote } = recommendation
        return (
            <div style={{maxWidth: "1000px"}}>
                <p>
                    <em>{quote}</em>
                    <br></br>
                    <strong><a href={ url }>{signature}</a></strong>
                </p>
            </div>
        )
    })

    return (
        <div className="text-box">
            <h1>Recommendations:</h1>
            { content }
        </div>
    )
}

export default RecommendationBox;
