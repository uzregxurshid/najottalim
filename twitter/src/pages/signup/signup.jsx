import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import logo from "../../img/twitter.png";
import "bootstrap/dist/css/bootstrap.min.css"
import {useRef, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Context } from "../../context/auth";

const Signup = () => {
    const {setToken} = useContext(Context)
    const navigate = useNavigate();
    const username = useRef();
    const handleSignUp = (evt) => {
        evt.preventDefault();
        const name = username.current.value;
        if (name.length > 3) {
            setToken(name)
            localStorage.setItem('token', name);
            navigate("/login");
        }

    }
    return (
        <>
            <Container fluid>
                <Row className={"d-flex align-items-center justify-content-center vh-100"}>
                    <Col xs={5}>
                        <Form onSubmit={handleSignUp}>
                            <Row>
                                <Col className={"d-flex justify-content-center align-items-center"}>
                                    <Image src={logo} className={"mb-4 border-0"} style={{pointerEvents: "none"}}
                                           thumbnail/>
                                </Col>
                            </Row>
                            <h3 className={"h3 mb-4"}>Create an account</h3>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" placeholder="Name"
                                              className={"py-3"}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" placeholder="Number" className={"py-3"} ref={username}/>
                            </Form.Group>
                            <Row className={"mb-4"}>
                                <Col className={"d-flex justify-content-between"}>
                                    <a href={"/forgot"} className={"text-decoration-none"} style={{color: "#55ACEE"}}>Use
                                        email</a>
                                </Col>
                            </Row>
                            <h5 className={"h5"}>Date of birth</h5>
                            <p className={"text-muted"}>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
                                sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo
                                mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi
                                massa in molestie a sit. Elit congue.</p>
                            <Row className={"mb-5"}>
                                <Col xs={6}>
                                    <Form.Select className={"py-3"}>
                                        <option value={""}>Month</option>
                                        <option value={"may"}>May</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={3}>
                                    <Form.Select className={"py-3"}>
                                        <option value={""}>Day</option>
                                        <option value={"1"}>1</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={3}>
                                    <Form.Select className={"py-3"}>
                                        <option>Year</option>
                                        <option value={"2000"}>2000</option>

                                    </Form.Select>
                                </Col>
                            </Row>

                            <Button type="submit" className={"w-100 rounded-pill py-3 border-0 mb-4"}
                                    style={{backgroundColor: " #55ACEE"}}>
                                Next
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Signup;