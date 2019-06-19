import React from 'react'

const TabScore = ({win, draw, lose}) => {

    return (

        <div className='TabScore'>
            <h2>Score</h2>
            <div className='win'>wins: {win}</div>
            <div className='draw'>draws: {draw}</div>
            <div className='lose'>losses: {lose}</div>
        </div>
    )
}

export default TabScore