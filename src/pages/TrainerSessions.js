import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

function TrainerSessions() {
  return (
    <div>
      <Container id="sessions" className="wrapper">
        <Row>
          <Col sm={2} md={2}>
            Back Button
          </Col>
          <Col sm={6} md={10}>
            Barbell Image
          </Col>
        </Row>
        <br></br>
        {/* Will give the sessions of the current day and two days coming after */}
        {/* Checks to see what time they are scheduled */}
        <Row>
          <Col>
            <Table striped bordered hover variant="dark">
              <thead>
                {" "}
                <h5 className="text-align-center">Current Day</h5>
              </thead>
              <tbody>
                <tr>
                  <td>Morning</td>
                  <td>Mark Otto</td>
                </tr>
                <tr>
                  <td>Afternoon</td>
                  <td>Jacob Thornton</td>
                </tr>
                <tr>
                  <td>Evening</td>
                  <td>Jacob Thornton</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrainerSessions;
