import {
    FETCH_SHOWS_LIST,
    FETCH_POPULAR_SHOWS,
    FETCH_TOP_RATED_SHOWS,
    FETCH_NOW_PLAYING_SHOWS,
    FETCH_SEARCH_SHOWS} from "../actions/shows";

const defaultState = {
    list: []
};

export default function(state = defaultState, action) {
    switch (action.type) {
        case FETCH_SHOWS_LIST:
            return {
                ...state,
                list: action.payload.results
            };
        case FETCH_POPULAR_SHOWS:
            return {
                ...state,
                list: action.payload.results
            };
        case FETCH_TOP_RATED_SHOWS:
            return {
                ...state,
                list: action.payload.results
            };
        case FETCH_NOW_PLAYING_SHOWS:
            return {
                ...state,
                list: action.payload.results
            };
        case FETCH_SEARCH_SHOWS:
            return {
                ...state,
                list: action.payload.results
            };
            break;
    }
    return state;
}