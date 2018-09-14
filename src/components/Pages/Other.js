import React, { Component } from 'react';


export default class Other extends Component {

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
            <div id={'other'}>
                <h2>
                    Other page!
                </h2>
            </div>
        )
    }
}