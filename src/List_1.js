import Table from 'react-bootstrap/Table';

function List_1()
{
    var data=[{rollno:101,name:"Ram",marks:55},
    {rollno:102,name:"Shyam",marks:67},
    {rollno:103,name:"Raju",marks:89},
    {rollno:104,name:"Shiv",marks:46},
    {rollno:105,name:"Satish",marks:78}]; 
   return(
    <Table striped bordered hover variant="dark">
    <thead>
        <tr>
          <th>Roll No.</th>
          <th>Name</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
      {data.map((person) =>(
        <tr key={person.id}>
          <td>{person.rollno}</td>
          <td>{person.name}</td>
          <td>{person.marks}</td>
        </tr>
         ))} 
      </tbody>  
    </Table>
   )
}
export default List_1
