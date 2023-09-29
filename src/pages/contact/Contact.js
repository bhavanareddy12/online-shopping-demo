import { Field } from 'formik';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import envelope from '../../assets/images/envelope.png';
import { Formik, Form} from "formik";
import { object, string } from "yup";
import TextField from '../../components/TextField';
import {Button} from 'react-bootstrap';
import fieldData from  './formData';
import './Styles.css';

const ContactValidation = object().shape({
    firstname: string().required("Required"),
    email: string()
      .required("Valid email required")
      .email("Valid email required"),
    message: string().max(200, "Length exceeded").required("Required"),
  });

const Contact = () => {
    const handleSubmit = (values) => {
        console.log(values);
      };

    return(
        <Container className='my-5'>
            <Row>
                <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'><img src={envelope} /></Col>
                <Col xs={12} md={6} className='contact-form rounded'>
                    <h4>GET IN TOUCH</h4>
                    <Formik
        initialValues={{
          name:"",
          email: "",
          message: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ContactValidation}
      >
        {() => {
          return (
            <Form className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8">
              <TextField name="name" label="Name" />
              <TextField name="email" label="Email" />
              <TextField name="message" label="Message" />
                  <div className="flex items-center justify-between">
                    <Button
                      className="background-blue text-white border-blue"
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
            </Form>
          );
        }}
      </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact