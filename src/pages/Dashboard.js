import {useEffect,useState} from 'react';
import PieChart from './PieChart';
import "../components/admincomp/write/write.css"
import Header from 'components/admincomp/Header';
import Footer from 'components/admincomp/Footer';
import SideNav from 'components/admincomp/SideNav';
import Home from 'components/admincomp/Home';
import  { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import { Route, Router } from 'react-router';
import Blooddatas from 'components/admincomp/Blooddata';

const Dashboard = () => {
   
//    const[record,setRecord] = useState([])
 
//    const getData = () =>
//    {
//        fetch('https://jsonplaceholder.typicode.com/users')
//        .then(resposne=> resposne.json())
//        .then(res=>setRecord(res))
//    }
 
//    useEffect(() => {
//       getData();
//    },
//    )
const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="/blogging">
        Blogs
      </NavLink>
      <NavLink href="/accha">
        Aksharshala
      </NavLink>
      <NavLink href="/team1">
        About
      </NavLink>
      <NavLink href="/team">
        Team
      </NavLink>
      <NavLink href="/events_page">
        Events
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/bloodyForm">
        Join Us
      </PrimaryLink>
    </NavLinks>
  ];
    
 
    return (
    <>
    <div className="nav-bar">
        {navLinks}
    </div>
    <Header/>
    <Home/>
    <SideNav/>
    <Footer/>
    </>
    )
}
 
export default Dashboard