export function addTvShow(thing) {
    return {
       type: "ADD_TV_SHOW",
       payload: thing
    }
 }
 
 export function getTvShow(thing) {
    return {
       type: "GET_TV_SHOW",
       payload: thing
    }
 }

 export function removeTvShow(thing) {
    return {
       type: "REMOVE_TV_SHOW",
       payload: thing
    }
 }
 
 export default function tvShowsReducer(tvShows = [], action) {
    switch (action.type) {
       case "ADD_TV_SHOW":
          return [...tvShows, action.payload]
        case "GET_TV_SHOW":
            return [...tvShows, action.payload]
       case "REMOVE_TV_SHOW": {
          const updatedArr = tvShows.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
          return updatedArr
       }
       default:
          return tvShows
    }
 }