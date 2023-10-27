import { useState } from "react";

function Contro()
{
    const [name,setName]=useState();
    function hello()
    {
        console.log(name)
    }
    return(
        <div>
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/><br></br>
            <button onClick={hello}>Submit</button>
        </div>
    )
}
export default Contro