import { useEffect, useState } from "react";

function Hook_1()
{
    useEffect(()=>{console.log("LOADING.....")})
    const [name,setName]=useState("Ram")
    return(
        <div>
            <h1>My Name is {name}</h1>
            <button onClick={()=>setName("Syam")}>Submit</button>
        </div>
    )
}
export default Hook_1