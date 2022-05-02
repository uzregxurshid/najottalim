import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, Form, Row, Modal} from "react-bootstrap";
import {useState} from "react";
import React from "react";

function App() {
    const [value, SetValue] = useState("");
    const [modalVal, SetModalValue] = useState("");
    const [todoArr, newTodo]= useState(() => {
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    localStorage.setItem("name", JSON.stringify(todoArr));
    const [modalid,SetModalid] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const color = (item) => {
        if (item.isCompleted) return "border-success";
        return "border-warning"
    }
    return (
        <>
            <Container fluid>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure edit?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control
                            type={"text"}
                            placeholder={"Enter todo..."}
                            onInput={(evt)=>

                                {
                                    SetModalValue(evt.target.value)
                                }
                            }
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>{
                           newTodo( todoArr.map(item=>{
                               if (item.id===modalid){
                                   item.value=modalVal;
                               }
                               return item;
                           }))
                            handleClose();

                        }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <h2 className={"text-center"}>Todo-App</h2>
                <Form className={"d-flex justify-content-center"} onSubmit={(evt) => {
                    evt.preventDefault();
                    const todo={
                        id:todoArr.at(-1)?todoArr.at(-1).id+1:1,
                        value:value,
                        isCompleted:false,
                        isEdited:false,

                    }
                    newTodo([...todoArr,todo]);
                    SetValue("")
                }}>



                    <Col xs={3}>
                        <Form.Group className={"mb-3"} controlId={"TodoText"}>
                            <Form.Control type={"text"}
                                          placeholder={"Input your Todo"}
                                          onInput={evt => SetValue(evt.target.value)}
                            value={value}/>
                            <Form.Text className={"text-muted"}>Input your todo</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col className={"ms-3"} xs={1}>
                        <Button variant={"success"} type={"submit"}>Submit</Button>
                    </Col>
                </Form>
                <Row className={"justify-content-center"}>

                    {
                        todoArr.map(item=>{
                        return (
                            <React.StrictMode
                            key={item.id}>
                                <Col xs={8} className={`border ${color(item)} rounded p-3 d-flex align-items-center mt-3 w-75`}>
                                    <Col xs={9} className={"d-flex"}>
                                        <Form.Check
                                            type={"checkbox"}
                                            className={"me-2"}
                                            onClick={(evt)=>{
                                              const state=evt.target.checked;
                                              newTodo(todoArr.map((i)=>{
                                                  if (i.id===item.id){
                                                      i.isCompleted=state;
                                                  }
                                                  return i;
                                              }))

                                            }}
                                        />
                                        {item.value}
                                    </Col>
                                    <Col xs={3} className={"d-flex"}>
                                        <Button variant={"warning"} className={"me-3 ms-auto"} onClick={()=>{
                                            SetModalid(item.id)
                                            handleShow();
                                        }}>Edit</Button>
                                        <Button variant={"danger"} onClick={()=>{
                                            newTodo(
                                                todoArr.filter(i=>i.id!==item.id)
                                            )
                                        }}>Delete</Button>
                                    </Col>
                                </Col>
                            </React.StrictMode>
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}

export default App;
