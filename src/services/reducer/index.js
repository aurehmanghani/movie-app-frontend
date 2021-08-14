import {Constants} from '../Constants'

export default function searchMoviesReducer(state=[],action){
    //console.log(state)
    switch(action.type){
        case Constants.SEARCH_MOVIES:
            return {
                ...state,
                moviesData: action.data
            }
        case Constants.ADD_MOVIES:
            return {    
                ...state,    
                moviesData: state.moviesData.concat(action.data)    
            };
        default:
            return state
    }
}