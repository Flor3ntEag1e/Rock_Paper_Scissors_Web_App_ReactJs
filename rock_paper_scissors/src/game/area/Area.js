import React from "react";
import "./Area.css";


import rock from "./../../assets/rock.jpg";
import paper from "./../../assets/paper.jpg";
import scissors from "./../../assets/scissors.jpg";


const Area = ({playerOne, playerTwo}) => {

    const ImagesPlayerOne = () => {
        if(playerOne === 'rock') {
            return <img src={rock} />
        } else if (playerOne === 'paper') {
            return <img src={paper}/>
        } else if (playerOne === 'scissors') {
            return <img src={scissors}/>
        } else {
            return <p> ? </p>
        }
    }
    
    const ImagesPlayerTwo = () => {
        if(playerTwo === 'rock') {
            return <img src={rock} />
        } else if (playerTwo === 'paper') {
            return <img src={paper}/>
        } else if (playerTwo === 'scissors') {
            return <img src={scissors}/>
        } else {
            return <p> ? </p>
        }
    }
    
  return (
    <div className="Area">
      <h3>Battlefield</h3>
      <span className="fieldPlayer"> Player </span>
       VS
      <span className="fieldComputer"> Computer </span>
      <div className="playerOne">
        <ImagesPlayerOne />
      </div>
      <div className="playerTwo">
      
      <ImagesPlayerTwo />
      </div>
    </div>
  );
};

export default Area;
