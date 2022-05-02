import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { RestaurantMenu, ShoppingCart } from "@mui/icons-material";
import { Button, Divider, Drawer, TextField } from "@mui/material";
import CheckoutCard from "../../design/card/CheckoutCart";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import FoodCard from "../../design/card/FoodCard";
import { useParams } from "react-router-dom";
const client = new ApolloClient({
  uri: "https://server1exam.herokuapp.com/",
  cache: new InMemoryCache(),
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({ right: false });
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [cart, setCart] = React.useState([]);
  const [tempFood, setTempFood] = React.useState([]);
  // get this page parameter
  const thisPage =useParams();
  
  const GQUERY = gql`
    query {
      branch(id: ${thisPage.branchId}) {
        location
        foods {
          id
          name
          description
          image
          price
        }
      }
    }
  `;

  const GMUTATION = gql`
    mutation Mutation(
      $foodId: ID!
      $count: Int!
      $name: String!
      $phone: String!
      $price: Int!
    ) {
      createOrder(
        foodId: $foodId
        count: $count
        name: $name
        phone: $phone
        price: $price
      ) {
        id
        name
        phone
        price
        foodId
        count
      }
    }
  `;

  
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const [foods, setFoods] = React.useState([]);
  
  React.useEffect(() => {
    client
      .query({
        query: GQUERY,
      })
      .then(result => {
        setBranch(result.data.branch.location);
        setFoods(result.data.branch.foods);
        setTempFood(result.data.branch.foods);
      });
  }, [GQUERY]);

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          onClick={toggleDrawer("right", true)}
        >
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  const list = anchor => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      role="presentation"
    >
      {cart.map(item => (
        <CheckoutCard
          key={item.id}
          {...item}
          onClick={() => {
            setCart(cart.filter(i => i.id !== item.id));
          }}
        />
      ))}
      <Divider />
      {/* Total Price */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Total Price: {cart.reduce((acc, item) => acc + item.price, 0)}
        </Typography>
        </Box>
      <TextField id="standard-basic" label="Name" variant="standard" onChange={e => setName(e.target.value)} />
      <TextField id="standard-basic" label="Phone" variant="standard" onChange={e => setPhone(e.target.value)} />
      <Button variant="contained" color="primary" sx={{ margin: "20px 0" }} onClick={handleCheckout}>
        Order Now
      </Button>
    </Box>
  );

  const handleCheckout = () => {
    cart.forEach(item => {
      client
        .mutate({
          mutation: GMUTATION,
          variables: {
            foodId: item.id,
            count: item.count||1,
            name: name,
            phone: phone,
            price: item.price,
          },
        })
        .then(result => {
          console.log(result);
        });
    });
    setCart([]);
  };


  const handleSearch = (e) => {
    const search = e.target.value;
    const newFoods = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
    setFoods(newFoods);
    if (search === "") {
      setFoods(tempFood);
    }
   
  };

  return (
    <Box>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <RestaurantMenu /> {branch} menu
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearch}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={toggleDrawer("right", true)}
              >
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "30px 30px",
        }}
      >
        {foods.map(food => (
          <FoodCard
            key={food.id}
            {...food}
            onClick={() => {
              if (!cart.find(i => i.id === food.id)) {
                setCart([...cart, food]);
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
