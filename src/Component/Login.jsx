import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { loginCall } from '../Call/AxiosCall';
import Alert from '@mui/material/Alert';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import SignUp from '../Component/Signup';


export default function Login() {
    const [message, setMessage] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
        const navigate = useNavigate();
        const [loginData,setLoginData] = useState({email:"", password: ""});
        const onChangeHandle = (event) => {
            const {name, value} = event.target;
            setLoginData({...loginData,[name]:value});
            setMessage("");
        };
        const handleSubmit = (e) =>{
            e.preventDefault();
            loginCall(loginData)
            .then(result =>{
            if(result.data.length!==0 &&result.status>=200 && result.status<=300)
            {
                localStorage.setItem("userData",JSON.stringify(result.data[0]));
                navigate("/dashboard");
            } 
            else{
                setMessage("Invalid Email or Password");
            }
            })
            .catch((err)=>{
                setMessage(err.message);
            })
               
        };
  return (
      <>
      <SignUp open={open} handelOpen={handleOpen} handleClose={handleClose} />
      <Container component="main" maxWidth="xs" sx={{zIndex:10}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex:10,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
            <AccountCircleIcon sx={{objectFit:"fill"}} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChangeHandle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangeHandle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
            />
            {message && <Alert severity="error" sx={{ mt: 1 }}>{message}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container sx={{mb:1}}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleOpen}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </>
  );
}