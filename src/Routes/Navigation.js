import {
    Routes,
    Route
  } from "react-router-dom";
  import Login from '../Component/Login';
  import Dashboard from '../Component/DashBoard';
  export function Navigation(props) {
    return (
      
    <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
    );
  }