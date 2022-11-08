import React from "react";
import { Jumbotron, Form, Button, FormGroup, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form-style.css";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmDt,
  frmDataErro,
}) => {
  console.log("frmDt : ", frmDt);

  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <FormGroup as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmDt.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataErro.subject && "Subject is required!"}
            </Form.Text>
          </Col>
        </FormGroup>
        <FormGroup as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup as={Row}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={frmDt.detail}
            onChange={handleOnChange}
            required
          />
        </FormGroup>
        <Button type="submit" variant="info" block>
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataErro: PropTypes.object.isRequired,
};
