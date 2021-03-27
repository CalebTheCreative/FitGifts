import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

function ClientList() {
  return (
    <div>
      <div id="client-list">
        <Container>
          <Row>
            <Col sm={2} md={2}>
              Back Button
            </Col>
            <Col sm={8} md={10}>
              Barbell Image
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover variant="dark">
                <tr>
                  <td>
                    <h1>Clients:</h1>
                  </td>
                </tr>
                {/* Here is where we will map out the client list with a component */}
                <tr>
                  <td>
                    <h4>Client List</h4>
                  </td>
                </tr>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button striped bordered hover variant="dark">
                <h6>Add New Client </h6>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ClientList;
