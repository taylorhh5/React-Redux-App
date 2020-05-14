import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions";
import  '../App.css';

const Jokes = ({ getJoke, joke, isFetching, error }) => {
  useEffect(() => {
    
    getJoke();
  }, [getJoke]);
 
  if (isFetching) {
    return <h3>Here comes your joke!</h3>;
  }

  return (
    <div className="parentdiv">
      <h2 className="jokeh2">Joke: {joke.setup}</h2>
      <h2> Punchline: {joke.punchline}</h2>
      <button onClick={getJoke}>Get another Joke</button>
    </div>
  );
};

const mapStateToProps = state => {
    console.log (state)
  return {
    joke: state.joke,

    isFetching: state.isFetching,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { getJoke }
)(Jokes);
