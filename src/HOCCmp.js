const { useState } = require("react")

function HOCCmp()
{
    return(
        <div>
            <HOCBlue data={Counter}></HOCBlue>
            <HOCGreen data={Counter}></HOCGreen>
            <HOCRed data={Counter}> </HOCRed>

        </div>
    )
}
function HOCBlue(prop)
{
    return<h1 style={{backgroundColor:"blue" ,width:"200px"}}><prop.data/></h1>
}
function HOCRed(prop)
{
    return<h1 style={{backgroundColor:"Red" ,width:"200px"}}><prop.data/></h1>
}
function HOCGreen(prop)
{
    return<h1 style={{backgroundColor:"green" ,width:"200px"}}><prop.data/></h1>
}
function Counter()
{
    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    )
}
export default HOCCmp