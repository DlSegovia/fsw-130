export function addmovie(thing) {
    return {
       type: "ADD_MOVIE",
       payload: thing
    }
 }
 
 export function getmovies(thing) {
    return {
       type: "GET_MOVIE",
       payload: thing
    }
 }

 export function removemovie(thing) {
    return {
       type: "REMOVE_MOVIE",
       payload: thing
    }
 }
 
 export default function moviesReducer(movies = [], action) {
    switch (action.type) {
       case "ADD_MOVIE":
          return [...movies, action.payload]
        case "GET_MOVIE":
          return [...movies, action.payload]
       case "REMOVE_MOVIE": {
          const updatedArr = movies.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
          return updatedArr
       }
       default:
          return movies
    }
 }