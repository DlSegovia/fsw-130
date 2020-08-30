// import the separate reducers
import favoriteThingsReducer from "./redux/favoriteThings"
import countReducer from "./redux/count"
import youTubeVideoReducer from "./redux/youTubeVideo"
const redux = require("redux")
const {combineReducers, createStore} = redux

// combine the reducers into a single state tree
const rootReducer = combineReducers({
   count: countReducer,
   favoriteThings: favoriteThingsReducer,
   youTubeVideo: youTubeVideoReducer
})
// create the store
const store = createStore(rootReducer)
store.subscribe(() => {
   console.log(store.getState())
})
// export the store
export default store