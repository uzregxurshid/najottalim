import Sidebar from "../../components/sidebar/sidebar";
import Rightside from "../../components/rightside/rightside";
import {Col, Container, Image, Navbar, NavLink, Row} from "react-bootstrap";
import Magic from "../../img/events/magic.svg"
import Tweet from "../../components/tweet/tweet";
import Avatar2 from "../../img/avat2.png";
import Avatar3 from "../../img/avat3.png";
import Avatar4 from "../../img/avat4.png";
import Rasm from "../../img/image2.png";

const Feed = ()=>{
    return (
        <>
            <Container fluid>
                <Row>
                    <Sidebar/>
                    <Col xs={6}>
                        <Row>
                            <Navbar className={"border-bottom border-black d-flex justify-content-between"} bg="white">
                                <NavLink className={"text-black fw-bold"} href={"/ "}>Home</NavLink>
                                <a href={"/"}>
                                    <Image src={Magic}/>
                                </a>
                            </Navbar>
                        </Row>
                        <Row>
                            <Tweet
                                avatar={Avatar2}
                                name={"Designsta"}
                                username={"@inner · 25m"}
                                text={"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?"}
                                commenCount={10}
                                retweetCount={1}
                                likeCount={8}
                            />
                            <Tweet
                                avatar={Avatar3}
                                name={"cloutexhibition"}
                                username={"@RajLahoti · 22m"}
                                text={"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam."}
                                retweetCount={5}
                                likeCount={9}
                            />
                            <Tweet
                                avatar={Avatar4}
                                name={"CreativePhoto"}
                                username={"@cloutexhibition · 1h"}
                                text={"Обетда..... \n" +
                                "Кечиринглар"}
                                retweetCount={5}
                                likeCount={9}
                                rasm={Rasm}
                                eni={679}
                                boyi={453}
                            />
                        </Row>
                    </Col>
                    <Rightside/>
                </Row>
            </Container>
        </>
    )
}
export default  Feed;