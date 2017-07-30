import { LOGIN, SIGNUP, CHANGE_FORM } from '../actions';

const initialState = {
    users: [],
    logged: false,
    failed: false,
    isSignup: false
}

function authenticate(username, password) {
    return true;
}

export default function loginData(state=initialState, { type, ...args }) {
    switch (type) {
        case LOGIN:
            let status = authenticate(args.user, state.users);
            return Object.assign({}, state, { logged: status, failed: !status });
        case CHANGE_FORM:
            return Object.assign({}, state, { isSignup: !state.isSignup });
        case SIGNUP:
            return Object.assign({}, state, { users: state.users.concat(args.user), isSignup: false });
        default:
            return state;
    }
}