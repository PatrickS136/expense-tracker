import classes from "./History.module.css"
import HistoryItem from "./HistoryItem"

const History=props=>{
    return <div className={classes.history}>
        <p className={classes["history-title"]}>History</p>
        <hr />
        {props.historyItems.map(item=><HistoryItem income={item.income} key={item.id} id={item.id} amount={item.amount} title={item.title}/>)}
    </div>
}

export default History;