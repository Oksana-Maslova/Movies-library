import {
    FETCH_MOVIES_LIST,
    FETCH_POPULAR_MOVIES,
    FETCH_TOP_RATED,
    FETCH_NOW_PLAYING,
    FETCH_SEARCH_MOVIES} from "../actions/movies";

const defaultState = {
    list: []
};

export default function(state = defaultState, action) {
    switch (action.type) {
        case FETCH_MOVIES_LIST:
            return {
                ...state,
                list: action.payload.results
            };
        case FETCH_POPULAR_MOVIES:
            return {
                ...state,
                list: action.payload.results
            };
        case FETCH_TOP_RATED:
            return {
                ...state,
                list: action.payload.results
            };
        case FETCH_NOW_PLAYING:
            return {
                ...state,
                list: action.payload.results
            };
        case FETCH_SEARCH_MOVIES:
            return {
                ...state,
                list: action.payload.results
            };
        break;
    }
    return state;
}