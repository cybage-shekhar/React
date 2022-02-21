import React, {useEffect, useState} from 'react';
import { Box, Grid } from '@mui/material';
import { DashboardData } from '../Call/AxiosCall';
import MyCard from './Card';
import Alert from '@mui/material/Alert';

function Dashboard(props) {
    const [blog,setBlog] =useState([]);
    const [message, setMessage] = useState("");
    const getData = () => {
            DashboardData()
            .then(result =>{
            if(result.data.length!==0 &&result.status>=200 && result.status<=300)
            {
                setBlog([...result.data]);
            } 
            else{
                setMessage("No Data Available");
            }
            })
            .catch((err)=>{
                setMessage(err.message);
            })
    }
    useEffect(()=>{
        getData();
    },[]);
    return (
        <>
        {message && <Grid container justifyContent='center'>
         <Alert severity="error" sx={{ mt: 1 }}>{message}</Alert>
         </Grid>}
        <Box sx={{display:'flex',position:'sticky',zIndex:10, marginLeft:{sm:'240px',xs:'0px'},}}>
            
        <Grid
        container
        sx={{position:'static'}}
        direction="row"
        spacing='8'
        justify="space-between"
        >
            {blog.map((data)=> 
             <Grid item
             key={`GridItem-${data.id}`} xs={12} sm={6} md={4} lg={4} xl={4}
       >
            <MyCard blogData={data} />
             </Grid>
            )}
        </Grid>
        </Box>
        </>
    );

}
export default Dashboard;