const express = require("express");
const socketIO = require("socket.io");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT;
const server =app.listen(port, () => console.log(`Server running at the port ${port}`));


const io = socketIO(server,{
  cors: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization, X-Requested-With, X-CSRF-Token",
    credentials: true,
    maxAge: "3600"
  }
});

io.on("connection", (socket)=>{
  console.log("Connected");
  socket.on("username", data=>{
    const {username} = data;
    socket.broadcast.emit("user", username);
  });

  socket.on("new-message", data=>{
    socket.broadcast.emit("new-user-message", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
