import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "../Theme/Css";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync } from "../redux/reducers/getUser/getUser.thunks";
import { editUserAsync } from "../redux/reducers/editUser/editUser.thunks";
import action from "../redux/reducers/editUser/editUser.actions";
import { Link, useParams } from "react-router-dom";
import { Rings } from  'react-loader-spinner';
const EditUser = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [editUser, setEditUser] = useState({ name: "", email: "", address: "" });
  const { isLoading, user, errorMessage } = useSelector(
    (state) => state.getUser
  );
  const [dummy,setDummy] = useState({});
  const { id } = useParams();
  const {editSuccessMessage, editErrorMessage} = useSelector((state) => state.editUser);
  useEffect(()=>{
    dispatch(getUserAsync(id));
  },[]);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatch(action.EditDataClear());
    setEditUser({ ...editUser, [name]: value });
  };
  const filteredData = (data) => {
    let obj = {};
    for(let val in data)
    {
      if(data[val] !== "")
      {
        obj[val] = data[val];
      }
    }
    return obj;
  }
  const {name, email, address} = user || {};
  const onClickHandler = (event) => {
    event.preventDefault();
    const obj = filteredData(editUser);
    dispatch(editUserAsync(id,obj));
    setTimeout(dispatch(action.EditDataClear()),2000);
  };
  // console.log(user)
  const Message = () => {
    if (isLoading) {
      return (
        isLoading && (
          <Grid container justifyContent='center'>
        <Rings height="100"
        width="100"
        color='grey'
        ariaLabel='loading'
        />
        </Grid>
        )
      );
    } else {
      return (
        errorMessage && (
          <Alert severity={"error"} sx={{ mt: 1 }}>
            {errorMessage}
          </Alert>
        )
      );
    }
  };
  const EditMessage = () => {
    if (editSuccessMessage) {
      return (
        editSuccessMessage && (
          <Alert severity={"success"} sx={{ mt: 1 }}>
            {editSuccessMessage}
          </Alert>
        )
      );
    } else {
      return (
        editErrorMessage && (
          <Alert severity={"error"} sx={{ mt: 1 }}>
            {editErrorMessage}
          </Alert>
        )
      );
    }
  };
  return (
    !isLoading && <Box
      sx={{
        display: "flex",
        position: "sticky",
        zIndex: 10,
        marginLeft: { sm: "240px", xs: "0px" },
        minHeight: "100vh",
      }}
    >
      <Container
        component="main"
        maxWidth="sm"
        sx={{ zIndex: 10, marginTop: "10px" }}
      >
        {Message()}
        <Typography variant="h4" align="center">
          Edit User
        </Typography>
        <Grid
          container
          spacing={2}
          component="form"
          onSubmit={onClickHandler}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <TextField
              type="text"
              label="Name"
              name="name"
              defaultValue={name}
              onChange={onChangeHandler}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Email"
              name="email"
              defaultValue={email}
              onChange={onChangeHandler}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              label="Address"
              name="address"
              defaultValue={address}
              onChange={onChangeHandler}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>
              Edit User
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link to="/user" className={classes.LinkStyle}>
              <Button
                variant="contained"
                fullWidth
                sx={{ marginBottom: "10px" }}
              >
                User List
              </Button>
            </Link>
          </Grid>
        </Grid>
        {EditMessage()}
      </Container>
    </Box>
  );
};
export default EditUser;
