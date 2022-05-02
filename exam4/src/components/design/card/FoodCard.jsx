import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const FoodCarts = props => {
  return (
    

<Card sx={{ maxWidth: 345, margin: 1, cursor: "pointer" }} onClick={props.onClick}>
      <CardMedia
        component="img"
        alt="green iguana"
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
        {/* price */}
        <Typography variant="body2" color="text.secondary">
          {props.price}
        </Typography>
      </CardContent>
    </Card>
  );
};
FoodCarts.defaultProps = {
  image: "https://source.unsplash.com/random",
  name: "Food Name",
  description: "Food Description",
  price: "$10.00",
};

export default FoodCarts;
