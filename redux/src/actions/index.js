import axios from "axios";
export const FETCHING_JOKE_START = "FETCHING_JOKE_START";
export const FETCHING_JOKE_SUCCESS = "FETCHING_JOKE_SUCCESS";
export const FETCHING_JOKE_FAILURE = "FETCHING_JOKE_FAILURE";


export const getJoke = () => dispatch => {
  dispatch({ type: FETCHING_JOKE_START });
  axios
    .get("https://official-joke-api.appspot.com/random_joke")
    .then(res => {
        console.log (res.data)
       dispatch({ type: FETCHING_JOKE_SUCCESS, payload: res.data });
    })
    //  .catch(err => {
    //    dispatch({ type: FETCHING_JOKE_FAILURE, payload: res.data });
    //  });
 };
