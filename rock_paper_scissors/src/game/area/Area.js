import React from "react";
import "./Area.css";


import rock from "./../../assets/rock.jpg";
import paper from "./../../assets/paper.jpg";
import scissors from "./../../assets/scissors.jpg";
import lizard from "./../../assets/lizard.jpg";
import spock from "./../../assets/spock.jpg";


const Area = ({playerOne, computerOne}) => {

    const ImagesPlayerOne = () => {
        if(playerOne === 'rock') {
            return <img src={rock} />
        } else if (playerOne === 'paper') {
            return <img src={paper}/>
        } else if (playerOne === 'scissors') {
            return <img src={scissors}/>
        }else if (playerOne === 'lizard') {
            return <img src={lizard}/>
        }else if (playerOne === 'spock') {
            return <img src={spock}/>
        } else {
            return <p> ? </p>
        }
    }
    
    const ImagesComputerOne = () => {
        if(computerOne === 'rock') {
            return <img src={rock} />
        } else if (computerOne === 'paper') {
            return <img src={paper}/>
        } else if (computerOne === 'scissors') {
            return <img src={scissors}/>
        }else if (computerOne === 'lizard') {
            return <img src={lizard}/>
        }else if (computerOne === 'spock') {
            return <img src={spock}/>
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
      <ImagesComputerOne />
      </div>
    </div>
  );
};

export default Area;
