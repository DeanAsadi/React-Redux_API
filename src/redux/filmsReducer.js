import axios from "axios";

//InitailState-------------------
const initialState = {
  people: [],
  isLoading: false,
  error: []
};
//Action Type --------------
const GET_FILMS = "GET_FILMS";
const ADD_FILMS = "ADD_FILMS";

//Action creator-------------
export function getPeople() {
  return {
    type: GET_FILMS,
    payload: axios.get("https://ghibliapi.herokuapp.com/people")
  };
}
export function addFilms(film) {
  return {
    type: ADD_FILMS,
    film: film
  };
}
