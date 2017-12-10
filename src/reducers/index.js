import { combineReducers } from "redux";
import MoviesReducer from "./movies";
import ShowsReducer from "./shows";

const rootReducer = combineReducers({
    movies: MoviesReducer,
    shows: ShowsReducer
});

export default rootReducer;