import {Constants} from '../Constants'

export const searchMoviesAction = (data) =>{
    return (dispatch)=>{
        //fetch(`http://localhost:3000/films/${data.search_Keyword}`)
        fetch(`http://localhost:3001/films`)
            .then(response => response.json())
            .then(data => {
                dispatch({type: Constants.SEARCH_MOVIES,data: data})
            });
    }
}

export function addMovie(data) {  
    return dispatch => {  
        return dispatch({  
            type: Constants.ADD_MOVIES,  
            data: data  
        });  
    }  
};