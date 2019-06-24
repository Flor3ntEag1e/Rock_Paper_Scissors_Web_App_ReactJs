import React from "react";
import "./Area.css";


import rock from "./../../assets/rock.jpg";
import paper from "./../../assets/paper.jpg";
import scissors from "./../../assets/scissors.jpg";


const AreaIA = ({computerOne, computerTwo}) => {

    const ImagesComputerOne = () => {
        if(computerOne === 'rock') {
            return <img src={rock} />
        } else if (computerOne === 'paper') {
            return <img src={paper}/>
        } else if (computerOne === 'scissors') {
            return <img src={scissors}/>
        } else {
            return <p> ? </p>
        }
    }
    
    const ImagesComputerTwo = () => {
        if(computerTwo === 'rock') {
            return <img src={rock} />
        } else if (computerTwo === 'paper') {
            return <img src={paper}/>
        } else if (computerTwo === 'scissors') {
            return <img src={scissors}/>
        } else {
            return <p> ? </p>
        }
    }
    
  return (
    <div className="Area">
      <h3>Battlefield</h3>
      <span className="fieldComputer"> Computer 1 </span>
       VS
      <span className="fieldComputer"> Computer 2 </span>
      <div className="ComputerOne">
        <ImagesComputerOne />
      </div>
      <div className="playerTwo">
      
      <ImagesComputerTwo />
      </div>
    </div>
  );
};

export default AreaIA;
