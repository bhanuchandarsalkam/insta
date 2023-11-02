import React,{useState} from 'react';

const Post1=()=>{
 const [count1,setCount1]=useState(0);
    return(
        <div>
             <div className="post">
            <div className="sub1">
            <span><img className="src" src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/a-new-unity-ian-david-soar.jpg" alt=""/></span>
            <h1>username1</h1>
            </div>
            <img className="post1" src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/4-johnny-cash-retro-images-archive.jpg" alt=""/>
            <img className="sum" src="https://img.icons8.com/?size=50&id=87&format=png" alt="" onClick={()=>setCount1(count1+1)}/>
            <p>{count1} likes</p>
            <p>this is my favourite picture please like.</p>
        </div>
        </div>
    )
}
export default Post1;