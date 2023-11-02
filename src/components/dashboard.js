import React,{useState,useContext,useEffect} from 'react';
import axios from 'axios';
import usercontext from "../context/usecontext.js";
import {useNavigate} from "react-router-dom";
const Dashboard=()=>{
    const [joke,setJoke]=useState("");
    const [name,setName]=useState("");
    const {token,setToken}=useContext(usercontext);
    const navigate=useNavigate();
 useEffect(()=>{
     if(!token){
    navigate("/login");
    }
getjoke();
 },[token])
 async function getjoke(){
    try{
     const response=await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
   headers:{
    authoriZation:`Bearer ${token}`
   }
        })
 console.log(response.data);
 setJoke(response.data.data.message);
 setName(response.data.data.user.name);
    }
    catch(e){
        console.log(e);
    }
 }
 async function handlelogout(){
    try{
    const response=await axios.delete("https://instagram-express-app.vercel.app/api/auth/logout",{
        headers:{
            authorization:`Bearer ${token}`
        }
 })
 console.log(response.data);
 setToken(null);
 setJoke("");
 setName("");
 localStorage.removeItem("token");
}
catch(e){
    console.log(e);
}
 }
    return(
        <div>
        <h1>welcome {name}</h1>
        <p>{joke}</p>
        <button onClick={handlelogout}>logout</button>
        </div>
    )
}
export default Dashboard;