import React from 'react';
import {Routes,Route} from "react-router-dom";
import Signup from "./components/signup.js";
import Login from "./components/login.js";
//import Dashboard from "./components/dashboard.js";
import Counter from "./counter.js";
import "./style.css";
const App=()=>{

    return(
        <div>
       <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        <Route path="/counter" element={<Counter/>}/>
       </Routes>
        </div>
    )
}
export default App;