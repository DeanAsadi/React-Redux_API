import axios from "axios";

//InitailState-------------------------------------------------
const initialState = {
  films: [],
  isLoading: false,
  error: []
};

//Action Type -------------------------------------------------
const GET_FILMS = "GET_FILMS";
const ADD_FILMS = "ADD_FILMS";

//Action creator------------------------------------------------
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

//Reducers-------------------------------------------------------
export default function filmsReducer(state = initialState, action) {
  console.log("action", action);
  console.log("action.payload", action.payload);
  console.log("state", state);

  switch (action.type) {
    case "GET_FIMLS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_FILMS_FULFILED":
      return {
        ...state,
        films: action.payload
      };
    case "GET_FIMLS_REJECTED":
      return {
        ...state,
        error: action.payload
      };
  }
}
