import classes from "./IncomeExpense.module.css"


const IncomeExpense=props=>{
    const calculateBalance=incomeType=>{
        let total=props.historyItems.filter(balanceObject=>balanceObject.income===incomeType).reduce((total,balanceObject)=>{
            return total+balanceObject.amount;
        },0)
        return total;
    }

    return <div className={classes["income-expense"]}>
        <div className={classes.income}>
            <p className={classes["income-text"]}>Income</p>
            <p className={classes["income-amount"]}>${calculateBalance(true).toFixed(2)}</p>
        </div>
        <div className={classes.expense}>
            <p className={classes["expense-text"]}>Expense</p>
            <p className={classes["expense-amount"]}>${calculateBalance(false).toFixed(2)}</p>
        </div>
    </div>
}

export default IncomeExpense;