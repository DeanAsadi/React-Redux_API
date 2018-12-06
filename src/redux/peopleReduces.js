import axios from "axios";

//Initial State----------------------------
const initialState = {
  people: [],
  isLoading: false,
  error: []
};

//Action type -----------------------------
const GET_PEOPLE = "GET_PEOPLE";

//Action creator---------------------------
export function getPeople() {
  return {
    type: GET_PEOPLE,
    payload: axios.get("https://ghibliapi.herokuapp.com/people")
  };
}

//Reducer ---------------------------------

export default function peopleReducer(state = initialState, action) {
  console.log("people action.payload ---> ", action.payload);
  switch (action.type) {
    case `GET_PEOPLE_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `GET_PEOPLE_FULFILED`:
      return {
        ...state,
        isLoading: false,
        people: action.payload.data
      };
    case `GET_PEOPLE_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
