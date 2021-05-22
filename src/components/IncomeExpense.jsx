import classes from "./IncomeExpense.module.css"

const IncomeExpense=props=>{
    return <div className={classes["income-expense"]}>
        <div className={classes.income}>Income</div>
        <div className={classes.expense}>Expense</div>
    </div>
}

export default IncomeExpense;