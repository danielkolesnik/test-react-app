import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// base layout components
import Header from './Header';
import Footer from './Footer';
// pages
import Home from './Pages/Home';
import Other from './Pages/Other';
import Error from './Pages/Error';

export default class Layout extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         userName: 'unknown'
    //     };
    // }


    render() {
        return (
            <Router>
                <main>
                    <Route path='/' component={ Header }/>
                    <Switch>
                        <Route path='/' component={ Home } exact/>
                        { /*<Route path='/other' component={ Other } exact strict/>*/ }
                        <Route path='/other/:subCase' component={ Other }/>
                        <Route component={ Error }/>
                    </Switch>
                    <Route path='/' component={ Footer }/>
                </main>
            </Router>
        );
    }
}