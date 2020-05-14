import {
    FETCHING_JOKE_START,
    FETCHING_JOKE_SUCCESS,
    FETCHING_JOKE_FAILURE
  } from '../actions/index.js'

  
  const initialState = {
    
    joke:{
        setup:null,
        punchline:null,

    },
   
    isFetching: false,
    error: ""
    
  };
 
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_JOKE_START:
        return {
       
    
          isFetching: true,
          error: ""
        };
      case FETCHING_JOKE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          joke: action.payload
        };
      default:
        return state;
    }
  };
  