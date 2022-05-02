const express = require("express");
const app = express();
const router = require("./routes/routes");


app.use(router);
app.set("view engine", "ejs");
app.use("/assets", express.static("public"));

const server = ()=>{
    try {
        app.listen(process.env.PORT, ()=>{
            console.log("Server running at the port 9000!");
        });
    }
    catch (e) {
        console.log(e);
    }
};

server();