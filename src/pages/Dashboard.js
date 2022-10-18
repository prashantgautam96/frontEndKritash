import {useEffect,useState} from 'react';
import PieChart from './PieChart';
import Header from 'components/admincomp/Header';
import Footer from 'components/admincomp/Footer';
import SideNav from 'components/admincomp/SideNav';
import Home from 'components/admincomp/Home';
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

    
 
    return (
    <>
    <Header/>
    <Home/>
    <SideNav/>
    <Footer/>
    </>
    )
}
 
export default Dashboard