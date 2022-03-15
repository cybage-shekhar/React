import {
    Routes,
    Route,
    useLocation
  } from "react-router-dom";
  import Login from '../Component/Login';
  import Dashboard from '../Component/DashBoard';
import User from "../Component/User";
import AddUser from "../Component/AddUser";
import EditUser from "../Component/EditUser";
import Charts from "../Component/Charts";
import  ReactGA from 'react-ga';
import React, { useEffect } from "react";

  export function Navigation(props) {
    const location = useLocation();
  useEffect(()=>{
    ReactGA.pageview(location.pathname); 
    ReactGA.event({
      category: 'Links',
      action: location.pathname,
      label: location.pathname,
      value: location.pathname
    });
  },[location.pathname]);
    return (
      
    <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/user/add" element={<AddUser />}></Route>
        <Route path="/user/edit/:id" element={<EditUser />}></Route>
        <Route path="/chart" element={<Charts />}></Route>
    </Routes>
    );
  }