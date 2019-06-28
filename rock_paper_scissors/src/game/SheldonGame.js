import React from "react";
import "./Game.css";

//import component
import TabScore from "./../components/TabScore";
import Area from "./area/Area";
import Modes from './modes/Modes'

//import image
import rock from "./../assets/rock.jpg";
import paper from "./../assets/paper.jpg";
import scissors from "./../assets/scissors.jpg";
import lizard from "./../assets/lizard.jpg";
import spock from "./../assets/spock.jpg";

const initialScore = {
  wins: 0,
  draws: 0,
  losses: 0,
  result: "",
  actionPlayer: "",
  actionComputer1: ""
};

export function getRandomChoice() {
  const choices = ["rock", "paper", "scissors", "spock", "lizard"];

  return choices[Math.floor(Math.random() * choices.length)];
}

class SheldonGame extends React.Component {
  state = initialScore;

  handleClickReset = () => {
    initialScore.losses = 0;
    initialScore.wins = 0;
    initialScore.draws = 0;
    initialScore.result = "";
    initialScore.actionPlayer = "";
    initialScore.actionComputer1 = "";
    this.setState({ initialScore });
  };

  handleClickRock = () => {
    initialScore.actionPlayer = "rock";
    const computerPlay = getRandomChoice();
    initialScore.actionComputer1 = computerPlay;
    if (computerPlay === "scissors" || computerPlay === "lizard") {
      initialScore.wins += 1;
      initialScore.result = "Player, you win !!!";
      this.setState({ initialScore });
    } else if (computerPlay === "paper" || computerPlay === "spock") {
      initialScore.losses += 1;
      initialScore.result = "The computer. Unlucky";
      this.setState({ initialScore });
    } else {
      initialScore.draws += 1;
      initialScore.result = "Nobody. Try again";
      this.setState({ initialScore });
    }
  };

  handleClickPaper = () => {
    initialScore.actionPlayer = "paper";
    const computerPlay = getRandomChoice();
    initialScore.actionComputer1 = computerPlay;
    if (computerPlay === "spock" || computerPlay === "rock") {
      initialScore.wins += 1;
      initialScore.result = "Player, you win !!!";
      this.setState({ initialScore });
    } else if (computerPlay === "scissors" || computerPlay === "spock") {
      initialScore.losses += 1;
      initialScore.result = "The computer. Unlucky";
      this.setState({ initialScore });
    } else {
      initialScore.draws += 1;
      initialScore.result = "Nobody. Try again";
      this.setState({ initialScore });
    }
  };

  handleClickScissors = () => {
    initialScore.actionPlayer = "scissors";
    const computerPlay = getRandomChoice();
    initialScore.actionComputer1 = computerPlay;
    if (computerPlay === "paper" || computerPlay === "lizard") {
      initialScore.wins += 1;
      initialScore.result = "Player, you win !!!";
      this.setState({ initialScore });
    } else if (computerPlay === "rock" || computerPlay === "spock") {
      initialScore.losses += 1;
      initialScore.result = "The computer. Unlucky";
      this.setState({ initialScore });
    } else {
      initialScore.draws += 1;
      initialScore.result = "Nobody. Try again";
      this.setState({ initialScore });
    }
  };

  handleClickLizard = () => {
    initialScore.actionPlayer = "lizard";
    const computerPlay = getRandomChoice();
    initialScore.actionComputer1 = computerPlay;
    if (computerPlay === "spock" || computerPlay === "paper") {
      initialScore.wins += 1;
      initialScore.result = "Player, you win !!!";
      this.setState({ initialScore });
    } else if (computerPlay === "scissors" || computerPlay === "rock") {
      initialScore.losses += 1;
      initialScore.result = "The computer. Unlucky";
      this.setState({ initialScore });
    } else {
      initialScore.draws += 1;
      initialScore.result = "Nobody. Try again";
      this.setState({ initialScore });
    }
  };

  handleClickSpock = () => {
    initialScore.actionPlayer = "spock";
    const computerPlay = getRandomChoice();
    initialScore.actionComputer1 = computerPlay;
    if (computerPlay === "scissors" || computerPlay === "rock") {
      initialScore.wins += 1;
      initialScore.result = "Player, you win !!!";
      this.setState({ initialScore });
    } else if (computerPlay === "paper" || computerPlay === "lizard") {
      initialScore.losses += 1;
      initialScore.result = "The computer. Unlucky";
      this.setState({ initialScore });
    } else {
      initialScore.draws += 1;
      initialScore.result = "Nobody. Try again";
      this.setState({ initialScore });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Rock Paper Scissors Lizard Spock</h1>

        <div className="score">
          <TabScore
            win={initialScore.wins}
            draw={initialScore.draws}
            lose={initialScore.losses}
            result={initialScore.result}
          />
        </div>

        <button onClick={this.handleClickReset}>reset</button>
        <br />

        <div className="battlefield">
          <Area
            playerOne={initialScore.actionPlayer}
            computerOne={initialScore.actionComputer1}
          />
        </div>

        <h3>Choose your action</h3>
        <img src={rock} onClick={this.handleClickRock} />
        <img src={paper} onClick={this.handleClickPaper} />
        <img src={scissors} onClick={this.handleClickScissors} />
        <img src={spock} onClick={this.handleClickSpock} />
        <img src={lizard} onClick={this.handleClickLizard} />
      </div>
    );
  }
}

export default SheldonGame;
