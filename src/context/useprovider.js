import React,{useState,useEffect} from 'react';
import Usecontext from './usecontext.js';

const Useprovider=({children})=>{
const [token,setToken]=useState(null);
useEffect(()=>{
    const token=localStorage.getItem("token");
    if(token){
        setToken(token);
    }
},[])
    return(
        <div>
       <Usecontext.Provider value={{token,setToken}}>        
        {children}                                         
       </Usecontext.Provider>                                  
        </div>
    )
}
export default Useprovider;