import React, { Component } from "react";
import { connect } from "react-redux";
import { getFilms, addFilms } from "../../redux/filmsReducer";

class Films extends Component {
  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    console.log("films", this.props.films);
    const displayFilms = this.props.isLoading ? (
      <p> Loading please wait... </p>
    ) : (
      this.props.films.map((film, index) => {
        return (
          <div key={index}>
            <h3> Films: </h3>
            <span>{film.title}</span>
            <span>{film.description}</span>
          </div>
        );
      })
    );

    return (
      <div>
        <h3>FILMS: </h3> {displayFilms}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.films;
};

export default connect(
  mapStateToProps,
  { getFilms, addFilms }
)(Films);
