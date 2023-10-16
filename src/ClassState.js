import { Component } from "react"

class Classstate extends Component
{
   constructor()
   {
     super()
     this.state=
     {
        name:"Ram"
     }
   }
   render()
   {
    return(
        <div>
        <h1>My Name is {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Syam"})}>Submit</button>
        </div>
      )
   }
}
export default Classstate