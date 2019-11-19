import React from 'react'


import bbc from '../img/bbc-news.png'
import independent from '../img/the-indepentent.png'
import times from '../img/the-times.png'
import telegraph from '../img/the-telegraph.png'

const Featured = class extends React.Component {
  render() {
    return (

    <div className="featured">
        <div className="featured__wrapper">
            <div className="featured__row_1">
                <p className="featured__row_1_text">As featured in...</p>
            </div>
            <div className="featured__row_2">
                <div className="featured___column">
                    <a href="https://www.w3schools.com">
                        <img src={bbc} alt="BBC news icon"/>
                    </a>
                </div>
                <div className="featured___column">
                    <a href="https://www.w3schools.com">
                        <img src={independent} alt="independent news icon"/>
                    </a>
                </div>
                <div className="featured___column">
                    <a href="https://www.w3schools.com">
                        <img src={times} alt="times news icon"/>
                    </a>
                </div>
                <div className="featured___column">
                    <a href="https://www.w3schools.com">
                        <img src={telegraph} alt="telegraph news icon"/>
                    </a>
                </div>
            </div>
        </div>   
    </div>
    )
  }
}

export default Featured
