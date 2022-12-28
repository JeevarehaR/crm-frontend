import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/Validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  details: "",
};
const initialFormError = {
  subject: false,
  issueDate: false,
  details: false,
};

export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErr, setFormErr] = useState(initialFormError);
  useEffect(() => {}, [formData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormErr(initialFormError);
    const isSubjectValid = await shortText(formData.subject);

    setFormErr({
      ...initialFormError,
      subject: !isSubjectValid,
    });

    console.log("Form Submit request recieved", formData);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={formData}
            formErr={formErr}
          />
        </Col>
      </Row>
    </Container>
  );
};
