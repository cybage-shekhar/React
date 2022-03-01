import React, { useState } from "react";
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
import { postUserAsync } from "../redux/reducers/postUser/postUser.thunks";
import action from "../redux/reducers/postUser/postUser.actions";
import { Link } from "react-router-dom";
const AddUser = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [user, setUser] = useState({ name: "", email: "", address: "" });
  const { successMessage, errorMessage } = useSelector(
    (state) => state.postUser
  );
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatch(action.AddUserClear());
    setUser({ ...user, [name]: value });
  };
  const onClickHandler = (event) => {
    event.preventDefault();
    dispatch(postUserAsync(user));
  };
  const Message = () => {
    if (successMessage) {
      return (
        successMessage && (
          <Alert severity={"success"} sx={{ mt: 1 }}>
            {successMessage}
          </Alert>
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
  return (
    <Box
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
        <Typography variant="h4" align="center">
          Add User
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
              onChange={onChangeHandler}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>
              Add User
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
        {Message()}
      </Container>
    </Box>
  );
};
export default AddUser;
