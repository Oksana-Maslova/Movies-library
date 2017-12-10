export const FETCH_MOVIES_LIST = "FETCH_MOVIES_LIST";
export const FETCH_POPULAR_MOVIES = "FETCH_POPULAR_MOVIES";
export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
export const FETCH_NOW_PLAYING = "FETCH_NOW_PLAYING";
export const FETCH_SEARCH_MOVIES = "FETCH_SEARCH_MOVIES";

export const fetchMoviesList =  () => (dispatch) => {

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=2')
        .then((results) => results.json())
        .then((results) => {
            dispatch({type: FETCH_MOVIES_LIST, payload: results});
        })
};

export const fetchPopularMovies =  () => (dispatch) => {

   fetch('https://api.themoviedb.org/3/movie/popular?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-RU&page=1')
       .then((results) => results.json())
       .then((results) => {
            dispatch({type: FETCH_POPULAR_MOVIES, payload: results});
       })
};

export const fetchTopRated =  () => (dispatch) => {

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-RU&page=1')
        .then((results) => results.json())
        .then((results) => {
            dispatch({type: FETCH_TOP_RATED, payload: results});
        })
};

export const fetchNowPlaying =  () => (dispatch) => {

    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=16139b178eb1a7b19183f92e5669361d&language=ru-RU&page=1')
        .then((results) => results.json())
        .then((results) => {
            dispatch({type: FETCH_NOW_PLAYING, payload: results});
        })
};

export const fetchSearchMovies =  (query) => (dispatch) => {

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=16139b178eb1a7b19183f92e5669361d&language=en-US&query=${query}&page=1&include_adult=false`)
        .then((results) => results.json())
        .then((results) => {
            dispatch({type: FETCH_SEARCH_MOVIES, payload: results});
        });
};



