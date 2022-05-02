import React from 'react';
import Login from "./pages/Login";
import {Routes, Route} from "react-router-dom";
import Chat from "./pages/Chat";
import {Box} from "@mui/material";
import "./App.css"
const App = () => {
    return (
        <Box>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/chat"} element={<Chat/>}/>
            </Routes>
        </Box>
    );
};

export default App;