import React from 'react'
import TabScore from './../components/TabScore'
import Action from './../game/actions/Actions'
import rock from './../assets/pierre.jpg'
import paper from './../assets/feuille.jpg'
import scissors from './../assets/ciseaux.jpg'
import lizard from './../assets/lezard.jpg'
import spock from './../assets/spock.jpg'

const initialScore = {
    wins: 0,
    draws: 0,
    losses: 0,
    result: ''
}

const initialActions = {
    action: ''
}

export function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
  
    return choices[Math.floor(Math.random() * choices.length)];
}

class Game extends React.Component {

    state = initialScore

    handleClickReset = () => {
        initialScore.losses = 0
        initialScore.wins = 0
        initialScore.draws = 0
        this.setState({initialScore})
    }

    handleClickRock = () => {
        initialActions.action = 'rock'
        const computerPlay = getRandomChoice()
        console.log(computerPlay)
        if (initialActions.action === computerPlay) {
            initialScore.draws += 1 ;
            initialScore.result = 'Nobody. Try again'
            this.setState({initialScore})
        } else if(computerPlay === 'paper') {
            initialScore.losses += 1;
            initialScore.result = 'The computer. The next time maybe '
            this.setState({initialScore})
        } else {
            initialScore.wins += 1;
            initialScore.result = "It's YOUU"
            this.setState({initialScore})
        }
    }

    handleClickPaper = () => {
        initialActions.action = 'paper'
        const computerPlay = getRandomChoice()
        console.log(computerPlay)
        if (initialActions.action === computerPlay) {
            initialScore.draws += 1 ;
            initialScore.result = 'Nobody. Try again'
            this.setState({initialScore})
        } else if(computerPlay === 'scissors') {
            initialScore.losses += 1;
            initialScore.result = 'The computer. The next time maybe '
            this.setState({initialScore})
        } else {
            initialScore.wins += 1;
            initialScore.result = "It's YOUU"
            this.setState({initialScore})
        }
    }

    handleClickScissors = () => {
        initialActions.action = 'scissors'
        const computerPlay = getRandomChoice()
        console.log(computerPlay)
        if (initialActions.action === computerPlay) {
            initialScore.draws += 1 ;
            initialScore.result = 'Nobody. Try again'
            this.setState({initialScore})
        } else if(computerPlay === 'rock') {
            initialScore.losses += 1;
            initialScore.result = 'The computer. The next time maybe '
            this.setState({initialScore})
        } else {
            initialScore.wins += 1;
            initialScore.result = "It's YOUU"
            this.setState({initialScore})
        }
    }



    render() {

        return (
          <div className="App">
           <h1>Rock Paper Scissors</h1>

           <TabScore 
           win={initialScore.wins}
           draw={initialScore.draws}
           lose={initialScore.losses}
           result={initialScore.result}/>
           

            <button onClick={this.handleClickReset}>
             reset
            </button>

            <br/>

            <img src={rock} onClick={this.handleClickRock}/>
            <img src={paper} onClick={this.handleClickPaper}/>
            <img src={scissors} onClick={this.handleClickScissors}/>

          </div>
        );

      }
    
}

export default Game