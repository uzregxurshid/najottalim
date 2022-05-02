import "./profile.css";
import {Col, Container, Image, Navbar, NavLink, Row} from "react-bootstrap";
import Sidebar from "../../components/sidebar/sidebar";
import Rightside from "../../components/rightside/rightside";
import Cover from "../../components/cover/cover";
import Pinned from "../../img/album/pinned.svg";
import Avatar from "../../img/avat.png"
import Tweet from "../../components/tweet/tweet";
import Rasm from "../../img/events/rasm.jpg"
const Profile = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Sidebar/>
                    <Col xs={6} className={"col4"}>
                        <Row>
                            <Navbar bg="light">
                                <NavLink className={"text-black"} href={"/dfgsdf "}>&larr;</NavLink>
                                <div>
                                    <h6 className={"fw-bold text-black h6 mb-0"}>Bobur</h6>
                                    <p className={"text-muted mb-0"}>1,070 Tweets</p>
                                </div>
                            </Navbar>
                            <Cover/>
                            <Col className={"p-0"}>
                                <div className={""}>
                                    <div className={"pt-2 px-4"}><Image src={Pinned}/> <span className={"text-muted"}> Pinned Tweet</span>
                                    </div>
                                    <Tweet
                                    avatar={Avatar}
                                    name={"Bobur"}
                                    username={"@bobur_mavlonov · Apr 1"}
                                    text={"4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"}
                                    commenCount={10}
                                    retweetCount={1}
                                    likeCount={8}
                                    />
                                    <Tweet
                                        avatar={Avatar}
                                        name={"Bobur"}
                                        username={"@bobur_mavlonov · Apr 1"}
                                        text={"Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. \n" +
                                        "\n" +
                                        "Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. \n" +
                                        "\n" +
                                        "Gap faqat biznes trenerlar haqida emas."}
                                        retweetCount={5}
                                        likeCount={9}
                                    />
                                    <Tweet
                                        avatar={Avatar}
                                        name={"Bobur"}
                                        username={"@bobur_mavlonov · Apr 1"}
                                        text={"A bo'pti maskamasman"}
                                        retweetCount={5}
                                        likeCount={9}
                                        rasm={Rasm}
                                        eni={679}
                                        boyi={453}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Rightside/>
                </Row>
            </Container>
        </>
    )
}
export default Profile;