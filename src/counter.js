import React from 'react';
import Header from "./components/header.js";
import Nav from "./components/nav.js";
import Post from "./components/post.js";
import Post1 from "./components/post1.js";
import Post2 from "./components/post2.js";
import Post3 from "./components/post3.js";
const Counter=()=>{

    return(
        <div>
       <Header/>
       <Nav/>
       <Post/>
       <Post1/>
       <Post2/>
       <Post3/>
        </div>
    )
}
export default Counter;