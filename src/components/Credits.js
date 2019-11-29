import React from 'react'

const Credits = ({ title, credits }) => (
    <div className="featured">
        <div className="featured__wrapper">
            <div className="featured__row_1">
                <p className="featured__row_1_text">{title}</p>
            </div>
            <div className="featured__row_2">
                {
                    credits.map((credit, i) => (
                        <div key={i} className="featured___column">
                            <a href={credit.link.url} target={credit.link.target}>
                                <img src={credit.image.src} alt={credit.image.alt} />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>   
    </div>
);

export default Credits;
