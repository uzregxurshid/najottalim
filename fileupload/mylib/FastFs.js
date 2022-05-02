const fs = require("fs");
const path = require("path");
class FastFs {
    constructor(dir) {
        this.dir = dir;
    }

    readFile (){
       try {
           return fs.readFileSync(path.resolve(__dirname,this.dir), {encoding:"utf-8", flag:"r"})
       }
       catch (e) {
           console.log(e);
       }
    }

    writeFile (data){
        try {
            fs.writeFileSync(path.resolve(__dirname,this.dir),JSON.stringify(data, null, 2));
        }
        catch (e) {
            console.log(e);
        }
    }
}
module.exports = FastFs;