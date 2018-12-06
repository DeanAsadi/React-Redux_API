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
  console.log("action--->", action);
  console.log("action.payload--->", action.payload);
  console.log("action.type--->", action.type);

  switch (action.type) {
    case `GET_FIMLS_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `GET_FILMS_FULFILED`:
      return {
        ...state,
        isLoading: false,
        films: action.payload.data
      };
    case `GET_FIMLS_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case `ADD_FIMLS_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case ` ADD_FILMS_FULFILED `:
      return {
        ...state,
        isLoading: false,
        films: action.payload
      };
    case ` ADD_FILMS_REJECTED `:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
