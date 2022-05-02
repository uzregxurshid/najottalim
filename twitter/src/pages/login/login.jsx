import {Col, Container, Form, Image, Row, Button} from "react-bootstrap";
import logo from "../../img/twitter.png"
import "bootstrap/dist/css/bootstrap.min.css"
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../../context/auth";
import {useContext, useRef} from "react";

const Login = () => {

    const phone=useRef();
    const {token} = useContext(Context);
    console.log(typeof token)
    const navigate=useNavigate();
    const handleLogin = (evt) => {
      evt.preventDefault();
      if (token===phone.current.value){
          localStorage.setItem('auth',1);
          navigate("/profile");
      }
      else {
          localStorage.setItem('auth',0)
      }
    }
    return (
        <>
            <Container fluid>
                <Row className={"d-flex align-items-center justify-content-center vh-100"}>
                    <Col xs={3}>
                        <Form onSubmit={handleLogin}>
                            <Image src={logo} className={"mb-4"} style={{pointerEvents: "none"}}/>
                            <h3 className={"h3 mb-4"}>Login into twitter</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Phone number, email address"
                                              className={"py-3"} ref={phone}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" className={"py-3"}/>
                            </Form.Group>
                            <Button type="submit" className={"w-100 rounded-pill py-3 border-0 mb-4"}
                                    style={{backgroundColor: " #55ACEE"}}>
                                Login
                            </Button>
                            <Row>
                                <Col className={"d-flex justify-content-between"}>
                                    <a href={"/forgot"} className={"text-decoration-none"} style={{color: "#55ACEE"}}>Forgot
                                        password?</a>
                                    <Link to={"/signup"} className={"text-decoration-none"} style={{color: "#55ACEE"}}>Sign
                                        up to Twitter</Link>
                                </Col>
                            </Row>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Login;