import {useState,useEffect} from "react"

const useHttp = () => {
  const [historyItems, setHistoryItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBalanceData = async () => {
      const response = await fetch(
        "https://react-udemy-tasks-default-rtdb.firebaseio.com/expenses.json"
      );
      if (!response.ok) {
        console.log("Error in fetching data");
        return;
      }
      const data = await response.json();
      let fetchedHistoryItems = [];
      for (let key in data) {
        fetchedHistoryItems.push(data[key]);
      }
      setHistoryItems(fetchedHistoryItems);
    };
    fetchBalanceData();
    setLoading(false);
  }, []);

  return {historyItems,loading};
};

export default useHttp;
