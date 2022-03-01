import { Box, Grid } from "@mui/material";
import BarChart from "./BarChart";
import DougnutChart from "./DougnutChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Charts = () => {
return(
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        zIndex: 10,
        marginLeft: { sm: "240px", xs: "0px" },
        minHeight: "100vh",
      }}
    >
     <Grid
        container
        sx={{position:'static'}}
        direction="row"
        spacing='8'
        justify="space-between"
        >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
       <LineChart />
       </Grid>
       <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
       <DougnutChart />
       </Grid>
       <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
       <PieChart />
       </Grid>
       <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
       <BarChart />
       </Grid>
       </Grid>
    </Box> 
);

}

export default Charts;