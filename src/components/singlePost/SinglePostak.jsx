import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  useLocation,
} from 'react-router-dom';
import "./SinglePost.css";

const img="https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80"


export default function SinglePost() {

  const location= useLocation()
  const path =location.pathname.split("/")[2];

  const [post,setPost]=useState({})

  useEffect(()=>{
    const getPost = async()=>{

    const res= await axios.get("/akshar/"+path);
    
    setPost(res.data)

  };
  getPost();
},[path]);


  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
        <img
          className="singlePostImg"
        //   src={post.photo}
        src={img}
          alt=""
        />)}

        <h1 className="singlePostTitle">
          {post.title}
          {/* <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div> */}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}