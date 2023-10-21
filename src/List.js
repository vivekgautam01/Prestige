function List()
{
    var arr=["Ram" ,"Syam" ,"Mohan" ,"Rahul"]//array
    return(
     <div>
        {
        arr.map((item)=>//map
        <h1>{item}</h1>
        )
      }
     </div>
    )
}
export default List