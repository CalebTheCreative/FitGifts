import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import TRewards from "../components/TRewards";
import TCriteria from "../components/TCriteria";
import API from "../utils/API";

function Home() {

    const [userName, setUserName] = useState([]);
    
    useEffect(() => {
        loadUser()
    }, [])

    // Modal Components
    //      1 – Add Trainer Button
    //      2 – Contact Trainer Button
    //      3 – How to Earn Button
    const [show1, setShow1] = useState(false);
    // const [show2, setShow2] = useState(false);
    // const [show3, setShow3] = useState(false);

    const handleClose1 = () => setShow1(false);
    // const handleClose2 = () => setShow2(false);
    // const handleClose3 = () => setShow3(false);

    const handleShow1 = () => setShow1(true);
    // const handleShow2 = () => setShow2(true);
    // const handleShow3 = () => setShow3(true);


    function loadUser() {
        API.getUser()
            .then(res =>
                setUserName(res.data)
            )
            .catch(err => console.log(err));
    };

    // function userLogout() {
	// 	API.logout()
	// 		.then(res => {
	// 			console.log("You have logged out!");
	// 			console.log(res.data);
	// 		}			
	// 		)
	// 		.catch(err => console.log(err));
	// }
    // function addPoint() {
    //     this.setState({ clientTot1: this.state.clientTot1 + 1 })
    //     this.calcProg();
    // }

    // function calcProg() {
    //     let calc = ((this.state.clientTot1 / this.state.rwdGoal1) * 100);

    //     if (calc === 0) {
    //         this.setState({ rwdProg: 0 });
    //     }
    //     else {
    //         this.setState({ rwdProg: calc })
    //     }
    // }

    return (
        <Container className="text-center justify-content-center" id="thCont">
            <Row className="mb-3">
                <Container id="t-home-banner1" className="px-4 py-4">

                    <Row>
                        <Col>
                            <h1>Hello, {userName.firstName}!</h1>
                            <h5 className="text-danger">Trainer Number: <Button size="sm" href="sms:&body=Enter code '12345' to add me as your trainer on FitGifts!">{userName._id}</Button> </h5>
                        </Col>
                    </Row>

                    <hr />

                    <Row className="justify-content-center">
                        <Col sm="auto">
                            <Button variant="danger" className="my-1" block href="/client-list"><i className="fas fa-users"></i><b> Clients</b></Button>
                        </Col>
                        <Col sm="auto">
                            <Button variant="danger" className="my-1" block href="/trewards"><i className="fas fa-gift"></i><b> Rewards</b></Button>
                        </Col>
                        <Col sm="auto">
                            <Button variant="outline-secondary" className="my-1" block href="/logout">Logout</Button>
                        </Col>

                    </Row>

                </Container>
            </Row>

            <Row className="justify-content-center my-3">
                <Container className="justify-content-center align-items-center bg-light px-4">
                    <Row className="justify-content-center align-items-center m-2">
                        <Col xs={3} id="rwdTitleBox" className="align-items-center justify-content-center">
                            <Row className="align-items-center">
                                <Col className="align-items-center">
                                    <h1>
                                        Your Clients
                                    </h1>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={9} className="text-center justify-content-center align-items-center">

                            <Row className="text-center align-items-center justify-content-center my-2 p-3 border">
                                <Col sm={4} className="text-center justify-content-center">
                                    <Row className="text-center justify-content-center">
                                        <h2>{userName.clientName1}</h2>
                                    </Row>
                                </Col>
                                <Col sm={2} className="text-center justify-content-center">
                                    <Row className="text-center justify-content-center">
                                        <h2 className="text-center">{userName.clientTot1}</h2>
                                    </Row>
                                </Col>
                                <Col sm={6} className="text-center justify-content-center">
                                    <Row className="text-center justify-content-center">
                                        {/* <Button className="mx-1" variant="danger" onClick={this.addPoint}><i className="fas fa-plus"></i><b> Add Pt</b></Button> */}
                                        <Button variant="danger" className="my-1 mx-1" onClick={handleShow1}>
                                            <i className="fas fa-comment"></i><b> Contact</b>
                                        </Button>

                                        <Modal show={show1} onHide={handleClose1}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Contact</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Col sm="auto">
                                                    <Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="tel:123-456-7890"><i className="fas fa-phone"></i>&nbsp;Call</Button>
                                                    <Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="sms:123-456-7890"><i className="fas fa-comment-dots"></i>&nbsp;Text</Button>
                                                    <Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="mailto:sample@mail.com"><i className="fas fa-envelope"></i>&nbsp;Email</Button>
                                                </Col>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose1}>
                                                    Close
                                        </Button>
                                            </Modal.Footer>
                                        </Modal>

                                        <Button className="mx-1 my-1" variant="danger"><i className="fas fa-minus-circle"></i><b> Remove</b></Button>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Row>

            <Row className="justify-content-center my-3">
                <Container>
                    <TRewards />
                </Container>
            </Row>

            <Row className="justify-content-center my-3">
                <Container>
                    <TCriteria />
                </Container>
            </Row>

        </Container>
    )
}

export default Home;