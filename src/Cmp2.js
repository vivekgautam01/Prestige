function Cmp2(prop)
{
    const data="Golu"
    return(
        <div>
            <button onClick={()=>prop.name(data)}>Submit</button>
        </div>
    )
}
export default Cmp2