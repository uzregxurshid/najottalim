import Navbar from "./navbar/nav";
import Intro from "./introduction/introduct"
function Header() {
  return (
   <section className="header">
       <Navbar/>
        <Intro/>
   </section>
  )
}



export default Header;