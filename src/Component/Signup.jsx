import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { addUserAsync } from '../redux/reducers/addUser/addUser.thunks';
import { useStyles } from '../Theme/Css';
import action from '../redux/reducers/addUser/addUser.actions';


export default function SignUp({open,handleOpen,handleClose}) {
    const classes = useStyles(); 
    const dispatch = useDispatch();
    const [data, setData] = useState({name:"",email:"",password:""});
    const { successMessage, errorMessage } = useSelector((state) => state.addUser);
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addUserAsync(data))
        if(successMessage)  
          handleClose();
          
    };
  const onChangeHandle= (event) =>{
    const {name,value} = event.target;
    setData({...data,[name]:value});
    dispatch(action.UserDataClear()); 
  }
  const {name,email,password} = data;

  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
      classes: {
        root: classes.backDrop
    }
    }}
  >
    <Fade in={open}>
      <Container component="main" maxWidth="xs" sx={{backgroundColor:'white'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  value={name}
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={onChangeHandle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChangeHandle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChangeHandle}
                />
              </Grid>
            </Grid>
            {errorMessage || successMessage && <Alert severity={successMessage ? "success" : "error"} sx={{ mt: 1 }}>{errorMessage || successMessage}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Fade>
      </Modal>
  );
}