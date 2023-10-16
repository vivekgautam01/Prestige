import { Component } from "react"

class PropClass1 extends Component
{
   render()
   {
    return(
        <div>
            <h1> My Name is {this.props.name}</h1>
            <h1> My age is {this.props.age}</h1>
        </div>
      )
   }
}
export default PropClass1