import React from 'react'
import YouTube from 'react-youtube'

import imgRules from './../../assets/rules.jpg'

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0
    }
};

class Rules extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Rules</h1>

                <h3>Normal rules</h3>

                <img src={imgRules} />

                <br />

                <h3>Sheldon's game rules</h3>
                <YouTube
                    videoId="_PUEoDYpUyQ"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }
}


export default Rules