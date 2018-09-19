
const initialState = {
    name: 'unknown',
    reason: 'unset',
    history: [{name: 'unknown', reason: 'unset'}]
};


const reducer = ( state = initialState, action ) => {
    // const newState = { ...state};
    console.log(state.history);
    switch(action.type) {
        case 'CHANGE_NAME':
            // newState.name = action.payload;
            // newState.reason = 'changed';
            return {
                ...state,
                name: action.payload,
                reason: 'changed',
                history: state.history.concat({name: action.payload, reason: 'changed'})
            };
        case 'RESET_NAME':
            // newState.name = 'unknown';
            // newState.reason = 'reset';
            return {
                ...state,
                name: 'unknown',
                reason: 'reset',
                history: state.history.concat({name: 'unknown', reason: 'reset'})
            };
        default:
            if(action.type.startsWith('@@redux')) {
                break;
            } else {
                console.log('Wrong type of action', action);
                break;
            }
    }

    return state;
};

export default reducer;