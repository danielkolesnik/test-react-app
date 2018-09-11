import React, { Component } from 'react';

import Thoughts from './Thoughts';


class App extends Component {
    render() {
        return (
            <div id={"app"}>
                <span>Es ist das Wurzelelement.</span>
                <h3>{(new Date()).toLocaleTimeString()}</h3>
                <Thoughts></Thoughts>
            </div>
        )
    }
}

export default App;