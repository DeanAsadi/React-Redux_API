import React, { Component } from "react";
import { connect } from "react-redux";

class Films extends Component {
  state = {
    films: []
  };

  render() {
    return <div />;
  }
}

// mapStateToProps = state => {
//   return state;
// };

export default connect()(Films);
