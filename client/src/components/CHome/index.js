import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import AddTrainer from "../AddTrainer";
import API from "../../utils/API";
import "./style.css";

function CHome() {

    const [userName, setUserName] = useState([]);
    const [rwdName, setRwdName] = useState([]);

    useEffect(() => {
        loadRewards()
    }, [])
    useEffect(() => {
        loadUser()
    }, [])

    // Modal Components
    //      1 – Add Trainer Button
    //      2 – Contact Trainer Button
    //      3 – How to Earn Button
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);

    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);

    function loadUser() {
        API.getUser()
            .then(res =>
                setUserName(res.data)
            )
            .catch(err => console.log(err));
    };

    function loadRewards() {
        API.getRewards()
            .then(res =>
                setRwdName(res.data)
            )
            .catch(err => console.log(err));
    };
    // function componentDidMount() {
    //     this.calcProg();
    //     this.rwdAchieved();
    // }

    // function addPoint1() {
    //     let calcSub1 = (this.state.rwdTotal - this.state.rwdg1);
    //     if (calcSub1 < 0) {
    //         alert("Not enough points!");
    //         return;
    //     }
    //     else {
    //         this.setState({ rwdTotal: this.state.rwdTotal - this.state.rwdg1 })
    //     }
    //     this.calcProg();
    // }

    // function addPoint2() {
    //     let calcSub2 = (this.state.rwdTotal - this.state.rwdg2);
    //     if (calcSub2 < 0) {
    //         alert("Not enough points!");
    //         return;
    //     }
    //     else {
    //         this.setState({ rwdTotal: this.state.rwdTotal - this.state.rwdg2 })
    //     }
    //     this.calcProg();
    // }

    // function addPoint3() {
    //     let calcSub3 = (this.state.rwdTotal - this.state.rwdg3);
    //     if (calcSub3 < 0) {
    //         alert("Not enough points!");
    //         return;
    //     }
    //     else {
    //         this.setState({ rwdTotal: this.state.rwdTotal - this.state.rwdg3 })
    //     }
    //     this.calcProg();
    // }

    // function calcProg() {
    //     let calc1 = ((this.state.rwdTotal / this.state.rwdg1) * 100);
    //     let calc2 = ((this.state.rwdTotal / this.state.rwdg2) * 100);
    //     let calc3 = ((this.state.rwdTotal / this.state.rwdg3) * 100);

    //     if (calc1 === 0) {
    //         this.setState({ rwdProg1: 0 });
    //     }
    //     else {
    //         this.setState({ rwdProg1: calc1 })
    //     }
    //     if (calc2 === 0) {
    //         this.setState({ rwdProg2: 0 });
    //     }
    //     else {
    //         this.setState({ rwdProg2: calc2 })
    //     }
    //     if (calc3 === 0) {
    //         this.setState({ rwdProg3: 0 });
    //     }
    //     else {
    //         this.setState({ rwdProg3: calc3 })
    //     }
    // }

    // function rwdAchieved() {
    //     if (this.state.rwdTotal >= this.state.rwdNext) {
    //         this.setState({ achieved: "(Achieved)" })
    //     }
    // }

    return (
        <Container className="text-center justify-content-center" id="chCont">
            <Row>
                <Container id="c-home-banner1" className="px-4 py-4">
                    <Row>
                        <Col>
                            {userName.length ? (
                                <h1>Hello, {userName.firstName}!</h1>
                            ) : (
                                <h1>No username is set up here</h1>
                            )}

                            <h5>Trainer Name: <span className="text-danger">NEEDS CHANGED</span></h5>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="justify-content-center">
                        {/* <Col sm="auto">
                                <Button className="my-1" variant="outline-danger" block href="/client-rewards"><i className="fas fa-gift"></i><b> Rewards</b></Button>
                            </Col> */}
                        <Col sm="auto">
                            <Button variant="outline-danger" className="my-1" onClick={handleShow1}>
                                <i className="fas fa-plus"></i><b> Add Trainer</b>
                            </Button>

                            <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Trainer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <AddTrainer />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose1}>
                                        Close
                                        </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                        <Col sm="auto">
                            <Button variant="outline-danger" className="my-1" onClick={handleShow2}>
                                <i className="fas fa-comment"></i><b> Contact Trainer</b>
                            </Button>

                            <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Contact Trainer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Col sm="auto">
                                        <Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="tel:123-456-7890"><i className="fas fa-phone"></i>&nbsp;Call</Button>
                                        <Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="sms:123-456-7890"><i className="fas fa-comment-dots"></i>&nbsp;Text</Button>
                                        <Button className="my-1 btn-block btn-lg" variant="outline-secondary" href="mailto:sample@mail.com"><i className="fas fa-envelope"></i>&nbsp;Email</Button>
                                    </Col>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose2}>
                                        Close
                                        </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                        <Col sm="auto">
                            <Button variant="outline-secondary" className="my-1" block>Logout</Button>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <br />
            <Row className="justify-content-center">
                <Container className="justify-content-center align-items-center bg-light p-2">
                    <Row className="justify-content-center align-items-center mx-2">
                        <Col sm={4} id="rwdTitleBox" className="align-items-center justify-content-center">
                            <Row className="align-items-center justify-content-center">
                                <Col sm="auto" className="align-items-center justify-content-center">
                                    <h1 id="rwdPtBanner" className="text-black">
                                        {userName.rewardsPts}
                                    </h1>
                                    <h5 className="text-black">Reward Points to Redeem</h5>
                                    <Button variant="outline-danger" size="sm" onClick={handleShow3}>
                                        How to Earn <i className="fas fa-chevron-right"></i>
                                    </Button>

                                    <Modal show={show3} onHide={handleClose3}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Row className="justify-content-center">
                                                <Col sm={12} className="text-center justify-content-center bg-secondary">
                                                    <Row className="text-center justify-content-center">
                                                        <h3 className="text-center">Criteria:</h3>
                                                    </Row>

                                                    <Row className="justify-content-center">
                                                        <Col sm={2}>
                                                            <p>1 pt</p>
                                                        </Col>
                                                        <Col sm={10}>
                                                            <p className="text-left">Every completed session</p>
                                                        </Col>
                                                    </Row>

                                                    <Row className="justify-content-center">
                                                        <Col sm={2}>
                                                            <p>2 pts</p>
                                                        </Col>
                                                        <Col sm={10}>
                                                            <p className="text-left">Each goal met</p>
                                                        </Col>
                                                    </Row>

                                                    <Row className="justify-content-center">
                                                        <Col sm={2}>
                                                            <p>3 pt</p>
                                                        </Col>
                                                        <Col sm={10}>
                                                            <p className="text-left">Every month w/ 4 completed sessions</p>
                                                        </Col>
                                                    </Row >
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose3}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Col>
                            </Row>
                        </Col>
                        {rwdName.length ? (
                        <Col sm={8} className="text-center justify-content-center">
                                    {/* {rwdName.map(reward => (
                                        <Row className="text-center align-items-center justify-content-centermy-2 border py-2">
                                            <Col sm={8} className="text-center justify-content-center">
                                                <Row className="text-center justify-content-center">
                                                    <h4>{reward.rwdVal}: &nbsp;</h4>
                                                    <h4><b>{this.reward.rwdName}</b></h4>
                                                </Row>
                                                <Row className="text-center justify-content-center">
                                                    <Col sm={10}>
                                                        <ProgressBar
                                                            completed={50}
                                                            bgColor="#FF0000"
                                                            height="25px"
                                                            labelAlignment="outside"
                                                            labelColor="#000000"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col sm={4} className="text-center justify-content-center">
                                                <Row className="text-center justify-content-center">
                                                    <Button className="my-1" size="lg" variant="danger" onClick={this.addPoint1}><b>Redeem</b></Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    ))} */}
                                </Col>
                            ) : (
                                <Col sm={8} className="text-center justify-content-center">
                                    <Row className="text-center align-items-center justify-content-centermy-2 border py-2">
                                        <Col sm={12} className="text-center justify-content-center">
                                            <h2 className="text-center text-black">No rewards to choose from</h2>
                                        </Col>
                                    </Row>
                                </Col>
                            )}
                        
                    </Row>
                </Container>
            </Row>

        </Container>
    )
}

export default CHome;