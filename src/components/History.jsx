import classes from "./History.module.css"
import HistoryItem from "./HistoryItem"
import SectionTitle from "./SectionTitle"

const History=props=>{
    return <div className={classes.history}>
        <SectionTitle title="History" />
        {props.historyItems.map(item=><HistoryItem income={item.income} key={item.id} id={item.id} amount={item.amount} title={item.title}/>)}
    </div>
}

export default History;