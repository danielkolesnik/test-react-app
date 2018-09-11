import React, { Component } from 'react';

import constantData from '../constants/mocks';
import Thought from './Thought';

class Thoughts extends Component {

    incomeData = constantData;

    render() {
        return (
            <div id={"app"}>
                <Thought id={0} thought={this.incomeData[0]}></Thought>
            </div>
        )
    }
}

export default Thoughts;