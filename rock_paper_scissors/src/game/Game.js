import React from "react";
import "./Game.css";

//import component
import TabScore from "./../components/TabScore";
import Action from "./actions/Actions";
import Area from "./area/Area";

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
  actionComputer1: "",
  actionComputer2: ""
};

export function getRandomChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

class Game extends React.Component {
  state = initialScore;

  handleClickReset = () => {
    initialScore.losses = 0;
    initialScore.wins = 0;
    initialScore.draws = 0;
    initialScore.result = "";
    initialScore.actionPlayer = "";
    initialScore.actionComputer1 = "";
    initialScore.actionComputer2 = "";
    this.setState({ initialScore });
  };

  handleClickRock = () => {
    initialScore.actionPlayer = "rock";
    const computerPlay = getRandomChoice();
    initialScore.actionComputer1 = computerPlay;
    console.log(computerPlay);
    if (initialScore.actionPlayer === computerPlay) {
      initialScore.draws += 1;
      initialScore.result = "Nobody. Try again";
      this.setState({ initialScore });
    } else if (computerPlay === "paper") {
      initialScore.losses += 1;
      initialScore.result = "The computer. Unlucky";
      this.setState({ initialScore });
    } else {
      initialScore.wins += 1;
      initialScore.result = "It's YOU !!!!";
      this.setState({ initialScore });
    }
  };

  handleClickPaper = () => {
    initialScore.actionPlayer = "paper";
    const computerPlay = getRandomChoice();
    initialScore.actionComputer1 = computerPlay;
    console.log(computerPlay);
    if (initialScore.actionPlayer === computerPlay) {
      initialScore.draws += 1;
      initialScore.result = "Nobody. Try again";
      this.setState({ initialScore });
    } else if (computerPlay === "scissors") {
      initialScore.losses += 1;
      initialScore.result = "The computer. Unlucky ";
      this.setState({ initialScore });
    } else {
      initialScore.wins += 1;
      initialScore.result = "It's YOU !!!!";
      this.setState({ initialScore });
    }
  };

  handleClickScissors = () => {
    initialScore.actionPlayer = "scissors";
    const computerPlay = getRandomChoice();
    initialScore.actionComputer1 = computerPlay;

    if (initialScore.actionPlayer === computerPlay) {
      initialScore.draws += 1;
      initialScore.result = "Nobody. Try again";
      this.setState({ initialScore });
      console.log(initialScore);
    } else if (computerPlay === "rock") {
      initialScore.losses += 1;
      initialScore.result = "The computer. Unlucky ";
      this.setState({ initialScore });
      console.log(initialScore);
    } else {
      initialScore.wins += 1;
      initialScore.result = "It's YOU !!!!";
      this.setState({ initialScore });
      console.log(initialScore);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>

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
            playerTwo={initialScore.actionComputer1}
          />
        </div>

        <br />
        <h3>Choose your action</h3>
        <img src={rock} onClick={this.handleClickRock} />
        <img src={paper} onClick={this.handleClickPaper} />
        <img src={scissors} onClick={this.handleClickScissors} />
      </div>
    );
  }
}

export default Game;
