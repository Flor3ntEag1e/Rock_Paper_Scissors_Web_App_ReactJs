import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

import './Modes.css'
import IABattle from '../IABattle';
import Game from '../Game'
import SheldonGame from '../SheldonGame'



const Modes = (mode) => {
    const modegame = mode
    console.log(modegame);
    

    if ({mode} === 'iabattle') {
        return (
            <div>
                <IABattle />
            </div>
        );
    } else if ({mode} === 'sheldongame') {
        return (
            <div>
                <SheldonGame />
            </div>
        );
    } else {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

export default Modes