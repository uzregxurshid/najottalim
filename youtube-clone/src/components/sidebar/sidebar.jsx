import {NavLink, useLocation} from "react-router-dom";
import "./sidebar.scss"
import HomeIcon from "../../assets/images/sidebar/home";
import TrandingIcon from "../../assets/images/sidebar/tranding";
import SubscriptionIcon from "../../assets/images/sidebar/subscription";
import {LibraryIcon} from "../../assets/images/sidebar/library";
import {HistoryIcon} from "../../assets/images/sidebar/history";
import WatchlaterIcon from "../../assets/images/sidebar/watchlater";
import FavouritesIcon from "../../assets/images/sidebar/favourites";
import LikeIcon from "../../assets/images/sidebar/like";
import MusicIcon from "../../assets/images/sidebar/music";
import GamesIcon from "../../assets/images/sidebar/games";
import Picture1 from "../../assets/images/avatar/avatarf.png";
import Picture2 from "../../assets/images/avatar/avatarf.png";
import Picture3 from "../../assets/images/avatar/avatarth.png";
import Picture4 from "../../assets/images/avatar/avatarfour.png";
import Picture5 from "../../assets/images/avatar/avatarfive.png";
import Picture6 from "../../assets/images/avatar/avatarsix.png";
import ShowmoreIcon from "../../assets/images/sidebar/showmore";
import SettingsIcon from "../../assets/images/sidebar/settings";


const Sidebar = () => {


    const location = useLocation();
    console.log(location.pathname);
    if (location.pathname==='/video/2') {
        return  <></>
    }
    else
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <ul className="sidebar__list">
                    <li className="sidebar__items">
                        <ul className="sidebar__sublist">
                            <li className="sidebar__sublist--item  sidebar__sublist--top">
                                <NavLink className={"sidebar__link"} to={"/"}>
                                    <HomeIcon/> <span
                                    className={"sidebar__link--text sidebar__link--text--home"}>Home</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/tranding"}>
                                    <TrandingIcon/> <span className={"sidebar__link--text"}>Tranding</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/subscription"}>
                                    <SubscriptionIcon/> <span className={"sidebar__link--text"}>Subscriptions</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar__items">
                        <ul className="sidebar__sublist sidebar__sublist--middle">
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/library"}>
                                    <LibraryIcon/> <span className={"sidebar__link--text"}>Library</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/history"}>
                                    <HistoryIcon/> <span className={"sidebar__link--text"}>History</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/watchlater"}>
                                    <WatchlaterIcon/> <span className={"sidebar__link--text"}>Watch later</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/favourites"}>
                                    <FavouritesIcon/> <span className={"sidebar__link--text"}>Favourites</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/likedvideos"}>
                                    <LikeIcon/> <span className={"sidebar__link--text"}>Liked videos</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/music"}>
                                    <MusicIcon/> <span className={"sidebar__link--text"}>Music</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/games"}>
                                    <GamesIcon/> <span className={"sidebar__link--text"}>Games</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/showmore"}>
                                    <ShowmoreIcon/> <span className={"sidebar__link--text"}>Show more</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar__items">

                        <ul className="sidebar__sublist  sidebar__sublist--bottom">
                            <li className="sidebar__sublist--item">
                                <span className={"sidebar__subscriptions"}>
                                    Subscriptions
                                </span>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/channel"}>
                                    <img src={Picture1} alt={"avatar"} width={26} height={26}/> <span
                                    className={"sidebar__link--text"}>Gussie Singleton</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/channel"}>
                                    <img src={Picture2} alt={"avatar"} width={26} height={26}/> <span
                                    className={"sidebar__link--text"}>Nora Francis</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/channel"}>
                                    <img src={Picture3} alt={"avatar"} width={26} height={26}/> <span
                                    className={"sidebar__link--text"}>Belle Briggs</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/channel"}>
                                    <img src={Picture4} alt={"avatar"} width={26} height={26}/> <span
                                    className={"sidebar__link--text"}>Eunice Cortez</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/channel"}>
                                    <img src={Picture5} alt={"avatar"} width={26} height={26}/> <span
                                    className={"sidebar__link--text"}>Emma Hanson</span>
                                </NavLink>
                            </li>
                            <li className="sidebar__sublist--item">
                                <NavLink className={"sidebar__link"} to={"/channel"}>
                                    <img src={Picture6} alt={"avatar"} width={26} height={26}/> <span
                                    className={"sidebar__link--text"}>Leah Berry</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__sublist--item sidebar__settings">
                    <NavLink className={"sidebar__link"} to={"/settings"}>
                        <SettingsIcon/> <span className={"sidebar__link--text"}>Settings</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
