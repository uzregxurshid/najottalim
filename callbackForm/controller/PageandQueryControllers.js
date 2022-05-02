const fetch = require("isomorphic-fetch");
const createQuery = require("../model/querymodel");
const customFS = require("../libs/customFS");
const MyNodeMailer = require("../libs/nodemailer");
require("dotenv").config();
class PageQuery {

 async indexController(_, res) {
    try {
      res.redirect("/callback");
    } catch (error) {
      console.log(error);
    }
  }

  async callBackController(_,res){
    try {
      res.render("callback", {error:false});
    } catch (error) {
      console.log(error);
    }
  }

  async submitController(req,res){
   try {
    const mykey = "6LdTlkQeAAAAAPkMYuNVSLR21GbclIS_ICFF3x0h";
    const {q20_fullName20:name, q38_email:email, q36_typeA:text, 'g-recaptcha-response':recaptcha} = req.body;
    if (!recaptcha){
      return res.render("callback", {error:true});
    }
    const url =
    `https://www.google.com/recaptcha/api/siteverify?secret=${mykey}&response=${recaptcha}`;
    fetch(url,{method:"post"})
    .then(res=>res.json())
    .then(data=>{
      if (data.success===true){
        const newQuery = createQuery(name,email,text);
        const file =new customFS("../data/query.json");
        const queries = JSON.parse(file.ReadFile());
        queries.push(newQuery);
        file.writeFile(queries);
        MyNodeMailer(newQuery).catch(console.error);

        return res.redirect("/thankyou");
      }
      else{
        return res.render("callback", {error:true});
      }
    })
    .catch(err=>console.log(err));
   } catch (error) {
     console.log(error);
   }
  }

 async thankyouController(_,res){
   try {
    res.render("thankyou");
   } catch (error) {
    res.render("thankyou");
   }
  }


}

module.exports = new PageQuery();
