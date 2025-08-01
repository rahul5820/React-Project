

function Button() {


    // let Count=0;
    // let handleClick=(name)=>{
       
    //     if(Count<3){
    //         Count++;
    //         console.log(`you click me ${Count} times ${name}`);
    //     }
    //     else{
    //         console.log(`stop clicking me ${name}`)
    //     }

    // }
        
    let handleClick =(e)=>{
     e.target.textContent="hui huihui"
    }
       
  return (
    <div>
    <button onClick={(e)=>handleClick(e)}> Click Me</button>
    </div>
  )
}

export default Button
