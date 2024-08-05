import React from "react";
import { Container, Image, Button, FloatingLabel, Form } from "react-bootstrap";
import logoImg from "../../assets/logo.png";

import shape1 from "../../assets/shape1.png";
import shape2 from "../../assets/shape2.png";
import shape3 from "../../assets/shape3.png";
import shape4 from "../../assets/shape4.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer position-relative">
      <div className="topFoot"></div>
      <Container>
        <div className="boxsFoot py-5  d-flex">
          <div className="boxsFoot1 footBox ">
            <Image src={logoImg} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quod quis nam hic repellat .
            </p>
            <h2>Contact us</h2>
            <p>01000000000</p>
          </div>
          <div className="boxsFoot2 footBox ">
            <h2>Quick Links</h2>
            <p>About us</p>
            <p>Services</p>
            <p>Booking</p>
            <p>Faq's</p>
            <p>Blogs</p>
          </div>
          <div className="boxsFoot3 footBox ">
            <h2>Our Service</h2>
            <p>Cardiac Clinc</p>
            <p>Massege Therapy</p>
            <p>Massege </p>
          </div>
          <div className="boxsFoot4 footBox ">
            <h2>Subscribe</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <Button>Subscribe</Button>
          </div>
        </div>
        <hr />
        <h6 className="text-center">
          Copyright © 2024 Medical Solutions. All rights reserved.
        </h6>

        <img src={shape1} alt="shape1" className="shape shapeOne" />
        <img src={shape2} alt="shape1" className="shape shapeTwo" />
        <img src={shape3} alt="shape1" className="shape shapeThree" />
        <img src={shape4} alt="shape4" className="shape shape4" />
      </Container>
    </div>
  );
};

export default Footer;
