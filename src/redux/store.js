import { applyMiddleware, combineReducers, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";

// Reducers--------------------------------------------------
import filmsReducer from "./filmsReducer";
import peopleReducer from "./peopleReduces";

const multipleReducers = combineReducers({
  films: filmsReducer,
  people: peopleReducer
});

const middleware = applyMiddleware(promiseMiddleware());
const store = createStore(multipleReducers, middleware);

export default store;
