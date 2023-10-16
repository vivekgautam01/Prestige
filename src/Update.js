import { Component } from "react";

class Update extends Component
{
    constructor()
    {
        super()
        console.log("Constructor")
        this.state=
        {
            name:"Ram"
        }
    }
    componentDidUpdate()
    {
    console.log("Component Did Update")
    }
    render()
    {
    console.log("Render")
    return(
        <div>
            <h1>My Name is {this.state.name}</h1>
            <button onClick={()=>this.setState({name:"Syam"})}>Submit</button>
        </div>
    )
  }
}
export default Update
 