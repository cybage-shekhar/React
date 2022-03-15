import React, {useEffect} from 'react';
import { Box, Grid } from '@mui/material';
import MyCard from './MyCard';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { loadBlogsAsync } from "../redux/reducers/blogs/blogs.thunks";
import { Rings } from  'react-loader-spinner';

function Dashboard(props) {
    const dispatch = useDispatch();
	const { isLoading, blogs, errorMessage } = useSelector((state) => state.blogs);
    useEffect(()=>{
       dispatch(loadBlogsAsync()); 
    },[]);
    return (
        <>
        <Box sx={{display:'flex',position:'sticky',zIndex:10, marginLeft:{sm:'240px',xs:'0px'},}}>
        {isLoading ?
        <Grid container justifyContent='center'>
        <Rings height="100"
        width="100"
        color='grey'
        ariaLabel='loading'
        />
        </Grid> : null}
        {errorMessage ? <Grid container justifyContent='center'>
         <Alert severity="error" sx={{ mt: 1 }}>{errorMessage}</Alert>
         </Grid> : null}
        {blogs && <Grid
        container
        sx={{position:'static'}}
        direction="row"
        spacing='8'
        justify="space-between"
        >
            {blogs && blogs.map((data)=> 
             <Grid item
             key={`GridItem-${data.id}`} xs={12} sm={6} md={4} lg={4} xl={4}
       >
            <MyCard blogData={data} />
             </Grid>
            )}
        </Grid>
}
        </Box>
        </>
    );

}
export default Dashboard;