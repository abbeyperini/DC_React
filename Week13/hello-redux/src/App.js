import { connect } from 'react-redux';
import './App.css';
import FancyCounter from './components/FancyCounter';

function App(props) {
  return (
    <div className="App">
      <h1>{props.counter}</h1>
      <button onClick = {() => props.onIncrementCounter()}>Increment</button>
      <button onClick = {() => props.onDecrementCounter()}>Decrement</button>
      <FancyCounter></FancyCounter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT_COUNTER'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT_COUNTER'})
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
