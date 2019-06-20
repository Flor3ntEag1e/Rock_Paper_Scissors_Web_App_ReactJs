import React from 'react'
import './TabScore.css'
const TabScore = ({win, draw, lose, result}) => {
    return (

        <div className='TabScore'>
            <h2>Score</h2>
            <div className='win'>wins: {win}</div>
            <div className='draw'>draws: {draw}</div>
            <div className='lose'>losses: {lose}</div>
            <br/>
            <div className='result'><b>The winner is: {result}</b></div>
        </div>
    )
}

export default TabScore