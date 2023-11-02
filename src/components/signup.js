import React,{useState,useContext} from 'react';
import "../signup.css";
import axios from 'axios';
import userContext from "../context/usecontext.js";
import {useNavigate} from "react-router-dom";
const Signup=()=>{
const [user, setUser]=useState({name:"",email:"",password:"",cpassword:""});
const {setToken}=useContext(userContext);
const navigate=useNavigate();
function handleinput(e){
    setUser({...user,[(e.target.name)]:e.target.value});
}
const {name,email,password,cpassword}=user;
function handlesubmit(e){
    e.preventDefault();
    if(!name||!email||!password||!cpassword){
        alert("all fields are required");
    }
    else if(password!=cpassword){
        alert("passwords do not match");
    }
    else{
        axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{name,email,password})
        .then(response=>{
            console.log(response.data.data.token)
            setToken(response.data.data.token)
            localStorage.setItem("token",response.data.data.token)
            navigate("/counter");
        })
        .catch(err=>console.log(err.response.data.message))
    }
}
    return(
        <div className="form">
      <h1>Sign up</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="enter your name" value={user.name} onChange={handleinput} name="name"/>
        <input type="email" placeholder="enter your email" value={user.email} onChange={handleinput} name="email"/>
        <input type="password" placeholder="enter your password" value={user.password} onChange={handleinput} name="password"/>
        <input type="password" placeholder="enter your confirm password" value={user.cpassword} onChange={handleinput} name="cpassword"/>
        <button type="submit">submit</button>
      </form>
        </div>
    )
}

export default Signup;