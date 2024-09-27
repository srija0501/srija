import React ,{useState,useEffect} from 'react';
import Axios from 'axios';
const DemoPostAxios=()=>{
    const[name,setName]=useState('');
    const addNew=()=>{
        Axios.post('https://jsonplaceholder.typicode.com/users',{name:name})
        .then(res=>console.log(res.data))
    }
    return (
        <>
        <h1>Post Demo</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={addNew}>AddNew</button>
        </>
    )
}
export default DemoPostAxios;