import { Form, Button, FloatingLabel } from "react-bootstrap";
import logoImg from "../assets/logo.png";
import { useNavigate } from "react-router";

import { useEffect } from "react";

const LoginReg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="mainDiv">
      <div className="parentDiv bookingForm  p-3">
        <div className="form m-auto" style={{ background: "#eee" }}>
          <img src={logoImg} className="imgLog" />
          <Form className="my-3">
            <FloatingLabel label="Email address" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel label="password" className="mb-3">
              <Form.Control type="password" placeholder="password" />
            </FloatingLabel>
            <Button className="logBtn">Log in</Button>
            <p className="text-center h6 my-3">Dont Have Any Account?</p>
            <Button
              className="regBtn"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginReg;
