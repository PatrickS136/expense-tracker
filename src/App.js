import './App.css';
import IncomeExpense from './components/IncomeExpense';
import YourBalance from './components/YourBalance';
import History from "./components/History"
import useHttp from './hooks/use-http';
import AddBalance from './components/AddBalance';

const App=()=>{
  const {historyItems,loading}=useHttp();


  const appContent=loading ? <p>Loading...</p> : 
  <div className="app-content">
    <YourBalance historyItems={historyItems}/>
    <IncomeExpense historyItems={historyItems}/>
    <History historyItems={historyItems}/>
    <AddBalance />
  </div>;


  return (
    <div className="App">
      <h2 className="title">Expense Tracker</h2>
      {appContent}
      <h4 className="title">Patrick Sumarli</h4>
    </div>
  );
}

export default App;
