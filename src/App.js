import './App.css';
import IncomeExpense from './components/IncomeExpense';
import YourBalance from './components/YourBalance';
import History from "./components/History"
import {useState,useEffect} from "react"

const App=()=>{
  const [historyItems,setHistoryItems]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    const fetchBalanceData=async()=>{
      const response=await fetch("https://react-udemy-tasks-default-rtdb.firebaseio.com/expenses.json")
      if (!response.ok){
        console.log("Error in fetching data")
        return;
      }
      const data= await response.json();
      let fetchedHistoryItems=[];
      for (let key in data){
        fetchedHistoryItems.push(data[key])
      }
      setHistoryItems(fetchedHistoryItems);
    }
    fetchBalanceData();
    setLoading(false);
  },[])

  const appContent=loading ? <p>Loading...</p> : 
  <div>
    <YourBalance historyItems={historyItems}/>
    <IncomeExpense historyItems={historyItems}/>
    <History historyItems={historyItems}/>
  </div>;


  return (
    <div className="App">
      <h2 className="title">Expense Tracker</h2>
      {appContent}
    </div>
  );
}

export default App;
