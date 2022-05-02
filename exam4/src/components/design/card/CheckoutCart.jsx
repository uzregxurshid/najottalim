import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

const  CheckoutCard= (props)=> {
  return (
    <Card sx={{ maxWidth: 300, display: 'flex', margin:"10px", height:"151px" }}>
      <CardMedia
        component="img"
        alt="Food"
        sx={{ width: '150px' }}
        height="151"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {props.name}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {props.price}
        </Typography>
        <CardActions sx={{marginLeft:"-5px"}}>
        <Button variant='contained' size="small" color="error" onClick={props.onClick}>Remove</Button>
      </CardActions>
      </CardContent>
     
    </Card>
  );
}

CheckoutCard.defaultProps = {
 image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-03.jpg',
  name: 'Pizza',
  price: '$10'};
  
  
export default CheckoutCard;