import React from 'react';
import './App.css';

import Game from './game/Game'
import Modes from './game/modes/Modes'

const initialGame = {
    typeGame: 0
};


class App extends React.Component {
	state = initialGame;
    handleClickGame = () => {
        initialGame.typeGame = 0
        this.setState({initialGame})
        console.log(initialGame.typeGame)
    }

    handleClickIABattle = () => {
        initialGame.typeGame = 1
		this.setState({initialGame})
		console.log(initialGame.typeGame)
    }

    handleClickSheldonGame = () => {
        initialGame.typeGame = 2
		this.setState({initialGame})
		console.log(initialGame.typeGame)
    }

  render() {
		return (
			<div>
			<div className='Modes'>
                <h4>Choose your game's mode</h4>
                <ul>
                    <li>
                        <button onClick={this.handleClickGame}>Game</button>
                    </li>
                    <li>
                        <button onClick={this.handleClickIABattle}>IABattle</button>
                    </li>
                    <li>
                        <button onClick={this.handleClickSheldonGame}>SheldonGame</button>
                    </li>
                </ul>
            </div>
			<div className='GamePlay'>
				<Modes
				mode={initialGame.typeGame} />
			</div>
			</div>
		);
	}
}

export default App;
