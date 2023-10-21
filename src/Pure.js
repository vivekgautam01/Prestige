import { PureComponent } from "react";

class Pure extends PureComponent
{
    constructor()
    {
        super()
        this.state =
        {
            count:0
        }
    }
   render()
   {
     console.log("Render")
    return(
        <div>
             Count:{this.state.count}<br></br>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
        </div>
    )
   }
}
export default Pure