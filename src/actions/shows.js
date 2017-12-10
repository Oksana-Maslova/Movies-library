export const FETCH_SHOWS_LIST = "FETCH_SHOWS_LIST";
export const FETCH_POPULAR_SHOWS = "FETCH_POPULAR_SHOWS";
export const FETCH_TOP_RATED_SHOWS = "FETCH_TOP_RATED_SHOWS";
export const FETCH_NOW_PLAYING_SHOWS = "FETCH_NOW_PLAYING_SHOWS";
export const FETCH_SEARCH_SHOWS= "FETCH_SEARCH_SHOWS";

export const fetchShowsList =  () => (dispatch) => {

    fetch('https://api.themoviedb.org/3/discover/tv?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-RU&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false')
        .then((results) => results.json())
        .then((results) => {
            dispatch({type: FETCH_SHOWS_LIST, payload: results});
        })
};

export const fetchPopularShows =  () => (dispatch) => {

    fetch('https://api.themoviedb.org/3/tv/popular?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-Ru&page=1')
        .then((results) => results.json())
        .then((results) => {
            dispatch({type: FETCH_POPULAR_SHOWS, payload: results});
        })
};

export const fetchTopRatedShows =  () => (dispatch) => {

    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-RU&page=1')
        .then((results) => results.json())
        .then((results) => {
            dispatch({type: FETCH_TOP_RATED_SHOWS, payload: results});
        })
};

export const fetchNowPlayingShows =  () => (dispatch) => {

    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-RU&page=1')
        .then((results) => results.json())
        .then((results) => {
            dispatch({type: FETCH_NOW_PLAYING_SHOWS, payload: results});
        })
};

export const fetchSearchShows =  (query) => (dispatch) => {

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-RU&query=${query}&page=1`)
        .then((results) => results.json())
        .then((results) => {
            dispatch({type: FETCH_SEARCH_SHOWS, payload: results});
        });
};