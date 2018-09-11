import React, { Component } from 'react';


class Thought extends Component {

    constructor(props) {
        super(props);

        /*
        * We able to change state by using special method( parent assync method ) like:
        * this.setState({
        *     isOpen: false
        * });
        */
        this.state = {
            isOpen: true
        }
    }

    render() {
        return (
            <div id={'thought-description'}>
                <h3 className='description-headline'>{this.props.thought.title}</h3>
                <p className='description'>{this.props.thought.description}</p>
                <span className='date'>{this.props.thought.date}</span>
            </div>
        )
    }
}

export default Thought;