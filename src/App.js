import './App.css';
import IncomeExpense from './components/IncomeExpense';
import YourBalance from './components/YourBalance';
import History from "./components/History"

const App=()=>{
  let historyItems=[
    {
        id:1,
        income:true,
        title:"Monthly Salary",
        amount:5000.40,
    },
    {
        id:2,
        income:false,
        title:"Battle Pass",
        amount:60.50
    },
    {
        id:3,
        income:true,
        title:"Equity stuff",
        amount:300.60,
    },
    {
        id:4,
        income:false,
        title:"PS5",
        amount:700.50
    }
  ]

  return (
    <div className="App">
      <h2 className="title">Expense Tracker</h2>
      <YourBalance historyItems={historyItems}/>
      <IncomeExpense historyItems={historyItems}/>
      <History historyItems={historyItems}/>
    </div>
  );
}

export default App;
