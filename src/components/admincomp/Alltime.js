import React, { useEffect, useState } from "react";
import SideNav from "components/admincomp/SideNav"
import axios, { Axios } from 'axios'



const Alltime = () => {
    const [posts,setPosts]= useState([]);

    useEffect(()=>{
      const fetchPost = async ()=>{
        console.log("fired")
        const res= await axios.get("/teams")
        console.log(res)
        setPosts(res.data)
      }
      fetchPost();
    },[])
  return (
    <div style={{display:"flex"}}>
      <SideNav style={{display:"inline-block"}}/>
      <div className="card" style={{display:"inline-block"}}>
      <div className="card-header" style={{display:"inline-block"}}>
        <h3 className="card-title">
          <i className="ion ion-clipboard mr-1" />
          All Blogs here
        </h3>
        <div className="card-tools">
          <ul className="pagination pagination-sm">
            <li className="page-item"><a href="#" className="page-link">«</a></li>
            <li className="page-item"><a href="#" className="page-link">1</a></li>
            <li className="page-item"><a href="#" className="page-link">2</a></li>
            <li className="page-item"><a href="#" className="page-link">3</a></li>
            <li className="page-item"><a href="#" className="page-link">»</a></li>
          </ul>
        </div>
      </div>
  {/* /.card-header */}
      <div className="card-body" style={{display:"inline-block"}}>
        <ul className="todo-list" data-widget="todo-list">
          

              {posts.slice(0,30).map((card, i) => (
              <div className="todo-list" key={i} reversed={i % 2 === 1}>
              {/* <Image imageSrc={card.imageSrc} /> */}
              <li>
              <span className="handle">
                <i className="fas fa-ellipsis-v" />
                <i className="fas fa-ellipsis-v" />
              </span>
            {/* checkbox */}
          
            {/* todo text */}
            <a href="/Addpost">
            <span className="text">{card.name}</span>
            </a>
            {/* Emphasis label */}
            <small className="badge badge-danger"><i className="far fa-clock" /> {card.position}</small>
            {/* General tools such as edit or delete*/}
            <div className="tools">
              <i className="fas fa-edit" />
              <i className="fas fa-trash-o" />
            </div>
            </li>
              </div>
          ))}
          {/* <li>
          
            <span className="handle">
              <i className="fas fa-ellipsis-v" />
              <i className="fas fa-ellipsis-v" />
            </span>
            
            <div className="icheck-primary d-inline ml-2">
              <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
              <label htmlFor="todoCheck1" />
            </div>
            
            <span className="text">iit jammu tour</span>
          
            <small className="badge badge-danger"><i className="far fa-clock" /> 2 mins</small>
          
            <div className="tools">
              <i className="fas fa-edit" />
              <i className="fas fa-trash-o" />
            </div>
          </li> */}
        
          {/* <li>
            <span className="handle">
              <i className="fas fa-ellipsis-v" />
              <i className="fas fa-ellipsis-v" />
            </span>
            <div className="icheck-primary d-inline ml-2">
              <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
              <label htmlFor="todoCheck3" />
            </div>
            <span className="text">Let theme shine like a star</span>
            <small className="badge badge-warning"><i className="far fa-clock" /> 1 day</small>
            <div className="tools">
              <i className="fas fa-edit" />
              <i className="fas fa-trash-o" />
            </div>
          </li> */}
        </ul>
      </div>
  {/* /.card-body */}
      <div className="card-footer clearfix">
        <a href="/Add_T">
          <button type="button" className="btn btn-primary float-right"><i className="fas fa-plus" /> Add item</button>
        </a>
      </div>
  </div>
{/* /.card */}


</div>
  )
}

export default Alltime