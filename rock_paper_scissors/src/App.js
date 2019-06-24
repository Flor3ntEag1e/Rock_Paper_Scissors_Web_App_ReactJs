import React from 'react';
import './App.css';

import Game from './game/Game'
import Modes from './game/modes/Modes'

const initialGame = {
    typeGame: 0,
    typeIA: 1,
    typeSheldon: 2
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
                mode={initialGame.typeGame}
                iabattle={initialGame.typeIA}
                sheldongame={initialGame.typeSheldon}
                />
			</div>
			</div>
		);
	}
}

export default App;
