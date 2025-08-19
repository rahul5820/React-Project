import {  useState } from "react"
import '../Components/ToDo.css'

export const ToDo =()=>{
    const [inputValue,setinputValue]=useState("");
    const [taskValue,setTaskvalue]=useState([])

// function handleSubmitbtn(){
//  setTaskvalue(inputValue);

// } 
const handleChange=(value)=>{
    setinputValue(value)
     
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

return(

<section className="todo-container">
<header>
    <h1>TO DO List</h1>
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

</section>

)



}