import { useState, useEffect } from "react";

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
      fetchedHistoryItems.sort((a, b)=>{
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setHistoryItems(fetchedHistoryItems);
    };
    fetchBalanceData();
    setLoading(false);
  }, []);

  return { historyItems, loading };
};

export default useHttp;
