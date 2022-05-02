import {Col, Image} from "react-bootstrap";
import Twitter from "../../img/twitter.png";
import Home from "../../img/home.svg";
import Explore from "../../img/explore.svg";
import Notifications from "../../img/notification.svg";
import Messages from "../../img/messages.svg";
import Bookmarks from "../../img/bookmark.svg";
import Lists from "../../img/lists.svg";
import Profiles from "../../img/profile.svg";
import More from "../../img/more.svg";
import Avatar from "../../img/avatar.png";
import Moree from "../../img/moree.svg";
import "bootstrap/dist/css/bootstrap.min.css"
import {NavLink} from "react-router-dom";

const Sidebar = ()=>{
    return (
        <Col className={"border-end border-black d-flex flex-column align-items-center justify-content-between vh-100"} xs={3}>
            <div className={"mt-4"}>
                <div>
                    <Col><Image className={"mb-5"} src={Twitter} width={40} height={33}/></Col>
                </div>
                <ul className={"list-unstyled mt-1"}>
                    <li className={"mb-4"}>
                        <a className={"text-decoration-none text-black  d-flex align-items-center"}
                           href={"/home"}>
                            <div className={"me-3 "}><Image width={24} height={21} src={Home}/></div>
                            Home
                        </a>
                    </li>
                    <li className={"mb-4"}>
                        <a className={"text-decoration-none text-black  d-flex align-items-center"}
                           href={"/Explore"}>
                            <div className={"me-3 "}><Image width={24} height={21} src={Explore}/></div>
                            Explore
                        </a>
                    </li>
                    <li className={"mb-4"}>
                        <a className={"text-decoration-none text-black  d-flex align-items-center"}
                           href={"/Notifications"}>
                            <div className={"me-3 "}><Image width={24} height={21} src={Notifications}/>
                            </div>
                            Notifications
                        </a>
                    </li>
                    <li className={"mb-4"}>
                        <a className={"text-decoration-none text-black  d-flex align-items-center"}
                           href={"/Messages"}>
                            <div className={"me-3 "}><Image width={24} height={21} src={Messages}/></div>
                            Messages
                        </a>
                    </li>
                    <li className={"mb-4"}>
                        <a className={"text-decoration-none text-black  d-flex align-items-center"}
                           href={"/Bookmarks"}>
                            <div className={"me-3 "}><Image width={24} height={21} src={Bookmarks}/></div>
                            Bookmarks
                        </a>
                    </li>
                    <li className={"mb-4"}>
                        <a className={"text-decoration-none text-black  d-flex align-items-center"}
                           href={"/Lists"}>
                            <div className={"me-3 "}><Image width={24} height={21} src={Lists}/></div>
                            Lists
                        </a>
                    </li>
                    <li className={"mb-4"}>
                        <NavLink className={"text-decoration-none text-black  d-flex align-items-center"}
                           to={"/profile"}>
                            <div className={"me-3 "}><Image width={24} height={21} src={Profiles}/></div>
                            Profiles
                        </NavLink>
                    </li>
                    <li className={"mb-4"}>
                        <a className={"text-decoration-none text-black  d-flex align-items-center"}
                           href={"/More"}>
                            <div className={"me-3 "}><Image width={24} height={21} src={More}/></div>
                            More
                        </a>
                    </li>
                    <li className={"mb-4"}>
                        <NavLink className={"btn rounded-pill text-white w-100"} to={"/feed"}
                           style={{backgroundColor: "#55ACEE"}}>
                            Tweet
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className={"d-flex me-2 align-items-center ms-5 ps-5"}>
                <Image src={Avatar} width={50} height={50}/>
                <div className={"ms-3 mt-3 me-3"}>
                    <h6 className={"h6 mb-0 "}>Bobur</h6>
                    <p className={"text-muted"}>@bobur_mavlonov</p>
                </div>
                <a href={"/moree"}><Image src={Moree}/></a>
            </div>
        </Col>
    )
}

export  default  Sidebar;