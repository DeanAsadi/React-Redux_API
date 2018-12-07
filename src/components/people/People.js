import React, { Component } from "react";
import { connect } from "react-redux";
import { getPeople } from "../../redux/peopleReduces";

class People extends Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    const displayPeople = this.props.isLoading ? (
      <p>Loading...</p>
    ) : (
      this.props.people.map((element, index) => {
        return (
          <div key={index}>
            <h3> Name: {element.name}</h3>
            <span>Age: {element.age} </span>
            <span>Eye Color: {element.eye_color} </span>
          </div>
        );
      })
    );

    return (
      <div>
        <h1> people from the film:</h1> {displayPeople}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.people;
};

export default connect(
  mapStateToProps,
  { getPeople }
)(People);
