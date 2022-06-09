import { useState } from "react";
import video from "../data/video.js";

function App() {
  const {title,embedUrl,views,createdAt,downvotes,upvotes,comments,id} =video
  const [Like,setLike]=useState(upvotes)
  const [commentData,setComments]=useState(comments)
  const [disLike,setDisLike]=useState(downvotes)
const [isHide,setIsHide]=useState(true)
const onDelete=(id)=>{
  const newData=commentData.filter(i=>i.id!=id)
  setComments(newData)
}
const onLike=(id)=>{
  const updated=commentData.map(item=>{
   
    if(id===item.id){
item.like++
    }return item
   
  })
  
  setComments(updated)
}
const dislikeComment=(id)=>{
  const updated=commentData.map(item=>{
   
    if(id===item.id){
item.dislike++
    }return item
   
  })

  setComments(updated)
}
const[input,setInput]=useState("")
const onSearch=()=>{
  const updated=commentData.filter(c=>c.user.includes(input))
  setComments(updated)
}
const onSort=()=>{

}


  return (
    <div className="App"><iframe
        width="719"
        height="425"
        src={embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
<h1>{title}</h1>
<p>{views+ " Views"+ " | Uploaded "+createdAt}</p>
      <div >
        <button onClick={()=>setLike(perv=>perv+1)}> {Like +" "} 👍</button>
      
      <button onClick={()=>setDisLike(perv=>perv+1)}>{disLike +" "} 👎</button></div>
  
  <button onClick={()=>setIsHide(!isHide)} style={{marginTop:"10px"}}>
    {!isHide?"Show Comments":"Hide Comments"}
    
    
    </button>
    <hr/>
    {isHide?
    <div>
    
      <h1>{commentData.length}{" Comments"}</h1>
      {console.log(commentData,"sfos")}
      <span><input onChange={(e)=>setInput(e.target.value)} />
      <button onClick={onSearch}> Search</button>
      {/* <button onClick={onSort}> sort</button> */}
      </span>
   
   { commentData?commentData.map((item,i)=>
    (<div key={i} >
      <h4>{item.user}</h4>
      <p >{item.comment} 
      <button onClick={()=>onLike(item.id)}> {item.like}👍</button>
      <button onClick={()=>dislikeComment(item.id)}>{item.dislike}👎</button>
      <button onClick={()=>onDelete(item.id)}>❌</button>
      </p>
    </div>
    )):null}
    
    
    </div>:null}
    
    
    </div>
  );
}

export default App;