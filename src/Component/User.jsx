import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Button, Alert } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadListUsersAsync } from "../redux/reducers/listUsers/listUsers.thunks";
import action from "../redux/reducers/deleteUser/deleteUser.actions";
import { deleteUserAsync } from "../redux/reducers/deleteUser/deleteUser.thunks";
import { Rings } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useStyles } from "../Theme/Css";
const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, listUsers, errorMessage } = useSelector(
    (state) => state.listUsers
  );
  const { deleteSuccessMessage, deleteErrorMessage } = useSelector(
    (state) => state.deleteUser
  );
  const classes = useStyles();
  useEffect(() => {
    dispatch(loadListUsersAsync());
    dispatch(action.DeleteUserClear());
  }, [deleteSuccessMessage]);
  const deleteHandler = (id) => {
    dispatch(deleteUserAsync(id));
  };
  const editHandler = (id) => {
    navigate(`/user/edit/${id}`)
  };
  const Message = () => {
    if (deleteSuccessMessage) {
      return (
        deleteSuccessMessage && (
          <Alert severity={"success"} sx={{ mt: 1 }}>
            {deleteSuccessMessage}
          </Alert>
        )
      );
    } else {
      return (
        deleteErrorMessage && (
          <Alert severity={"error"} sx={{ mt: 1 }}>
            {deleteErrorMessage}
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
        <Link to="/user/add" className={classes.LinkStyle}>
          <Button variant="contained" fullWidth sx={{ marginBottom: "10px" }}>
            Add User
          </Button>
        </Link>
        <Typography variant="h4" align="center" bgcolor="cyan">
          User List
        </Typography>
        {Message()}
        {isLoading ? (
          <Grid container justifyContent="center">
            <Rings height="100" width="100" color="grey" ariaLabel="loading" />
          </Grid>
        ) : null}
        {errorMessage ? (
          <Grid container justifyContent="center">
            <Alert severity="error" sx={{ mt: 1 }}>
              {errorMessage}
            </Alert>
          </Grid>
        ) : null}
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listUsers?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => editHandler(row.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "red" }}
                      onClick={() => deleteHandler(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
export default User;
