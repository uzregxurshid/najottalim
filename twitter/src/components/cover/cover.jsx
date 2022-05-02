import {Button, Col, Image} from "react-bootstrap";
import Avatar from "../../img/avatar.png";
import Location from "../../img/album/location.svg";
import Link from "../../img/album/link.svg";
import Birthday from "../../img/album/birthday.svg";
import Calendar from "../../img/album/calendar.svg";
import Coverimg from "../../img/cover.png";

const Cover =()=>{
    return (
        <>
            <Image className={"p-0"} src={Coverimg}/>
            <Col xs={12} className={"d-flex align-items-center justify-content-between"}>
                <Image src={Avatar} width={150} height={150} style={{
                    marginTop: "-75px",
                }}/>
                <Button className={"rounded-pill"} variant={"outline-dark"}>Edit profile</Button>
            </Col>
            <Col className={"border-bottom border-black"}>
                <h3 className={"h3 fw-bold m-0"}>Bobur</h3>
                <p className={"text-muted mb-1"}>@bobur_mavlonov</p>
                <p>UX&UI designer at <a className={"text-decoration-none"}
                                        href={"https://t.me/abutechuz"}
                                        style={{color: "#55acee"}}>@abutechuz</a></p>
                <ul className={"list-unstyled d-flex"}>
                    <li className={"d-flex align-items-center me-3"}>
                        <Image className={"me-1"} src={Location}/>
                        Mashag’daman
                    </li>
                    <li className={"d-flex align-items-center me-3"}>
                        <Image className={"me-1"} src={Link}/>
                        <a className={"text-decoration-none"} href={"https://t.me/boburjon_mavlonov"}
                           style={{color: "#55acee"}}>t.me/boburjon_mavlonov</a>
                    </li>
                    <li className={"d-flex align-items-center me-3"}>
                        <Image className={"me-1"} src={Birthday}/>
                        <span className={"text-muted text-nowrap"}>Born November 24, 2000</span>
                    </li>
                    <li className={"d-flex align-items-center"}>
                        <Image className={"me-1"} src={Calendar}/>
                        <span className={"text-muted text-nowrap"}>Joined May 2020</span>
                    </li>
                </ul>
                <ul className={"list-unstyled d-flex"}>
                    <li className={"me-2"}>
                        <span className={"fw-bold me-2"}>67</span>
                        <span className={"text-capitalize"}>Following</span>
                    </li>
                    <li className={"me-2"}>
                        <span className={"fw-bold me-2"}>47</span>
                        <span className={"text-capitalize"}>Followers</span>
                    </li>
                </ul>
                <ul className={"list-unstyled d-flex justify-content-between mx-5"}>
                    <li>
                        <a className={"active text-decoration-none pb-3 border-bottom border-4 border-primary text-black"}
                           href={"/feed/tweets"}><span className={"fw-bold"}> Tweets</span></a>
                    </li>
                    <li>
                        <a className={"active text-decoration-none pb-3 text-black"}
                           href={"/feed/tweets"}><span> Tweets & replies</span></a>
                    </li>
                    <li>
                        <a className={"active text-decoration-none pb-3 text-black"}
                           href={"/feed/tweets"}><span>Media</span></a>
                    </li>
                    <li>
                        <a className={"active text-decoration-none pb-3 text-black"}
                           href={"/feed/tweets"}><span>Likes</span></a>
                    </li>
                </ul>
            </Col>
        </>
    )
}
export  default  Cover;