
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Sidebars.css";

export default function Sidebar() {

  const [cat,setCat]=useState([])

  useEffect(()=>{
    const getCat = async()=>{
      const res= await axios.get("/categories");
      setCat(res);
      console.log(res);
    }
    getCat();

  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://blog.hubspot.com/hubfs/how-to-become-a-better-writer.jpg"     
             alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          
            <li className="sidebarListItem">Poverty</li>
            <li className="sidebarListItem">Education</li>
            <li className="sidebarListItem">Policy</li>
          
         
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}