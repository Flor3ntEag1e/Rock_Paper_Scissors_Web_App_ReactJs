import React from 'react'
import TabScore from './../components/TabScore'

const initialScore = {
    wins: 0,
    draws: 0,
    losses: 0,
    result: ''
}

const actions = {
	rock: {
		beats: ['scissors'],
	},
	paper: {
		beats: ['rock'],
	},
	scissors: {
		beats: ['paper'],
	},
};

const modes = {
	pvc: {
		label: 'PLAYER VS COMPUTER',
		player: 'PLAYER',
		computer: 'COMPUTER',
	}
};

class Game extends React.Component {

    state = initialScore

    handleClick = () => {
        initialScore.wins += 1
        this.setState({initialScore})
    }

    render() {
        return (
          <div className="App">
           <h1>Rock Paper Scissors</h1>
           <TabScore 
           win={initialScore.wins}
           draw={initialScore.draws}
           lose={initialScore.losses}/>
           <button onClick={this.handleClick}>
             win + 1
            </button>
          </div>
        );
      }
    
}

export default Game