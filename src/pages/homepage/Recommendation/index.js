import React from 'react';

import { recommendations } from './RecommendationContent';

function RecommendationBox() {
    const content = recommendations.map((recommendation, i) => {
        const { url, signature, quote } = recommendation
        return (
            <div key={i} style={{maxWidth: "1000px"}}>
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
