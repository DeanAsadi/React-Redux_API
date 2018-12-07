import React, { Component } from "react";
import { Provider } from "react-redux";

import Films from "./components/films/Films";
import People from "./components/people/People";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header" />
          <Films />
          <People />
        </div>
      </Provider>
    );
  }
}

export default App;
