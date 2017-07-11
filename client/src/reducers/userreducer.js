import { USER_LOGIN, USER_SIGNUP } from '../actions/index';

const userReducer = (state = [], action) {
    if (action.type === USER_LOGIN) {
        const { user } = action;
        const newState = Object.assign({}, state, {user});
        return newState;
    }
    else if (action.type === USER_SIGNUP) {
        const { newUser } = action;
        const newState = Object.assign({}, state, {newUser});
        return newState;
    }
    else {
        return state;
    }
}