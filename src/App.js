import React, { Component } from "react";
import { Provider } from "react-redux";

import Films from "./components/films/Films";
import store from "./redux/store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header" />
          <Films />
        </div>
      </Provider>
    );
  }
}

export default App;
