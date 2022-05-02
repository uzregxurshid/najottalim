import './App.css';
import {Container, Form, Button, Row, Col, FormSelect} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import translate from "./translate/translate.json"
import {useContext, useState} from "react";
import {Context} from "./translate/context";
function App() {

    const [lang, setLang] = useState("uz")
    const text = translate.document.body.form[lang];
    const {theme,setTheme}=useContext(Context);
    const [bool,setBool]=useState(true)
    const handleChangeTheme=()=>{
        if (bool){
            setTheme("bg-black");
            setBool(!bool);
        }
        else {
            setTheme("bg-white");
            setBool(!bool);
        }


    }
    return (
        <>
            <Container fluid className={`${theme} bg-opacity-25`}>
                <Row className={"d-flex justify-content-center align-items-center vh-100 flex-column"}>
                   <Col xs={4} className={"align-self-end"}>
                       <Button variant={"primary mb-3"} onClick={handleChangeTheme}>{`${theme}`}</Button>
                   </Col>
                    <Col xs={11} sm={8} md={6} lg={5} xl={4}>
                        <Form className={`${theme} p-2 p-sm-5 rounded bg-opacity-25`}>
                            <div className={"blur"}></div>
                            <div className={"blur2"}></div>
                            <Col className={"ms-auto"} xs={4}>
                                <FormSelect
                                    defaultValue={lang}
                                    onChange={(evt)=>{
                                        setLang(evt.target.value);
                                    }}
                                >
                                    <option value={"en"}>English</option>
                                    <option value={"uz"}>Uzbek</option>
                                </FormSelect>
                            </Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{text.email.label}</Form.Label>
                                <Form.Control type="email" placeholder={text.email.placeholder} autoComplete={"off"}/>
                                <Form.Text className="text-white">
                                    {text.email.security}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{text.password.label}</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder={text.password.placeholder}
                                    required={"required"}
                                    autoComplete={"off"}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label={text.checkbox.label}
                                />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                {text.button.value}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
