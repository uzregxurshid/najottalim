import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Container, Form, Row, Button} from "react-bootstrap";
import bacground from "./img/login-background.jpg";
import translate from "./names.json"
import {useState} from "react";
function App() {
  const [lang,setlang] = useState("uz")
  const content=translate.document.body.form[lang];
  return (
  <>
    <Container fluid
               className={"vh-100 bg-light d-flex align-items-center justify-content-center"}
               translate={"yes"}
               style={
                 {
                   backgroundImage:`url(${bacground})`
                 }
               }
    >
    <Row>
      <Col  className={"bg-light bg-opacity-25 rounded"}>

        <Form className={"p-5"} style={
          {
            width: "400px"
          }
        }>
          <Col xs={4} className={"ms-auto"}>
            <Form.Select
            onChange={(evt)=>{
              setlang((evt.target.value))
            }}
            defaultValue={"uz"}
            >
              <option value={"en"}>English</option>
              <option value={"uz"}>Uzbek</option>

            </Form.Select>
          </Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{content.email.label}</Form.Label>
            <Form.Control type="email" placeholder={content.email.placeholder} />
            <Form.Text className="text-muted">
              {content.email.politic}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{content.password.label}</Form.Label>
            <Form.Control type="password" placeholder={content.password.placeholder} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={content.checkbox.label} />
          </Form.Group>
          <Button variant="primary" type="submit">
            {content.button.value}
          </Button>

        </Form>
      </Col>
    </Row>
    </Container>
  </>
  );
}
export default App;
