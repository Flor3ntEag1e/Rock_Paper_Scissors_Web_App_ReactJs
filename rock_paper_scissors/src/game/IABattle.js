import React from "react";
import "./Game.css";

//import component
import TabScoreIA from "./../components/TabScoreIA";
import Area from "./area/Area";
import AreaIA from "./area/AreaIA";

const initialScore = {
  c1: 0,
  draws: 0,
  c2: 0,
  result: "",
  actionComputer1: "",
  actionComputer2: ""
};

export function getRandomChoice1() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

export function getRandomChoice2() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

class IABattle extends React.Component {
  state = initialScore;

  handleClickReset = () => {
    initialScore.c2 = 0;
    initialScore.c1 = 0;
    initialScore.draws = 0;
    initialScore.result = "";
    initialScore.actionComputer1 = "";
    initialScore.actionComputer2 = "";
  };

  handleClickRandom = () => {
    const computerOnePlay = getRandomChoice1();
    const computerTwoPlay = getRandomChoice2();
    initialScore.actionComputer1 = computerOnePlay;
    initialScore.actionComputer2 = computerTwoPlay;
    console.log(computerOnePlay);
    console.log(computerTwoPlay);
    if (computerOnePlay === "paper" && computerTwoPlay === "rock" ||
    computerOnePlay === "scissors" && computerTwoPlay === "paper" ||
    computerOnePlay === "rock" && computerTwoPlay === "scissors") {
      initialScore.c1 += 1;
      initialScore.result = "Computer 1 win !";
      this.setState({ initialScore });
    } else if (computerOnePlay === "paper" && computerTwoPlay === "scissors" ||
              computerOnePlay === "scissors" && computerTwoPlay === "rock" ||
              computerOnePlay === "rock" && computerTwoPlay === "paper") {
      initialScore.c2 += 1;
      initialScore.result = "Computer 2 win !";
      this.setState({ initialScore });
    } else {
      initialScore.draws += 1;
      initialScore.result = "Draw !!";
      this.setState({ initialScore });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Rock Paper Scissors (IA)</h1>

        <div className="score">
          <TabScoreIA
            c1={initialScore.c1}
            draw={initialScore.draws}
            c2={initialScore.c2}
            result={initialScore.result}
          />
        </div>

        <button onClick={this.handleClickReset}>reset</button>
        <br />

        <div className="battlefield">
          <AreaIA
            computerOne={initialScore.actionComputer1}
            computerTwo={initialScore.actionComputer2}
          />
        </div>

        <br />
       
       <button onClick={this.handleClickRandom}>Start the battle</button>

      </div>
    );
  }
}

export default IABattle;
