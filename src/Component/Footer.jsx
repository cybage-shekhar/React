import { Toolbar, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';

const Footer = () => {
    return(
        <footer>
        <AppBar
        position="sticky"
        sx={{
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: `240px` },
        }}
      >
          <Toolbar sx={{justifyContent:'center'}}>
          <Typography variant="h6" noWrap component="div">
          © 2022 Copyright News
          </Typography>
          </Toolbar>
          </AppBar>
          </footer>
    );
};  

export default Footer;