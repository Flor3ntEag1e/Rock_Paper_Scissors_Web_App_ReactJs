import React from 'react'

const TabScore = ({win, draw, lose, result}) => {

    return (

        <div className='TabScore'>
            <h2>Score</h2>
            <div className='win'>wins: {win}</div>
            <div className='draw'>draws: {draw}</div>
            <div className='lose'>losses: {lose}</div>
            <div className='result'><b>The winner is: {result}</b></div>
        </div>
    )
}

export default TabScore