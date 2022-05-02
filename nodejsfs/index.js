const http = require('http');
const fs = require('fs');
const path = require('path');
const date = new Date();
const root = path.dirname(__filename);
const dataFolder = root+"\\data";

const makeFolder = async (joy) =>{
  if (!fs.existsSync(joy)){
    fs.mkdir(joy, err=>{
    })
  }
}
makeFolder(dataFolder);

const  CreateFile = async (folder,data)=>{
  const filename = folder + `/${data.name}.js`;
  fs.open(filename, "w",(err)=>{
      if (err){
        console.log(err);
      }
      else{
        fs.writeFile(filename,JSON.stringify(data.content),(err)=>{
          if (err) throw err;
          console.log("File created");
        })
      }
  } )
}

const createFolder = async (data) =>{
  const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
  const weekdays = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];
  let folder = dataFolder+"\\"+year;
  await makeFolder(folder);
  folder = folder + `\\${month}`
  await makeFolder(folder);
  folder = folder + `\\${day}`
  await makeFolder(folder);
  folder = folder + `\\${weekday}`
  await makeFolder(folder);
  await CreateFile(folder,data);
  
}


const server  = http.createServer((req,res)=>{
  const method = req.method;
  if (method=="GET"){
    req.on("data", (chunk)=>{
      const data  =  JSON.parse(chunk);
      createFolder(data);
    })
  }
  res.end("OK")
})

server.listen(3000, ()=>{
  console.log("Server running at the port 3000! ");
})