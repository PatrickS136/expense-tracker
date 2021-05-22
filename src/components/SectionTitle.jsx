import classes from "SectionTitle.module.css"

const SectionTitle=props=>{
    return <>
        <p className={classes["section-title"]}>{props.title}</p>
        <hr />
    </>
}

export default SectionTitle