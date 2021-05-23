import SectionTitle from "./SectionTitle";
import classes from "./YourBalance.module.css"

const YourBalance=(props)=>{

    const balance=props.historyItems.reduce((total,balanceObject)=>{
        return total + balanceObject.amount*(balanceObject.income===true?1:(-1));
    },0)

    return <div className={classes["your-balance"]}>
        <SectionTitle title="Your Balance" />
        <p className={classes["your-balance-ammount"]}>${balance.toFixed(2)}</p>
    </div>
};

export default YourBalance;