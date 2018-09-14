import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore } from 'redux';

import Layout from './components/Layout';



const root = document.getElementById('root');

ReactDOM.render( <Layout/>, root);


// const initialState = {
//     isChanged: false,
//     phrase: 'Nothing to tell you'
// };
//
// function reducer( state, action ) {
//
//     switch(action.type) {
//         case 'CHANGE_PHRASE':
//             state = { ...state, phrase: action.payload, isChanged: true };
//             break;
//         default:
//             state = { ...state, isChanged: false };
//             break;
//     }
//
//     return state;
// }
//
// const store = createStore( reducer, initialState );


// store.subscribe( () => {
//     console.log('__subscription: ', store.getState())
// });

// const newAction = {
//     type: 'CHANGE_PHRASE',
//     payload: 'Make America great again'
// };
//
// store.dispatch(newAction);


// ReactDOM.render(<Layout/>, document.getElementById('root'));

