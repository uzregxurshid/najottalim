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
import {
  Fab,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Modal,
  Select,
} from "@mui/material";
import { Add } from "@mui/icons-material";
const pages = ["orders", "restaurants", "branches", "foods"];

const client = new ApolloClient({
  uri: "https://server1exam.herokuapp.com/",
  cache: new InMemoryCache(),
});

const branchQuery = gql`
  query Query {
    branches {
      id
      image
      location
      restaurantId
    }
  }
`;

const restaurantQuery = gql`
  query Query {
    restaurants {
      id
      name
    }
  }
`;

const createBranch = gql`
  mutation Mutation($location: String!, $image: String!, $restaurantId: ID!) {
    createBranch(
      location: $location
      image: $image
      restaurantId: $restaurantId
    ) {
      id
      image
      location
    }
  }
`;

const deleteBranch = gql`
  mutation Mutation($deleteBranchId: ID!) {
    deleteBranch(id: $deleteBranchId)
  }
`;

const editBranch = gql`
  mutation EditBranch(
    $editBranchId: ID!
    $location: String!
    $image: String!
    $restaurantId: ID!
  ) {
    editBranch(
      id: $editBranchId
      location: $location
      image: $image
      restaurantId: $restaurantId
    )
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
  const [branches, setBranches] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [hide, setHide] = React.useState(false);
  const [res, setRes] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [image, setImage] = React.useState("");
  const [id, setId] = React.useState("");
  const [restaurants, setRestaurants] = React.useState([]);

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
        query: branchQuery,
      })
      .then(result => {
        setBranches(result.data.branches);
      });

    client
      .query({
        query: restaurantQuery,
      })
      .then(result => {
        setRestaurants(result.data.restaurants);
      });
    return;
  }, []);

  React.useEffect(() => {}, [location, res, image]);

  const handleAddBranch = () => {
    client
      .mutate({
        mutation: createBranch,
        variables: {
          location: location,
          image: image,
          restaurantId: res,
        },
      })
      .then(result => {
        setHide(true);
        console.log(result);
        setBranches([...branches, result.data.createBranch]);
        setOpen(false);
      });
  };

  const handleDeleteBranch = id => {
    client.mutate({
      mutation: deleteBranch,
      variables: {
        deleteBranchId: id,
      },
    });
    setBranches(branches.filter(branch => branch.id !== id));
  };

  const handleEditBranch = branch => {
    client
      .mutate({
        mutation: editBranch,
        variables: {
          editBranchId: id,
          location: location,
          image: image,
          restaurantId: res,
        },
      });
    setBranches(
      branches.map(branch =>
        branch.id === id ? { ...branch, location: location, image: image, restaurantId: res } : branch
      )
    );
    
    setOpen(false);
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
        Branches
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
          Add Branches
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Restaurant</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={res}
              label="Restaurant"
              onChange={e => setRes(e.target.value)}
            >
              {restaurants.map(restaurant => (
                <MenuItem key={restaurant.id} value={restaurant.id}>
                  {restaurant.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
            <Input
              id="location"
              value={location}
              aria-describedby="restaurant-description-text"
              inputProps={{
                "aria-label": "description",
              }}
              onInput={e => setLocation(e.target.value)}
            />

            <FormHelperText id="restaurant-description-text">
              Branch Location
            </FormHelperText>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
            <Input
              id="image"
              value={image}
              aria-describedby="restaurant-image-text"
              inputProps={{
                "aria-label": "image",
              }}
              onChange={e => {
                setImage(e.target.value);
              }}
            />
            <FormHelperText id="restaurant-image-text">
              Branch Image
            </FormHelperText>
          </FormControl>
          {!hide && (
            <Button
              variant="contained"
              color="primary"
              sx={{ m: 1, mt: 3, width: "25ch" }}
              onClick={handleEditBranch}
            >
              Submit
            </Button>
          )}
          {hide && (
            <Button
              variant="contained"
              color="success"
              sx={{ m: 1, mt: 3, width: "25ch" }}
              onClick={handleAddBranch}
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
        {branches&&branches.map(branch => (
            <AdminCard
              key={branch.id}
              image={branch.image}
              name={branch.location}
              description={branch.location}
              onDelete={() => handleDeleteBranch(branch.id)}
              onEdit={() => {
                setOpen(true);
                setHide(false);
                setRes(branch.restaurantId);
                setLocation(branch.location);
                setImage(branch.image);
                setId(branch.id);
              }}
            />
          ))}
      </Box>
    </Box>
  );
};
export default ResponsiveAppBar;
