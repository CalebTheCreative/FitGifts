import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

function ClientProfile() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} md={2}>
          Back Button
        </Col>
        <Col sm={8} md={10}>
          Barbell Image
        </Col>
      </Row>

      <Table striped bordered hover variant="dark">
        <tr>
          {/* Will hold the client's name the trainer chose */}
          <td>
            <h3>Client:</h3>
          </td>
          {/* Chosen name */}
          <td>
            {" "}
            <h4>Client Name</h4>
          </td>
        </tr>
        <tr>
          <td>
            <h3>Remaining Point:</h3>
          </td>
          {/* Will check to see how many point are left for this client */}
          <td>
            <h4>5</h4>
          </td>
        </tr>
      </Table>
    </Container>
  );
}

export default ClientProfile;
