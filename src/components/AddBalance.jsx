import classes from "./AddBalance.module.css"
import SectionTitle from "./SectionTitle";
import {useState} from "react"

const AddBalance=props=>{
    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState(0)


    const submitHandler=(event)=>{
        // event.preventDefault();
        console.log(title);
        console.log(amount);

        const addNewBalance=async ()=>{
            const response=await fetch("https://react-udemy-tasks-default-rtdb.firebaseio.com/expenses.json",{
                method:"POST",
                body:JSON.stringify({
                    income:(amount<0)?false:true,
                    amount:Math.abs(amount),
                    id:Math.random(),
                    title:title.trim(),
                })
            })
            const data=await response.json()
            console.log(data);
        }

        if (title.trim().length>0 && amount!==0 && amount!==""){
            addNewBalance();
        }
        else{
            console.log("Invalid input");
            return;
        }

        setTitle("");
        setAmount(0);

    }

    const titleChangeHandler=(event)=>{
        setTitle(event.target.value);
    }

    const amountChangeHandler=(event)=>{
        setAmount(event.target.value);
    }

    return <div className={classes["add-balance"]}>
        <SectionTitle title="Add a new entry" />
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="title">Title : </label>
            <input onChange={titleChangeHandler} type="text" id="title" value={title} autoComplete={"off"} autoCapitalize={"on"} />
            <label htmlFor="amount">Amount : </label>
            <input onChange={amountChangeHandler} type="number" id="amount" value={amount} autoComplete={false} />
            <button type="submit" disabled={title.trim().length===0 || amount===0 || amount===""}>Add</button>
        </form>
    </div>
}

export default AddBalance;