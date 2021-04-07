import React, { useReducer, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row
} from "react-bootstrap";
import initialTimeSlots from "./timeSlots.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Sessions() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "inputChange":
          return { ...state, [action.fieldName]: action.fieldValue };
        case "bookTimeSlot":
          return {
            ...state,
            timeslots: state.timeslots.map(timeslot => {
              if (timeslot.id !== state.timeslotID) {
                return timeslot;
              }
              return {
                ...timeslot,
                booked: true,
                contactName: state.contactName,
                contactPhone: state.contactPhone,
                contactEmail: state.contactEmail
              };
            })
          };
        case "closeBookingModal":
          return {
            ...state,
            bookingModalStatus: "closed",
            timeslotID: null,
            contactName: "",
            contactPhone: "",
            contactEmail: "",
          };
        case "openBookingModal":
          return {
            ...state,
            bookingModalStatus: "opened",
            timeslotID: action.timeslotID
          };
        case "closeReviewingModal":
          return {
            ...state,
            reviewingModalStatus: "closed",
            timeslotID: null,
            contactName: "",
            contactPhone: "",
            contactEmail: ""
          };
        case "openReviewingModal":
          const { contactName, contactPhone } = state.timeslots.find(
            ({ id }) => id === action.timeslotID
          ) || { contactName: "y", contactPhone: "u" };
          return {
            ...state,
            reviewingModalStatus: "opened",
            timeslotID: action.timeslotID,
            contactName,
            contactPhone
          };
        default:
          return state;
      }
    },
    {
      timeslots: initialTimeSlots,
      bookingModalStatus: "closed",
      reviewingModalStatus: "closed",
      contactName: "",
      contactPhone: "",
      timeslotID: null
    }
  );
  const {
    timeslots,
    bookingModalStatus,
    reviewingModalStatus,
    contactName,
    contactPhone,
    contactEmail
  } = state;

  const [avShow, setAvShow] = useState(false);
  const [bkdShow, setBkdShow] = useState(false);

  function onCloseBookingModal(e) {
    dispatch({ type: "closeBookingModal" });
  }
  function onOpenBookingModal(e) {
    const timeslotID = parseInt(e.target.getAttribute("data-timeslot-id"), 10);
    dispatch({ type: "openBookingModal", timeslotID });
  }
  function onOpenReviewingModal(e) {
    const timeslotID = parseInt(e.target.getAttribute("data-timeslot-id"), 10);
    dispatch({ type: "openReviewingModal", timeslotID });
  }
  function onCloseReviewingModal() {
    dispatch({ type: "closeReviewingModal" });
  }
  function onFormFieldChange(e) {
    dispatch({
      type: "inputChange",
      fieldName: e.target.name,
      fieldValue: e.target.value
    });
  }
  function onBookTimeSlot(e) {
    e.preventDefault();
    if (contactName === "") {
      return;
    } else if (contactPhone === "") {
      return;
    }
    dispatch({ type: "bookTimeSlot" });
    dispatch({ type: "closeBookingModal" });
  }
  function onUpdateTimeSlot(e) {
    e.preventDefault();
    dispatch({ type: "bookTimeSlot" });
    dispatch({ type: "closeReviewingModal" });
  }
  return (
    <>
        <Container>
            <Row className="justify-content-center">
            {timeslots.map(({ id, startTime, endTime, booked }) => {
                if (!booked) {
                return (
                    <Col sm={8} key={id}>
                    <Card body key={id}>
                        <Card.Title tag="h5">{`${startTime} - ${endTime}`}</Card.Title>
                        <Button
                        variant="primary"
                        onClick={() => setAvShow(true)}
                        data-timeslot-id={id}
                        block
                        >
                        <b>Book This Time Slot</b>
                        </Button>
                    </Card>
                    </Col>
                );
                }
                return (
                <Col sm={8} key={id}>
                    <Card body key={id} className="bg-danger" outline>
                    <Card.Title className="text-white" tag="h5">{`${startTime} - ${endTime}`}</Card.Title>
                    <Button
                        variant="outline-light"
                        onClick={() => setBkdShow(true)}
                        data-timeslot-id={id}
                        block
                    >
                        <b>Time Slot Already Booked</b>
                    </Button>
                    </Card>
                </Col>
                );
            })}
            </Row>

            <Modal show={avShow} onHide={() => setAvShow(false)}
            className="bookingModal"
            >
            <Modal.Header closeButton>
                Please Enter Your Contact Information.
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onBookTimeSlot}>
                <Form.Group>
                    <Form.Label for="contactName">Your Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="contactName"
                    id="contactName"
                    placeholder="First and Last Name"
                    onChange={onFormFieldChange}
                    value={contactName}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="contactPhone">Your Phone Number</Form.Label>
                    <Form.Control
                    type="tel"
                    name="contactPhone"
                    id="contactPhone"
                    placeholder="1-(555)-555-5555"
                    onChange={onFormFieldChange}
                    value={contactPhone}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="contactEmail">Your Email</Form.Label>
                    <Form.Control
                    type="text"
                    name="contactEmail"
                    id="contactEmail"
                    placeholder="name@email.com"
                    onChange={onFormFieldChange}
                    value={contactEmail}
                    />
                </Form.Group>
                <Button
                    type="submit"
                    variant="primary"
                    className="mx-1"
                    onClick={onBookTimeSlot}
                >
                    Book This Time Slot
                </Button>
                <Button
                    variant="secondary"
                    className="mx-1"
                    onClick={() => setAvShow(false)}
                >
                    Nevermind
                </Button>
                </Form>
            </Modal.Body>
            </Modal>

            <Modal show={bkdShow} onHide={() => setBkdShow(false)}
            className="reviewingModal"
            >
            <Modal.Header closeButton>
                Booked Session
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onUpdateTimeSlot}>
                <Form.Group>
                    <Form.Label for="contactName2">Your Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="contactName"
                    id="contactName2"
                    placeholder="First and Last Name"
                    onChange={onFormFieldChange}
                    value={contactName}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="contactPhone2">Your Phone Number</Form.Label>
                    <Form.Control
                    type="tel"
                    name="contactPhone"
                    id="contactPhone2"
                    placeholder="1-(555)-555-5555"
                    onChange={onFormFieldChange}
                    value={contactPhone}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="contactEmail2">Your Email</Form.Label>
                    <Form.Control
                    type="text"
                    name="contactEmail"
                    id="contactEmail2"
                    placeholder="name@email.com"
                    onChange={onFormFieldChange}
                    value={contactEmail}
                    />
                </Form.Group>
                <Button
                    type="submit"
                    variant="primary"
                    className="mx-1"
                    onClick={onUpdateTimeSlot}
                >
                    Save Updates
                </Button>
                <Button
                    variant="secondary"
                    className="mx-1"
                    onClick={() => setBkdShow(false)}
                >
                    Nevermind
                </Button>
                </Form>
            </Modal.Body>
            </Modal>
        </Container>
    </>
  );
}

export default Sessions;
