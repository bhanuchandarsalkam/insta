import React,{useState,useContext} from 'react';
import axios from 'axios';
import "../login.css";
import usercontext from '../context/usecontext';
import {useNavigate} from "react-router-dom";
const Login=()=>{
const [user, setUser]=useState({email:"",password:""});
const {setToken}=useContext(usercontext);
const navigate=useNavigate();
function handleinput(e){
    setUser({...user,[(e.target.name)]:e.target.value});
}
const {email,password}=user;
function handlesubmit(e){
    e.preventDefault();
    if(!email||!password){
        alert("all fields are required");                  
    }                                                          
    else{                                                                                                                                                    
        axios.post("https://instagram-express-app.vercel.app/api/auth/login/",{email,password})
        .then(response=>{
            console.log(response.data);
            setToken(response.data.data.token);
            localStorage.setItem("token",response.data.data.token)
          navigate("/counter");
        })
        .catch(err=>console.log(err.response.data.message))
    }
}
    return(
        <div className="login">
      <h1>login</h1>
      <form onSubmit={handlesubmit}>
        <input type="email" placeholder="enter your email" value={user.email} onChange={handleinput} name="email"/>
        <input type="password" placeholder="enter your password" value={user.password} onChange={handleinput} name="password"/>
        <button type="submit">submit</button>
      </form>
        </div>
    )
}
export default Login;