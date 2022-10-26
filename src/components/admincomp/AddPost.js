import React, { useState } from "react";
import axios from "axios";
import tw from "twin.macro";
const AddPost = () => {

  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [author,setAuthor]=useState("")
  const [blog,setBlog]=useState("")
  



  const handleSubmit= async(e)=>{
    e.preventDefault();

    const res= await axios.post("/posts",{
     
      title,
      desc,
      author,
      blog,
     
    });
    console.log(res)

  };
  return (

        <div className="col-md-5">
          
            <div className="form-area">  
                  <form role="form" onSubmit={handleSubmit}>
                  <br styles="clear:both" />
                    <div className="form-group">
                      <input type="text" className="form-control" id="title" name="title" placeholder="Title" onChange={e=>setTitle(e.target.value)} required />
                      <input type="text" className="form-control" id="title" name="title" placeholder="Description" onChange={e=>setDesc(e.target.value)} required />
                      <input type="text" className="form-control" id="title" name="title" placeholder="username" onChange={e=>setAuthor(e.target.value)} required />
                      

                    </div>
                    
                    <div className="form-group">
                    <textarea className="form-control" type="textarea" id="subject" placeholder="Blog" onChange={e=>setBlog(e.target.value)} maxlength="140" rows="7"></textarea>

                    </div>
                      
                      <button type="submit" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
                  </form>
              </div>
          

    </div>
  )
}

export default AddPost