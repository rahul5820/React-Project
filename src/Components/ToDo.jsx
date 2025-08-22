import {  useEffect, useState } from "react"
import '../Components/ToDo.css'

export const ToDo =()=>{
    const [inputValue,setinputValue]=useState("");
    const [taskValue,setTaskvalue]=useState([])
    const [datenTime,setdatenTime]=useState("")

const handleChange=(value)=>{
    setinputValue(value);
     
}
const handleformSubmit = (event) =>{
    event.preventDefault();
    if(!inputValue ) return;
    if( taskValue.includes(inputValue)){
        setinputValue("")
        return;
    }
    
        
    setTaskvalue((pre)=>[...pre,inputValue])
    setinputValue("")


}
const handleDeleteItem =(value)=>{
    const deletedtask= taskValue.filter((currentask)=>currentask !==value)
    setTaskvalue(deletedtask)


}

const handleCheck = (value)=>{
    const checked= taskValue.filter((currIntem)=>currIntem==value)

    


}
const handleClearAll=()=>{
    setTaskvalue([])
}
useEffect(()=>{
    
const inetrval = setInterval(()=>{

const now= new Date();
const FormattedDate=now.toLocaleDateString();
const FormattedTime = now.toLocaleTimeString()
 
setdatenTime( `${FormattedDate}-${FormattedTime}`)

   },1000);

 return () => clearInterval (inetrval)
    
},[])




return(

<section className="todo-container">
<header>
    <h1>TO DO List</h1>
    <h2 className="date-time"> Date :{datenTime}</h2>
</header>
<section className="form">
<form onSubmit={handleformSubmit}>
    <input type='text'  className="todo-input"placeholder="Enter Your Task" value={inputValue} 
    onChange={(e)=>handleChange(e.target.value)}
     autoComplete="off"/>
<div>
    <button type="submit"  style={{backgroundColor:"blue"}} className="todo-btn">ADD Task</button>
</div>
</form>


</section>
<section  className="myUnOrdList">
    <ul>
        {taskValue.map((elem,i)=>{
            return(
                <li className="todo-item" key={i}><span>{elem}</span>
                <button className="chk-btn"  onClick={ ()=>{handleCheck( elem)}}> </button>
                <button className="delete-btn" onClick={()=>handleDeleteItem(elem)}> </button>
                
                
                
                </li>
            )
        })}
    </ul>
</section>
<section><button className="clear-btn" onClick={()=>handleClearAll()}>Clear all</button></section>
</section>

)



}