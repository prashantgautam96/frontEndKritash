import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./SinglePost.css";
import ReactHtmlParser from "react-html-parser";

export default function SinglePost() {
  const parse = require("html-react-parser");
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);

      setPost(res.data);
    };
    getPost();
  }, [path]);
  const imageAPI = `${process.env.REACT_APP_BACKEND_URL}/image`;

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImg"
            src={new URL(`${imageAPI}/${post.photo}`).href}
            alt=""
          />
        )}

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
                {post.author} 
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <div>{ReactHtmlParser(post.desc)}</div>
        <p className="singlePostDesc"></p>
      </div>
    </div>
  );
}
