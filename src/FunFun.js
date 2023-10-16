import { useState } from "react";

function  FunFun()
{
  //  function hello()
  //  {
  //    alert("Hello World=")
  //  }
  // return(
  //   <div>
  //     <button onClick={hello}>Submit 1</button>
  //     <button onClick={()=>hello()}>Submit 2</button>
  //   </div>
  // 

  // var name ="Ram";
  var [name,setName]=useState("Ram")    
  function hello()
  {
  //  name="Syam";
  setName("Syam")
   
  }
  return(
    <div>
      <h1>My Name is {name}</h1>
      <button onClick={hello}>Submit</button>
    </div>
  )

}
export default FunFun