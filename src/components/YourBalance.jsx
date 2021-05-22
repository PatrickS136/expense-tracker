import classes from "./YourBalance.module.css"

const YourBalance=(props)=>{
    return <div className={classes["your-balance"]}>
        <p className={classes["your-balance-text"]}>Your Balance</p>
        <p className={classes["your-balance-ammount"]}>$260.00</p>
    </div>
};

export default YourBalance;