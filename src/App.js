import './App.css';
import IncomeExpense from './components/IncomeExpense';
import YourBalance from './components/YourBalance';

function App() {
  return (
    <div className="App">
      <h2 className="title">Expense Tracker</h2>
      <YourBalance />
      <IncomeExpense />
    </div>
  );
}

export default App;
