import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.scss"
import {Route, Routes} from "react-router-dom";
import Main from "../main/main";
import Channel from "../channel/channel";
import Video from "../video/video";

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="home__block">
                <div className="home__sidebar">
                    <Sidebar param={false}/>
                </div>
                <div className="home__container">

                    <Routes>
                        <Route path={"/"} element={<Main/>}/>
                        <Route path={"/channel"} element={<Channel/>}/>
                        <Route path={'/video/2'} element={<Video/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
export default Home;