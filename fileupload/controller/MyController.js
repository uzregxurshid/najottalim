const {validationResult} = require("express-validator");
const fastFs = require("../mylib/FastFs");

class MyController {
    async index(req, res) {
        try {
            res.render("index", {logs: null, registered: "shart emas"});
        } catch (error) {
            console.log(error);

        }
    }

    async loginPage(_,res){
        return res.render("login")
    }

    async loginController(req, res) {
        try {
            const {username, password}  =req.body;
            if (username&&password){
                const user = JSON.parse(new fastFs("../data/users.json").readFile()).find(item=>item.username==username&&item.password===password);
                return res.status(200).json(user)
            }
            res.send("OK")
        } catch (error) {
            console.log(error);
        }
    }

    async registerController(req, res) {
        try {
            if (validationResult(req).isEmpty()) {
                const {username, password, date} = req.body;
                const data = new fastFs("../data/users.json");
                const allUser = JSON.parse(data.readFile());
                const findUser = allUser.find(item => item.username === username)
                if (!findUser) {
                    const userFiles= [];
                    req.files.forEach(item=>{
                        userFiles.push(item.filename);
                    })
                    allUser.push(
                        {
                            id: require("crypto").randomBytes(2).toString("hex"),
                            username: username,
                            password: password,
                            date: date,
                            uploadsLink:[userFiles]
                        }
                    );
                    data.writeFile(allUser)
                    return res.render("login");
                }
                return res.render("index", {
                    logs: null,
                    registered: "already"
                })
            }
            const logs = validationResult(req).array().map(item => {
                const param = item.param;
                const msg = item.msg;
                return {param, msg};
            })
            res.render("index", {
                logs: logs,
                registered: "shart emas"
            });
        } catch (error) {
            console.log(error);
        }
    }


     getFast(username) {
        return JSON.parse(new fastFs("../data/users.json").readFile()).some(item=>item.username===username)?"./uploads/bans":"./uploads/images";
    }


}

module.exports = new MyController();
