import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [foods, setFoods] = useState([]);

  useEffect(()=>{
    
    return;
  }, []);
 
  // ${handleLoc()}
 
  useEffect(() => {
    fetch(`http://localhost:8000/foods`)
      .then(res => res.json())
      .then(data => setFoods(data));
    return;
  }, []);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const styleForLink = {
    textDecoration: "none",
    color: "#fff",
  };

  const styleLinkNavMenu = {
    textDecoration: "none",
    color: "#000",
    fontWeight: "bold",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
  };

  const [object, setObject] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleValues = event => {
    setName(event.target.value);
  };
  const handlePhone = event => {
    setPhone(event.target.value);
  };
  
  const handleOpenModal = item => {
    setObject(item);
    handleOpen();
  };

  const createOrder = (order)=>{
      fetch("http://localhost:8000/order", {
        method:"POST",  
        body:JSON.stringify(order),
      })
      .then(res=>res.json())
      .catch(err=>{
        if(err) throw err;
      });

  };

  const handleSubmit = ()=>{
    const clientname= name;
    const clientphone = phone;
    const order = {
      "clientname":clientname,
      "clientphone":clientphone-0,
      "productId":object.id,
      "productName":object.name
    };
    if (clientname.length!==0&&clientphone.length!==0){
      createOrder(order);
      setOpen(false);
    }
    
  };
  
  
  return (
    <>
      <AppBar sx={{ bgcolor: "#000" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <RestaurantMenuIcon />
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
                <Link to={"/"} style={styleLinkNavMenu}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">HOME</Typography>
                  </MenuItem>
                </Link>
                <Link to={"/nationalfoods"} style={styleLinkNavMenu}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">NATIONAL FOODS</Typography>
                  </MenuItem>
                </Link>
                <Link to={"/fastfoods"} style={styleLinkNavMenu}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">FAST FOODS</Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <RestaurantMenuIcon />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to={"/"} style={styleForLink}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">HOME</Typography>
                </MenuItem>
              </Link>
              <Link to={"/nationalfoods"} style={styleForLink}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">NATIONAL FOODS</Typography>
                </MenuItem>
              </Link>
              <Link to={"/fastfoods"} style={styleForLink}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">FAST FOODS</Typography>
                </MenuItem>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "70px",
          }}
        >
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={object.image}
              />
              <Typography
                id="modal-modal-title"
                variant="h4"
                component="h2"
                sx={{ textAlign: "center", marginTop: "10px" }}
              >
                {object.name}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontSize: "22px", marginBottom: "10px" }}
              >
                {object.price} so'm
              </Typography>
              <TextField
                id="outlined-name"
                label="Name"
                value={name}
                onChange={handleValues}
                placeholder="Input your name"
                sx={{ marginBottom: "10px" }}
              />
              <TextField
                id="outlined-name"
                label="Phone"
                value={phone}
                type={"number"}
                onChange={handlePhone}
                placeholder="Input your number"
                sx={{ marginBottom: "10px" }}
              />

              <Button color="warning" variant="contained" onClick={handleSubmit}>
                Buy now
              </Button>
            </Box>
          </Modal>
          {foods &&
            foods.map(item => (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 345,
                  marginY: "10px",
                  marginX: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={item.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </div>
                <CardActions sx={{ alignSelf: "center", marginBottom: "10px" }}>
                  <Button
                    color="warning"
                    variant="contained"
                    size="medium"
                    onClick={() => {
                      handleOpenModal(item);
                    }}
                  >
                    Order Now
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Box>
      </Container>
    </>
  );
};
export default ResponsiveAppBar;
