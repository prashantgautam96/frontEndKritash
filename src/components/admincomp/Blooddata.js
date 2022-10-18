import React, { useEffect, useState } from "react";

import axios, { Axios } from 'axios'



const Blooddata = () => {
  const [team,setTeam]= useState([]);

  useEffect(()=>{
    const fetchTeam = async ()=>{
      const res= await axios.get("/blood")
      // console.log(res)
      setTeam(res.data)
    }
    fetchTeam();
  },[])
  return (
    <div>
                <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="ion ion-clipboard mr-1" />
                Blood

                <i class="fa-regular fa-hospital-user"></i>
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
            <div className="card-body">
              <ul className="todo-list" data-widget="todo-list">
                
              {team.slice(0,20).map((card, i) => (
                    <div className="todo-list" key={i} reversed={i % 2 === 1}>
                    {/* <Image imageSrc={card.imageSrc} /> */}
                    <li>
                    <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  {/* checkbox */}
                  {/* <div className="icheck-primary d-inline ml-2"> */}
                    {/* <input type="checkbox" defaultValue name="todo1" id="todoCheck1" /> */}
                    {/* <label htmlFor="todoCheck1" /> */}
                  {/* </div> */}
                  {/* todo text */}
                  <a href="/Addpost">
                  <span className="text">{card.name}</span>
                  <span className="text">{card.mobile}</span>
                  </a>
                  {/* Emphasis label */}
                  <small className="badge badge-danger"><i className="far fa-clock" /> {card.bloodGroup}</small>
                  {/* General tools such as edit or delete*/}
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                  </li>
                    </div>
                ))}
                
              </ul>
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
              <a href="/Addpost">
              <button type="button" className="btn btn-primary float-right"><i className="fas fa-plus" /> Add item</button>
              </a>
            </div>
          </div>
          {/* /.card */}


    </div>
  )
}

export default Blooddata