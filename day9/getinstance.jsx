import React from "react";
import instance from '../day9/instance';
import axios from "axios";
const Getinstance=()=>
{
    axios.interceptors.request.use(request=>{
    console.log(request);
    request.headers.Authorization="AuthToken";
    request.headers.channelname="dfdfd"
    return request;
    })
    axios.get("https://jsonplaceholder.typicode.com/users/").then(res=>console.log(res))
    return (
        <>
      
        <h3>Get Demo</h3>
        </>
    )
}
export default Getinstance;