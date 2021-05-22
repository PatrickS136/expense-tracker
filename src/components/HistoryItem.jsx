import classes from "./HistoryItem.module.css"

const HistoryItem=props=>{
    return <div className={classes[`history-item-${props.income===true?"income":"expense"}`]}>
        <span className={classes["history-item-title"]}>{props.title}</span>
        <span className={classes["history-item-amount"]}>{props.income===true?"+":"-"}{props.amount.toFixed(2)}</span>
    </div>
}

export default HistoryItem;