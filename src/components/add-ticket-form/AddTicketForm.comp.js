import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";
import { shortText } from "../../utils/Validation";

export const AddTicketForm = ({
  handleOnChange,
  frmDt,
  formErr,
  handleOnSubmit,
}) => {
  //   console.log(frmDt);
  return (
    <div className="add-new-ticket mt-3 bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="subject"
              name="subject"
              value={frmDt.subject}
              onChange={handleOnChange}
              placeholder="Enter Subject"
            />
            <Form.Text className="text-danger">
              {formErr.subject && "subject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.date}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Detail</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            value={frmDt.details}
            rows="5"
            onChange={handleOnChange}
          />
        </Form.Group>
        <br />
        <Button type="submit" variant="info" className="w-100">
          Login
        </Button>
      </Form>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  formErr: PropTypes.object.isRequired,
};
