import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import '../Home/form.css'

function FormExample() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "f5cd2950-f856-4e23-b601-20c62c4cdc17",
            ...values,
          }),
        })
        .then(response => response.json())
        .then(data => {
          // Check if the form submission was successful
          if (data.success) {
            toast.success("Form submitted successfully!");
            // Optionally, you can clear the form fields after successful submission
            resetForm();
          } else {
            toast.error("Form submission failed. Please try again later.");
          }
        })
        .catch(error => {
          console.error("Error submitting form:", error);
          toast.error("An error occurred while submitting the form. Please try again later.");
        })
        .finally(() => {
          setSubmitting(false);
        });
      }}
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <Form noValidate onSubmit={handleSubmit} className="contact-form" style={{marginLeft:'100px', marginRight:'100px', border:'1px solid gray',padding:'15px'}}>
          <Form.Group as={Row} controlId="formName" className='tfield'>
            <Form.Label column sm={3} className="form-label" style={{marginTop:'50px'}}>Name</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={touched.name && !!errors.name}
                className='inputfiled'
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formEmail" className='tfield'>
            <Form.Label column sm={3} className="form-label" style={{marginTop:'50px'}}>Email</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
                className='inputfiled'
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} controlId="formPhoneNumber" className='tfield'>
            <Form.Label column sm={3} className="form-label" style={{marginTop:'50px'}}>Phone Number</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                className='inputfiled'
              />
              <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formSubject" className='tfield'>
            <Form.Label column sm={3} className="form-label" style={{marginTop:'50px'}}>Subject</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                isInvalid={touched.subject && !!errors.subject}
                className='inputfiled'
              />
              <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formMessage" className='tfield'>
            <Form.Label column sm={3} className="form-label" style={{marginTop:'50px'}}>Message</Form.Label>
            <Col sm={9}>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={values.message}
                onChange={handleChange}
                isInvalid={touched.message && !!errors.message}
                className='inputfiled'
              />
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Button type="submit" className="submit-button" disabled={isSubmitting} style={{marginLeft:'150px', marginTop:'50px'}}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;