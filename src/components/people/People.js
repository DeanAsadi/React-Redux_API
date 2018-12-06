import React, { Component } from "react";
import { connect } from "react-redux";

class People extends Component {
  state = {
    people: []
  };

  render() {
    return <div />;
  }
}

// mapStateToProps = state => {
//   return state;
// };

export default connect()(People);
