import React from "react";
import { Formik, Form} from "formik";
import { object, string, ref } from "yup";
import TextField from '../../components/TextField';
import {Row,Col,Button} from 'react-bootstrap';

const RegisterValidation = object().shape({
  firstname: string().required("Required"),
  lastname: string().required("Required"),
  username: string().required("Required"),
  email: string()
    .required("Valid email required")
    .email("Valid email required"),
  password: string().min(8, "Required").required("Required"),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
  phone:string().min(10, "Required").max(13, "Phone number exceeded")
  .required("Required")
});



function Register() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
      <Formik
        initialValues={{
          firstname: "",
          lastname:"",
          username:"",
          phone:"",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterValidation}
      >
        {() => {
          return (
            <Form className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8">
              <Row>
                <Col xs={12} sm={6}><TextField name="firstname" label="First Name" /></Col>
                <Col xs={12} sm={6}><TextField name="lastname" label="Last Name" /></Col>
                <Col xs={12} sm={6}><TextField name="username" label="User Name" /></Col>
                <Col xs={12} sm={6}><TextField name="phone" label="Phone Number" /></Col>
                <Col xs={12}><TextField name="email" label="Email" /></Col>
                <Col xs={12} sm={6}><TextField name="password" label="Password" type="password" /></Col>
                <Col xs={12} sm={6}><TextField
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                  /></Col>
                  <div className="flex items-center justify-between">
                    <Button
                      className="background-blue text-white border-blue"
                      type="submit"
                    >
                      Register
                    </Button>
                  </div>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Register;