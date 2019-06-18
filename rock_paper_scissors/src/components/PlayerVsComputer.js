import React from 'react'
import './PlayerVsComputer.css'

const initialState = {
    wins: 0,
    losses: 0,
    draws: 0,
    result: ''
  }

const PVC = () => {
    return (
        <div className='PlayerComputerCanvas'>
            <h2> Player vs Computer </h2>
            <div className='Score'>
                <div className='wins'>wins: {initialState.wins}</div>
                <div className='losses'>losses: {initialState.losses}</div>
                <div className='draws'>draws: {initialState.draws}</div>    
            </div>

            
        </div>
    )
}

export default PVC