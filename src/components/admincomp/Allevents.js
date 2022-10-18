import React, { useEffect, useState } from "react";

import axios, { Axios } from 'axios'



const Allevents = () => {
    const [posts,setPosts]= useState([]);

    useEffect(()=>{
      const fetchPost = async ()=>{
        const res= await axios.get("/events")
        console.log(res)
        setPosts(res.data)
      }
      fetchPost();
    },[])
  return (
    <div>
                <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="ion ion-clipboard mr-1" />
                All Events here
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
                

                    {posts.slice(0,10).map((card, i) => (
                    <div key={i} reversed={i % 2 === 1}>
                    {/* <Image imageSrc={card.imageSrc} /> */}
                    <li>
                    <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  {/* checkbox */}
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                    <label htmlFor="todoCheck1" />
                  </div>
                  {/* todo text */}
                  <a href="/Addpost">
                  <span className="text">{card.title}</span>
                  </a>
                  {/* Emphasis label */}
                  <small className="badge badge-danger"><i className="far fa-clock" /> {card.createdAt}</small>
                  {/* General tools such as edit or delete*/}
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                  </li>
                    </div>
                ))}
                <li>
                  {/* drag handle */}
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  {/* checkbox */}
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                    <label htmlFor="todoCheck1" />
                  </div>
                  {/* todo text */}
                  <span className="text">iit jammu tour</span>
                  {/* Emphasis label */}
                  <small className="badge badge-danger"><i className="far fa-clock" /> 2 mins</small>
                  {/* General tools such as edit or delete*/}
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
                    <label htmlFor="todoCheck2" />
                  </div>
                  <span className="text">Make the theme responsive</span>
                  <small className="badge badge-info"><i className="far fa-clock" /> 4 hours</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
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
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
                    <label htmlFor="todoCheck4" />
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-success"><i className="far fa-clock" /> 3 days</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo5" id="todoCheck5" />
                    <label htmlFor="todoCheck5" />
                  </div>
                  <span className="text">Check your messages and notifications</span>
                  <small className="badge badge-primary"><i className="far fa-clock" /> 1 week</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
                <li>
                  <span className="handle">
                    <i className="fas fa-ellipsis-v" />
                    <i className="fas fa-ellipsis-v" />
                  </span>
                  <div className="icheck-primary d-inline ml-2">
                    <input type="checkbox" defaultValue name="todo6" id="todoCheck6" />
                    <label htmlFor="todoCheck6" />
                  </div>
                  <span className="text">Let theme shine like a star</span>
                  <small className="badge badge-secondary"><i className="far fa-clock" /> 1 month</small>
                  <div className="tools">
                    <i className="fas fa-edit" />
                    <i className="fas fa-trash-o" />
                  </div>
                </li>
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

export default Allevents