import {Col, FormControl, Image, Row} from "react-bootstrap";
import Search from "../../img/searchbtn.svg";
import image1 from "../../img/album/1.jpg";
import image2 from "../../img/album/2.jpg";
import image3 from "../../img/album/3.jpg";
import image4 from "../../img/album/4.jpg";
import image5 from "../../img/album/5.jpg";
import image6 from "../../img/album/6.jpg";
import Mushtariy from "../../img/album/mushtariy.jpg";
import Shuhrataka from "../../img/album/shuhrataka.jpg";

const Rightside =()=>{
    return(
        <Col className={"border-start border-black pt-4"} xs={3}>
            <div className={"d-flex position-relative mb-3"}>
                         <span className="input-group-append position-absolute" style={{pointerEvents: "none"}}>
                            <button className="btn bg-transparent rounded-pill mt-2"
                                    type="button">
                               <Image src={Search}/>
                            </button>
                        </span>
                <FormControl

                    className={"rounded-pill py-3 ps-5 bg-light border-0"}
                    type={"search"}
                    placeholder={"Search Twitter"}
                />
            </div>
            <div className={"mb-3"}>
                <Row xs={3}>
                    <Col>
                        <a href={"/album?1"}><Image src={image1} width={110} height={"auto"}/></a>
                    </Col>
                    <Col>
                        <a href={"/album?1"}><Image src={image2} width={110} height={"auto"}/></a>
                    </Col>
                    <Col>
                        <a href={"/album?1"}><Image src={image3} width={110} height={"auto"}/></a>
                    </Col>
                    <Col>
                        <a href={"/album?1"}><Image src={image4} width={110} height={"auto"}/></a>
                    </Col>
                    <Col>
                        <a href={"/album?1"}><Image src={image5} width={110} height={"auto"}/></a>
                    </Col>
                    <Col>
                        <a href={"/album?1"}><Image src={image6} width={110} height={"auto"}/></a>
                    </Col>
                </Row>
            </div>

            <div className={"rounded bg-light py-4 px-3 mb-3"}>
                <h4 className={"h4 fw-bold"}>You might like</h4>
                <div className={"d-flex me-2 align-items-center"}>
                    <Image className={"rounded-circle"} src={Mushtariy} width={50} height={50}
                           style={{pointerEvents: "none"}}/>
                    <div className={"ms-3 mt-3 me-3 w-75"}>
                        <h6 className={"h6 mb-0 "}>Mushtariy</h6>
                        <p className={"text-muted"}>@Mushtar565266</p>
                    </div>
                    <a className={"btn rounded-pill text-white fw-bold"} href={"/moree"}
                       style={{background: '#000'}}>Follow</a>
                </div>
                <div className={"d-flex me-2 align-items-center"}>
                    <Image className={"rounded-circle"} src={Shuhrataka} width={50} height={50}
                           style={{pointerEvents: "none"}}/>
                    <div className={"ms-3 mt-3 me-3 w-75"}>
                        <h6 className={"h6 mb-0 "}>Shuhratbek</h6>
                        <p className={"text-muted"}>@mrshukhrat</p>
                    </div>
                    <a className={"btn rounded-pill text-white fw-bold"} href={"/moree"}
                       style={{background: '#000'}}>Follow</a>
                </div>

                <a className={"text-decoration-none"} href={"/lorem&more"} style={{color: "#55ACEE"}}>Show
                    more</a>
            </div>
            <div>
                <ul className={"list-unstyled d-flex flex-wrap m-0 align-items-center pt-1 text-black-50"}>
                    <li className={"ms-3 fs-6"}>
                        <a className={"text-decoration-none text-black-50"} href={"/termsservice"}
                           style={{fontSize: "16px"}}>Terms of Service</a>
                    </li>
                    <li className={"ms-3 fs-6"}>
                        <a className={"text-decoration-none text-black-50"} href={"/provacy&policy"}
                           style={{fontSize: "16px"}}>Privacy Policy</a>
                    </li>
                    <li className={"ms-3 fs-6"}>
                        <a className={"text-decoration-none text-black-50"} href={"/Imprint"}
                           style={{fontSize: "16px"}}>Imprint</a>
                    </li>
                    <li className={"ms-3 fs-6"}>
                        <a className={"text-decoration-none text-black-50"} href={"/ads&info"}
                           style={{fontSize: "16px"}}>Ads info</a>
                    </li>
                    <li className={"ms-3 fs-6"}>
                        <a className={"text-decoration-none text-black-50"} href={"/blog"}
                           style={{fontSize: "16px"}}>More ... </a>
                    </li>

                    <li className={"ms-3 fs-6"}>
                        <a className={"text-decoration-none text-black-50"} href={"/blog"}
                           style={{fontSize: "16px"}}>© 2021 Twitter, Inc.</a>
                    </li>
                </ul>
            </div>
        </Col>
    )
}
export  default  Rightside;