import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {
  Fab,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Add } from "@mui/icons-material";

const pages = ["orders", "restaurants", "branches", "foods"];

const client = new ApolloClient({
  uri: "https://server1exam.herokuapp.com/",
  cache: new InMemoryCache(),
});

const Foods = gql`
  query Query {
    foods {
      id
      name
      description
      image
      price
      branchId
    }
  }
`;

const Branches = gql`
  query Branches {
    branches {
      id
      location
    }
  }
`;

const DeleteFood = gql`
  mutation Mutation($deleteFoodId: ID!) {
    deleteFood(id: $deleteFoodId)
  }
`;



const EditFood = gql`
  mutation EditFood(
    $editFoodId: ID!
    $name: String!
    $description: String!
    $image: String!
    $price: Int!
    $branchId: ID!
  ) {
    editFood(
      id: $editFoodId
      name: $name
      description: $description
      image: $image
      price: $price
      branchId: $branchId
    )
  }
`;

const createFood = gql`
mutation CreateFood(
  $name: String!
  $description: String!
  $image: String!
  $price: Int!
  $branchId: ID!
) {
  createFood(
    name: $name
    description: $description
    image: $image
    price: $price
    branchId: $branchId
  ) {
    id
    name
    description
    image
    price
    branchId
  }
}
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 4,
  outline: "none",
};

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [foods, setFoods] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [branches, setBranches] = React.useState([]);
  const [hide, setHide] = React.useState(false);
  const [food, setFood] = React.useState({
    name: "",
    branchId: "",
    description: "",
    image: "",
    price: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = e => {
    window.location.href = `/admin/${e.currentTarget.textContent.toLowerCase()}`;
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    client
      .query({
        query: Foods,
      })
      .then(({ data }) => {
        setFoods(data.foods);
      });
    client.query({ query: Branches }).then(({ data }) => {
      console.log(data);
      setBranches(data.branches);
    });
  }, []);

  const handleDelete = id => {
    client.mutate({
      mutation: DeleteFood,
      variables: {
        deleteFoodId: id,
      },
    });
    setFoods(foods.filter(food => food.id !== id));
  };

  React.useEffect(() => {}, [food]);

  const handleEdit = () => {
    setHide(false);
    client
      .mutate({
        mutation: EditFood,
        variables: {
          editFoodId: food.id - 0,
          name: food.name,
          description: food.description,
          image: food.image,
          price: food.price - 0,
          branchId: food.branchId - 0,
        },
      })
      .then(({ data }) => {
        console.log(data);
      });
    setFoods(foods.map(item => (item.id === food.id ? food : item)));
    setOpen(false);
  };

  const handleAdd =  ()=>{
      client.mutate({
          mutation: createFood,
          variables: {
              name: food.name,
              description: food.description,
              image: food.image,
              price: food.price - 0,
              branchId: food.branchId - 0,
          },
      }).then(({data})=>{
          setFoods([...foods, data.createFood]);
          setOpen(false);
        }
      )
      
  };

  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Admin Page
            </Typography>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={food.branchId}
                    label="Branch"
                    onChange={e => {
                      setFood({ ...food, branchId: e.target.value });
                    }}
                  >
                    {branches.map(branch => (
                      <MenuItem key={branch.id} value={branch.id}>
                        {branch.location}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, mt: 3, width: "25ch" }}
                  fullWidth
                >
                  <Input
                    id="food-name"
                    label="Food Name"
                    value={food.name}
                    placeholder="Food Name"
                    inputProps={{ "aria-label": "naked" }}
                    onChange={e => {
                      setFood({ ...food, name: e.target.value });
                    }}
                  />
                  <FormHelperText id="food-name-text">Food Name</FormHelperText>
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, mt: 3, width: "25ch" }}
                  fullWidth
                >
                  <Input
                    id="food-description"
                    label="Food Description"
                    placeholder="Food Description"
                    inputProps={{ "aria-label": "naked" }}
                    value={food.description}
                    onChange={e => {
                      setFood({ ...food, description: e.target.value });
                    }}
                  />
                  <FormHelperText id="food-description-text">
                    Food Description
                  </FormHelperText>
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, mt: 3, width: "25ch" }}
                  fullWidth
                >
                  <Input
                    id="food-price"
                    label="Food Price"
                    placeholder="Food Price"
                    inputProps={{ "aria-label": "naked" }}
                    value={food.price}
                    onChange={e => {
                      setFood({ ...food, price: e.target.value });
                    }}
                  />
                  <FormHelperText id="food-price-text">
                    Food Price
                  </FormHelperText>
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, mt: 3, width: "25ch" }}
                  fullWidth
                >
                  <Input
                    id="food-image"
                    label="Food Image"
                    placeholder="Food Image"
                    inputProps={{ "aria-label": "naked" }}
                    value={food.image}
                    onChange={e => {
                      setFood({ ...food, image: e.target.value });
                    }}
                  />
                  <FormHelperText id="food-image-text">
                    Food Image
                  </FormHelperText>
                </FormControl>
                {hide && (
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ m: 1, mt: 3 }}
                    onClick={handleAdd}
                  >
                    Add Food
                  </Button>
                )}
                {!hide && (
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ m: 1, mt: 3 }}
                    onClick={handleEdit}
                  >
                    Edit Food
                  </Button>
                )}
              </Box>
            </Modal>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Admin Page
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(page => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Admin" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              ></Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box display={"flex"} alignItems="center" justifyContent={"center"}>
        <Fab color="success" aria-label="add" variant="extended" sx={{margin:"10px"}} onClick={()=>{
          setHide(true);
          setOpen(true);
          setFood({
            branchId: "",
            name: "",
            description: "",
            price: "",
            image: ""
          })
        }}>
          <Add /> Add Food
        </Fab>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">BranchId</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foods.map(food => (
              <TableRow key={food.id}>
                <TableCell component="th" scope="row">
                  {food.name}
                </TableCell>
                <TableCell align="center">{food.description}</TableCell>
                <TableCell align="center">{food.image}</TableCell>
                <TableCell align="center">{food.price}</TableCell>
                <TableCell align="center">{food.branchId}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    color="warning"
                    sx={{ marginRight: "2px" }}
                    onClick={() => {
                      setFood(food);
                      handleOpen();
                      setHide(false);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => {
                      handleDelete(food.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default ResponsiveAppBar;
