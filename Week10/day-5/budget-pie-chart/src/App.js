import logo from './logo.svg';
import './App.css';
import Budget from './components/Budget';
import Chart from './components/Chart';
import { useState } from 'react';

function App() {
  const [budgetState, setBudgetState] = useState({})

  const handleOnChange = (budgetState) => {
    setBudgetState(budgetState)
  }

  // turns handleOnChange into a callback
  return (
    <div className="App">
      <Budget handleOnChange={handleOnChange}/>
      <Chart budgetState={budgetState}/>
    </div>
  );
}

export default App;
