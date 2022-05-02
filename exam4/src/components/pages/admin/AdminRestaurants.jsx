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
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import AdminCard from "../../design/card/AdminCard";
import { Fab, FormControl, FormHelperText, Input, Modal } from "@mui/material";
import { Add } from "@mui/icons-material";
const pages = ["orders", "restaurants", "branches", "foods"];

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

const editrestaurantquery = gql`
  query Restaurant($restaurantId: ID!) {
    restaurant(id: $restaurantId) {
      id
      name
      image
      description
    }
  }
`;

const mutation = gql`
  mutation Mutation(
    $editRestaurantId: ID!
    $name: String!
    $description: String!
    $image: String!
  ) {
    editRestaurant(
      id: $editRestaurantId
      name: $name
      description: $description
      image: $image
    ) {
      id
      name
      description
      image
    }
  }
`;

const createMutation = gql`
  mutation Mutation($name: String!, $description: String!, $image: String!) {
    createRestaurant(name: $name, description: $description, image: $image) {
      id
      image
      name
      description
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
  outline: "none",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [restaurant, setRestaurant] = React.useState({
    name: "",
    description: "",
    image: "",
  });
  const [hide, setHide] = React.useState(false);
  const handleOpen = id => {
    client
      .query({
        query: editrestaurantquery,
        variables: { restaurantId: id },
      })
      .then(res => {
        setRestaurant(res.data.restaurant);
      });
    setOpen(true);
  };
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

  const deleteMutation = gql`
    mutation deleteRestaurant($id: ID!) {
      deleteRestaurant(id: $id) {
        id
        name
        description
        image
      }
    }
  `;

  React.useEffect(() => {
    client
      .query({
        query: restaurantquery,
      })
      .then(result => {
        setRestaurants(result.data.restaurants);
      });
      return () => {
        // cleanup
      }
      
  }, []);

  const handleDelete = e => {
    client
      .mutate({
        mutation: deleteMutation,
        variables: {
          id: e,
        },
      })
      .then(() => {});
    setRestaurants(restaurants.filter(restaurant => restaurant.id !== e));
  };

  const handleSubmit = e => {
    client
      .mutate({
        mutation: mutation,
        variables: {
          editRestaurantId: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          image: restaurant.image,
        },
      })
      .then(() => {
        setOpen(false);
      });
    setRestaurants(
      restaurants.map(res => (res.id === restaurant.id ? restaurant : res))
    );
  };

  const handleAdd = () => {
    setHide(false);
    
    client
      .mutate({
        mutation: createMutation,
        variables: {
          name: restaurant.name,
          description: restaurant.description,
          image: restaurant.image,
        },
      })
      .then(res => {
        setRestaurants([...restaurants, res.data.createRestaurant]);
        setOpen(false);
      });
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
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        marginTop={"20px"}
      >
        Restaurants
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <Fab
          color="success"
          variant="extended"
          sx={{ margin: "0 auto" }}
          onClick={() => {
            setOpen(true);
            setHide(true);
          }}
        >
          <Add sx={{ mr: 1 }} />
          Add Restaurant
        </Fab>
      </Box>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
            <Input
              id="name"
              value={restaurant.name}
              aria-describedby="restaurant-name-text"
              inputProps={{
                "aria-label": "name",
              }}
              onChange={e =>
                setRestaurant({ ...restaurant, name: e.target.value })
              }
            />
            <FormHelperText id="restaurant-name-text">
              Restaurant Name
            </FormHelperText>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
            <Input
              id="description"
              value={restaurant.description}
              aria-describedby="restaurant-description-text"
              inputProps={{
                "aria-label": "description",
              }}
              onChange={e =>
                setRestaurant({ ...restaurant, description: e.target.value })
              }
            />
            <FormHelperText id="restaurant-description-text">
              Restaurant Description
            </FormHelperText>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
            <Input
              id="image"
              value={restaurant.image}
              aria-describedby="restaurant-image-text"
              inputProps={{
                "aria-label": "image",
              }}
              onChange={e =>
                setRestaurant({ ...restaurant, image: e.target.value })
              }
            />
            <FormHelperText id="restaurant-image-text">
              Restaurant Image
            </FormHelperText>
          </FormControl>
          {!hide && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleSubmit(restaurant.id);
              }}
              sx={{ m: 1, mt: 3, width: "25ch" }}
            >
              Submit
            </Button>
          )}
          {hide && (
            <Button
              variant="contained"
              color="success"
              onClick={handleAdd}
              sx={{ m: 1, mt: 3, width: "25ch" }}
            >
              Add
            </Button>
          )}
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "30px 30px",
        }}
      >
        {restaurants.map(restaurant => (
          <AdminCard
            key={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
            description={restaurant.description}
            onDelete={() => {
              handleDelete(restaurant.id);
            }}
            onEdit={() => {
              setHide(false);
              handleOpen(restaurant.id);
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
export default ResponsiveAppBar;
