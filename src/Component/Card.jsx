import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MyCard({blogData}) {
  return (
    <Card sx={{ width: "100%",margin:'8px', height:'100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={blogData.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blogData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {blogData.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}