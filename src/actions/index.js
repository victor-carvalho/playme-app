export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const SEARCH = 'SEARCH';
export const CHANGE_FORM = 'CHANGE_FORM';

export function login(username, password) {
    return { type: LOGIN, user: { username, password } };
}

export function signup(username, password) {
    return { type: SIGNUP, user: { username, password } };
}

export function changeForm() {
    return { type: CHANGE_FORM };
}

export function search(searchText) {
    return { type: SEARCH, searchText };
}
