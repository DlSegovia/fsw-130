// import the separate reducers
import moviesReducer from "./redux/movies"
import tvShowsReducer from "./redux/tvShows"
const redux = require("redux")
const {combineReducers, createStore} = redux

// combine the reducers into a single state tree
const rootReducer = combineReducers({
   movies: moviesReducer,
   tvShows: tvShowsReducer,
})
// create the store
const store = createStore(rootReducer)
store.subscribe(() => {
   console.log(store.getState())
})
// export the store
export default store
