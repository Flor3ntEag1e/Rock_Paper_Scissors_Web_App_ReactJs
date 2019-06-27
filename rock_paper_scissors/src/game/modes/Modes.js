import React from 'react'

import './Modes.css'
import IABattle from '../IABattle';
import Game from '../Game'
import SheldonGame from '../SheldonGame'
import Rules from '../rules/Rules'



const Modes = ({mode, game, iabattle, sheldongame, rules}) => {

    console.log({mode});
    
    if (mode === iabattle) {
        return (
            <div>
                <IABattle />
            </div>
        );
    } else if (mode === sheldongame) {
        return (
            <div>
                <SheldonGame />
            </div>
        );
    } else if (mode === rules) {
        return (
            <div>
                <Rules />
            </div>
        );
    }else if (mode === game) {
        return (
            <div>
                <Game />
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