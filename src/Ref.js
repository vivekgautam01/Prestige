const {  createRef, Component } = require("react")
class Ref extends Component
{
   constructor()
   {
    super()
    this.inputref=createRef()
   }
   hello()
   {
    this.inputref.current.value="Hello World";
    this.inputref.current.style.color="red";
    this.inputref.current.style.backgroundColor="black";
   }
   render()
   {
    return(
        <div>
            <input type="text" placeholder="Enter name" ref={this.inputref}/><br></br>
            <button onClick={()=>this.hello()} >Click</button>
        </div>
    )
}
}
export default Ref
