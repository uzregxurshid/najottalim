import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
export default function ImgMediaCard(props) {


  return (
      <Card sx={{ maxWidth: 345, margin:1 }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="240"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small" color="error" onClick={props.onDelete}>
          Delete
        </Button>
        <Button variant='contained' size="small" color="warning" onClick={props.onEdit}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
