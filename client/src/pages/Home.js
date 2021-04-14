import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ClientList from "../components/ClientList";
import TRewards from "../components/TRewards";
import TCriteria from "../components/TCriteria";
import API from "../utils/API";

function Home() {

    const [userName, setUserName] = useState([]);

    useEffect(() => {
        loadUser()
    }, [])

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
                            
                            {/* <h5 className="text-danger">Trainer Number: <Button size="sm" href="sms:&body=Enter code '12345' to add me as your trainer on FitGifts!">{userName._id}</Button> </h5> */}
                        </Col>
                    </Row>

                    <hr />

                    <Row className="justify-content-center">
                        {/* <Col sm="auto">
                            <Button variant="danger" className="my-1" block href="/client-list"><i className="fas fa-users"></i><b> Clients</b></Button>
                        </Col>
                        <Col sm="auto">
                            <Button variant="danger" className="my-1" block href="/trewards"><i className="fas fa-gift"></i><b> Rewards</b></Button>
                        </Col> */}
                        <Col sm="auto">
                            <Button variant="outline-secondary" className="my-1" block href="/logout">Logout</Button>
                        </Col>

                    </Row>

                </Container>
            </Row>
            <Row className="justify-content-center my-3">
                <Container>
                    <ClientList />
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