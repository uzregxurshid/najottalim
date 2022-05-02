import React from "react";
import Header from "./components/header/header"
import Prog from "./components/program/program"
import Nutr from "./components/nutriton/nutriton";
import Pricing from "./components/pricing/pricing"
import Footer from "./components/footer/footer"
import Cta from "./components/cta/cta";
function Page(){
  return (
    <React.StrictMode>
      <Header/>
      <Prog/>
      <Nutr/>
      <Pricing/>
      <Cta/>
      <Footer/>
    </React.StrictMode>
    
  )
}
export default Page;