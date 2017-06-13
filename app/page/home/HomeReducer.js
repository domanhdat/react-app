import {LOAD_DATA} from './HomeAction';

function home(state = {}, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {...state, ...action};
        default:
            return state;
    }
}

export {
    home
};