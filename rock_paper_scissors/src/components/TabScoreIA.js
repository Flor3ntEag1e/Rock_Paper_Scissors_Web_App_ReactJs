import React from 'react'
import './TabScore.css'
const TabScoreIA = ({c1, draw, c2, result}) => {
    return (

        <div className='TabScore'>
            <h2>Score</h2>
            <div className='computerOne'>Computer 1: {c1}</div>
            <div className='draw'>draws: {draw}</div>
            <div className='computerTwo'>Computer 2: {c2}</div>
            <br/>
            <div className='result'><b>The winner is: {result}</b></div>
        </div>
    )
}

export default TabScoreIA