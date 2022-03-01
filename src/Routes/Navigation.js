import {
    Routes,
    Route
  } from "react-router-dom";
  import Login from '../Component/Login';
  import Dashboard from '../Component/DashBoard';
import User from "../Component/User";
import AddUser from "../Component/AddUser";
import EditUser from "../Component/EditUser";
import Charts from "../Component/Charts";
  export function Navigation(props) {
    return (
      
    <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/addUser" element={<AddUser />}></Route>
        <Route path="/editUser/:id" element={<EditUser />}></Route>
        <Route path="/chart" element={<Charts />}></Route>
    </Routes>
    );
  }