import React,{ useState} from "react";


function App()
{
    const[name,setName]=useState("Sai");
    const[Department, setDept] =useState("IT");
    const[year,setYear]=useState("2000");
return (
    <div>
    <h1>My College{name}</h1>
    <p>is established in {year} which is having {Department}</p>
    <button onClick={()=>ReadableStreamBYOBReader('2005')}>click me</button>
    </div>
)
}