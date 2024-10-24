import React ,{useState} from 'react';
const ArrayDemo =()=>
{
const[names,setNames] =useState(["nithya","nithin"]);

const setStudent=()=>
    {
        setNames(['Ram','Sam'])
    }

 const[fami,setFami] =useState(["vaish","thirisha"]);
    
const setFamily=()=>
 {
    setFami([...fami,'Ram','Sam'] )
   }

return (
    <>
    <button onClick={setStudent}>click me</button>
    <ul>
        {
            names.map(e=><li key={e}>{e}</li>)
        }
    </ul>
    <button onClick={setFamily}>click me</button>
    <ul>
        {
            fami.map(e=><li key={e}>{e}</li>)
        }
    </ul>

   </>
)
}
export default ArrayDemo;