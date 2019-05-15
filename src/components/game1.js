import { connect } from "react-redux";
import React from "react";
import store, { whichDog } from "./store";
import { tsConstructorType } from "@babel/types";
import { OneDogImageContainer } from './OneDogImageContainer'

const redux = require("redux");

const dogBreeds = ["afghan", "basset", "blood", "english", "ibizan", "walker"];

// const randomDogBreed = (dogBreeds) => {
//   const randomIndex = Math.floor(Math.random() * dogBreeds.length)
//   return dogBreeds[randomIndex]
// };

class Game extends React.Component {

  handleChoice = (guessedBreed) => {
    if (guessedBreed === this.props.correctDogBreed) {
      this.props.dispatch({
        type: "CORRECT_GUESS",
        payload: guessedBreed
      });
    } else {
      this.props.dispatch({
        type: "WRONG_GUESS",
        payload: guessedBreed
      });
  };
}

  render() {
    return (
      <>
        <h3>What am I?</h3>
        <p onClick={() => this.handleChoice(this.props.correctDogBreed)}>
        { this.props.correctDogBreed }
        </p>
        <p onClick={() => this.handleChoice("not hound")}>
          {" "}
          wrong breed{" "}
        </p>
        <p onClick={() => this.handleChoice("a cat")}> wrong breed </p>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    correctDogBreed: state.correctDogBreed,
    selectedDogBreed: state.selectedDogBreed
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     whichDog: selectedDogBreed => dispatch(whichDog(selectedDogBreed))
//   }
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Game);