import { Box } from "@mui/system";
import Card from "../../design/card/card";
import Appbar from "../../design/appbar/Appbar";
import {  ApolloClient,  InMemoryCache,  gql} from "@apollo/client";
import { useState } from "react";

const client = new ApolloClient({
  uri: "https://server1exam.herokuapp.com/",
  cache: new InMemoryCache(),
});

const restaurantquery = gql`
query {
  restaurants {
    id
    name
    description
    image
  }
}
`;



const Restaurant = () => {
 
const [restaurant, setRestaurant] = useState([]);
 
client.query({
  query: restaurantquery,
}).then(result => { 
  setRestaurant(result.data.restaurants);
});


  return (
    <>
      <Appbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "30px 30px",
        }}
      >
        {
          restaurant&&restaurant.map(restaurant => (
            <Card
            // href with parameter
              href={`/branches/${restaurant.id}`}
              key={restaurant.id}
              image={restaurant.image}
              name={restaurant.name}
              description={restaurant.description}
            />
          ))
        }
       
      </Box>
    </>
  );
};

export default Restaurant;
