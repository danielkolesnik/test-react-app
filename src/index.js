// Outsource
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './storage/reducer';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/index.css';
// Layout (Page)
import Layout from './components/Layout';


const store = createStore( reducer /*, initialState*/ );

// store.subscribe( () => {
//     console.log('__subscription: ', store.getState());
// });


const root = document.getElementById('root');


ReactDOM.render(
    <Provider store={ store }>
        <Layout/>
    </Provider>
    , root);