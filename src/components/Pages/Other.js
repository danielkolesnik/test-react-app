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

        };

        console.log(this.props);
    }

    render() {

        return (
            <div id={'other'}>
                <h2>
                    {(this.props.match.params.subCase).toUpperCase()} page!
                </h2>
            </div>
        )
    }


    componentWillMount() {

    }
    // initial rendering
    componentDidMount() {
        // console.log('MOUNT HAPPENED');
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
        // console.log('UN-MOUNT HAPPENED');
    }

}