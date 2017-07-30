import { SEARCH } from '../actions';

function search(state="", { type, searchText }) {
    switch(type) {
        case SEARCH:
            return searchText;
        default:
            return state;
    }
}

export default search;
