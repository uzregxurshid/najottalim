import {Col, Container, Image, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import background from "../../img/bg.jpg"
import logo from "../../img/twitter.png";
import google from "../../img/google.png"
import apple from "../../img/apple.png"
import "./signCover.css"
import {Link} from "react-router-dom";

const SignCover = () => {
    return (
        <>

            <Container fluid>
                <Row className={"vh-100"}>
                    <Col xs={6} className={"p-0"}>
                        <Image src={background} style={{
                            width: "100%",
                            pointerEvents: "none"
                        }}
                        />
                    </Col>
                    <Col xs={6}>
                        <Row className={"d-flex flex-column justify-content-center h-100 ms-5"}>
                            <Col xs={9}>
                                <Row>
                                    <Col>
                                        <Image src={logo} className={"mb-4"} width={50} height={41}
                                               style={{pointerEvents: "none"}}/>
                                    </Col>
                                    <h1 className={"h1 mb-4"} style={{fontSize: "45px", fontWeight: 800}}>Happening
                                        now</h1>
                                    <h3 className={"h3 fw-bold mb-3"}>
                                        Join Twitter today
                                    </h3>
                                    <Col xs={10} className={"mb-3 d-flex align-items-center"}>
                                        <a className={"text-decoration-none social text-black fs-5 fw-bold border border-1 rounded-pill w-100 p-2 text-center"}
                                           href={"/google"}>
                                            <Image src={google}/> Sign up with Google
                                        </a>
                                    </Col>
                                    <Col xs={10} className={"mb-3 d-flex align-items-center"}>
                                        <a className={"text-decoration-none social text-black fs-5 fw-bold border border-1 rounded-pill w-100 p-2 text-center"}
                                           href={"/apple"}>
                                            <Image src={apple}/> Sign up with Apple
                                        </a>
                                    </Col>
                                    <Col xs={10} className={"mb-3 d-flex align-items-center"}>
                                        <Link className={"text-decoration-none social text-black fs-5 fw-bold border border-1 rounded-pill w-100 p-2 text-center"}
                                           to={"/signup"}>
                                            Sign up with phone or email
                                        </Link>
                                    </Col>
                                    <Col xs={9}>
                                        <p className={"mb-3"}>
                                            By singing up you agree to the
                                            <a className={"text-decoration-none"}
                                               style={{
                                                   color: " #55ACEE",
                                               }} href={"/terms&privacy"}> Terms of
                                                Service</a> and
                                            <a className={"text-decoration-none"}
                                               style={{
                                                   color: " #55ACEE",
                                               }}
                                               href={"/privacy&police"}> Privacy Policy</a>, including <a
                                            className={"text-decoration-none"}
                                            style={{
                                                color: " #55ACEE",
                                            }}
                                            href={"/cookie&use"}>Cookie Use</a>.
                                        </p>
                                    </Col>
                                    <Col xs={8} className={"mb-3"}>
                                        <p>Already have an account? <Link className={"text-decoration-none"}
                                                                       to={"/login"} style={{
                                            color: " #55ACEE",
                                        }}>Log in</Link></p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <ul className={"list-unstyled d-flex m-0 align-items-center pt-1 ps-5"}>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/about"}
                                   style={{fontSize: "13px"}}>About</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/support"}
                                   style={{fontSize: "13px"}}>Help Center</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/termsservice"}
                                   style={{fontSize: "13px"}}>Terms of Service</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/provacy&policy"}
                                   style={{fontSize: "13px"}}>Privacy Policy</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/cookie&policy"}
                                   style={{fontSize: "13px"}}>Cookie Policy</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/ads&info"}
                                   style={{fontSize: "13px"}}>Ads info</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Blog</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Status</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Carrres</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Brand Resources</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Advertsing</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Marketing</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Twitter for Business</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Developers</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Directory</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>Settings</a>
                            </li>
                            <li className={"ms-2 fs-6"}>
                                <a className={"text-decoration-none text-black"} href={"/blog"}
                                   style={{fontSize: "13px"}}>© 2021 Twitter, Inc.</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default SignCover;