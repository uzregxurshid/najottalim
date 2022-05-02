const fs  = require("fs");
const path = require("path");
class myFs{
  constructor(dir){
    this.dir=dir;
  }

  ReadFile(){
   return fs.readFileSync(path.resolve(__dirname, this.dir), {encoding:"utf-8", flag:"r"});
  }

  writeFile(data){
    fs.writeFileSync(path.resolve(__dirname, this.dir), JSON.stringify(data), {encoding:"utf-8", flag:"w"});
  }

}

module.exports = myFs;