const {  useRef } = require("react")
function RefFun()
{
  const inputref=useRef()
  function hello()
   {
    inputref.current.value="Hello World";
    inputref.current.style.color="red";
    inputref.current.style.backgroundColor="black";
   }
    return(
        <div>
            <input type="text" placeholder="Enter name" ref={inputref}/><br></br>
            <button onClick={()=>hello()} >Click</button>
        </div>
    )
}

export default RefFun