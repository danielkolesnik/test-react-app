import React from 'react';

import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // handleChange(event) {
    //     console.log(event);
    //     this.props.changeName(event.target.value);
    // }

    render() {
        return (
            <header>
                <h1>Header</h1>
                <NavLink to='/'>Home</NavLink> <br/>
                <NavLink to='/other'>Other</NavLink>
            </header>
        );
    }
}