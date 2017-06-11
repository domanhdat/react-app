import {LOAD_DATA} from './HomeAction';

function homeReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_DATA:
            return action.text;
        default:
            return state
    }
}

export default homeReducer;