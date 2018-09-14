import React, { Component } from 'react';


export default class Home extends Component {

    constructor( props ) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div id={'home'}>
                <h2>
                    Welcome back!

                </h2>
            </div>
        )
    }

    // Reloading protected methods (from super)

    componentWillMount() {

    }
    // initial rendering
    componentDidMount() {
        console.log('MOUNT HAPPENED');
    }

    componentWillReceiveProps() {

    }
    // state changed or received new props
    shouldComponentUpdate() {
        return true;
    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        console.log('UN-MOUNT HAPPENED');
    }
}