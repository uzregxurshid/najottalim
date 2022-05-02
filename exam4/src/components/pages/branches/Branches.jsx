import { Box } from "@mui/system";
import Appbar from "../../design/appbar/Appbar";
import Card from "../../design/card/card";
import {  useParams } from "react-router-dom";
import {  ApolloClient,  InMemoryCache,  gql} from "@apollo/client";
import { useState } from "react";

const client = new ApolloClient({
  uri: "https://server1exam.herokuapp.com/",
  cache: new InMemoryCache(),
});

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [name, setName] = useState("");
  const {id} = useParams();
  const schema = gql`
  query{
    restaurant(id:${id}){
      name
      branches{
        id
        location
        image
      }
    }
  }`

  client.query({
    query: schema,
  }).then(result => {
    setBranches(result.data.restaurant.branches);
    setName(result.data.restaurant.name);
  });
  
  return (
    <Box>

      <Appbar name={name} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "30px 30px",
        }}
      >
        {
          branches&&branches.map(branch => (
            <Card
            // href with parameter
              href={`/menu/${branch.id}`}
              key={branch.id}
              image={branch.image}
              name={branch.location}
              description={branch.location}
            />
          ))
        }
      </Box>
    </Box>
  );
};

export default Branches;
