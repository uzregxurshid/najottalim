import React, {useState} from 'react';
import {Box, Button, FormControl,  TextField, Typography} from "@mui/material";
import Cover from "../components/image/wallpaper.jpg"
import io from "socket.io-client"
import {Navigate} from "react-router-dom";
const Login = () => {
    const [user,setUser] = useState("");
    const [nav,setNav] = useState(false)
    const formStyle = {
        background: "rgba(255,255,255,0.8)",
        color:"#fff",
        boxShadow:"10px 10px 10px 10px #FFFFFF20",
        width: "400px",
        height: "600px",
        borderRadius: "20px",
        padding: "10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
    const handleUser = e =>{
        setUser(e.target.value)
    }
    const SERVER_URL = process.env.REACT_APP_API;
    console.log(SERVER_URL);
    const handleForm = e=>{
        e.preventDefault()
        const socket = io(SERVER_URL);
        localStorage.setItem("username", user);
        socket.emit("username", {username:user});
        setNav(true)
    }


    return (
        <>
            {
                nav&&<Navigate to={"/chat"}/>
            }
        <Box width={"100vw"} height={"100vh"}

             sx={{display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: `url(${Cover})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <form style={formStyle} onSubmit={handleForm} >
                <FormControl >
                    <Typography color={"primary"} variant={"h4"} textAlign={"center"} sx={{marginBottom:"10px"}}>
                        Type your username
                    </Typography>
                    <TextField
                        autoFocus={true}
                        id="username-field"
                        label="Username"
                        defaultValue=""
                        helperText="Input your username"
                        variant="standard"
                        color={"primary"}
                        type={"text"}
                        sx={{width:"350px",marginBottom:"20px"}}
                        autoComplete={"current-username"}
                        onInput ={handleUser}
                    />
                    <Button variant="contained" type={"submit"}>
                        Enter to chat
                    </Button>
                </FormControl>
            </form>
        </Box>
            </>
    );
};

export default Login;