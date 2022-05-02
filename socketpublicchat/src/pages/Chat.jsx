import React, {useEffect, useRef, useState} from 'react';
import {AppBar, Box, Button, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import {Logout, Send} from "@mui/icons-material";
import {MessageLeft, MessageRight} from "../components/Message";
import io from "socket.io-client";

const Chat = () => {
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");
    const [newm, setNewm] = useState([]);
    const messageBox = useRef();
    useEffect(() => {
        const SERVER_URL = process.env.REACT_APP_API;
        const socket = io(SERVER_URL);
        socket.on("user", data => {
            setUser(data);
        });
        socket.on("new-user-message", data => {
            const {msg, name} = data;
            setNewm(()=>[...newm,{msg,name}]);
        });
        // CLEAN UP THE EFFECT
        return () => socket.disconnect();
        //
    }, [newm]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const SERVER_URL = process.env.REACT_APP_API;
        const socket = io(SERVER_URL);
        socket.emit("new-message", {msg:message, name: localStorage.getItem("username")})
        setMessage("");
    }
    return (
        <Box flexGrow={1} display={"flex"} flexDirection={"column"} height={"100vh"} justifyContent={"space-between"}>
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <Logout/>
                    </IconButton>

                    {
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            {user || "you"} joined
                        </Typography>

                    }
                </Toolbar>
            </AppBar>
            <Box sx={{overflowY: "scroll"}} ref={messageBox}>

                {
                    newm&&newm.map((item,index)=>{
                        console.log(item.name)
                        if(item.name===localStorage.getItem("username")){
                            return <MessageRight
                                message={item.msg}
                                displayName={item.name}
                                avatarDisp={true}
                            />}
                            else{
                                return  <MessageLeft
                                    message={item.msg}
                                    displayName={item.name}
                                    avatarDisp={false}
                                />
                            }
                    })
                }





            </Box>
            <form noValidate onSubmit={handleSubmit} autoComplete={"off"} style={{display: "flex", position: "static"}}>
                <TextField onInput={(e) => {
                    setMessage(e.target.value);
                }} label={"Input your message"} autoComplete={"of"} type={"text"} sx={{flexGrow: 1}} value={message}/>
                <Button variant={"contained"} size={"large"} type={"submit"}><Send/></Button>
            </form>
        </Box>
    );
};

export default Chat;