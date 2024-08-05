import { Form, Button, FloatingLabel } from "react-bootstrap";
import logoImg from "../assets/logo.png";

import { useEffect } from "react";
const Reagister = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mainDiv">
      <div className="parentDiv bookingForm  p-3">
        <div className="form m-auto" style={{ background: "#eee" }}>
          <img src={logoImg} className="imgLog" />
          <Form className="my-3">
            <FloatingLabel label="First Name" className="mb-3">
              <Form.Control type="text" placeholder="First Name" />
            </FloatingLabel>
            <FloatingLabel label="Last Name" className="mb-3">
              <Form.Control type="text" placeholder="First Name" />
            </FloatingLabel>
            <FloatingLabel label="Email address" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel label="Phone Number" className="mb-3">
              <Form.Control type="number" placeholder="Phone Number" />
            </FloatingLabel>
            <FloatingLabel label="password" className="mb-3">
              <Form.Control type="password" placeholder="password" />
            </FloatingLabel>
            <Button className="logBtn">Register</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Reagister;
