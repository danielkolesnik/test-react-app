import React, { Component } from 'react';


export default class Error extends Component {

    constructor( props ) {
        super(props);

        /*
        * We able to change state by using special method( parent assync method ) like:
        * this.setState({
        *     isOpen: false
        * });
        */
        this.state = {

        }
    }

    render() {
        return (
            <div id={'error'}>
                <h2>
                    The page doesn't exist!
                </h2>
            </div>
        )
    }
}