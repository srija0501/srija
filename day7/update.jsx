import React,{ useState} from "react";


function Update()
{
    const[college,setCollege]=useState({CName:"Sai",year:2000, Department:"IT"});
   
    const updateYear=()=>
    {
        setCollege(prevState=> {
            return {...prevState,year:"2022"}
        });
    }
return (
    <div>
    <h1>My College {college.CName}</h1>
    <p>is established in {college.year} which is having {college.Department}</p>
    <button onClick={updateYear}>click me</button>
    
    </div>
)
}
export default Update;