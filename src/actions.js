import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants.js";

//sending back the searchfield object
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

//Higher order function
//Sending a function back through thunk to make a request to the server for the robots
export const requestRobots = () => dispatch => {
  dispatch({
    type: REQUEST_ROBOTS_PENDING
  });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
