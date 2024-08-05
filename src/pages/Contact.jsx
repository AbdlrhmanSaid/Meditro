import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import {
  Container,
  Image,
  Button,
  FloatingLabel,
  Form,
  Card,
} from "react-bootstrap";

import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mainDiv">
      <Container>
        <div className="topPage">
          <h1>Contact Us</h1>
          <p>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} style={{ marginRight: "5px" }} />
              Home
            </Link>
            / Contact Us
          </p>
        </div>
      </Container>
      <div className="contactUs endBackground p-3">
        <Container>
          <div className="contactBox d-flex justify-content-center bg-white p-3  mb-3 shadow rounded gap-3">
            <div className="contactForm ">
              <FloatingLabel label="Your Name" className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </FloatingLabel>
              <FloatingLabel label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Phone number"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Phone number" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Type message"
                className="mb-3"
              >
                <Form.Control type="textarea" placeholder="Type message" />
              </FloatingLabel>
              <Button className="regBtn">Submit</Button>
            </div>
            <div className="contactInfo">
              <Container className="h-100">
                <div className="contact-info  text-white p-4 ">
                  <h4>Contact Us For Any Informations</h4>
                  <div className="info-section my-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    <div>
                      <strong>Location</strong>
                      <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                    </div>
                  </div>
                  <div className="info-section my-3">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    <div>
                      <strong>Email & Phone</strong>
                      <p>
                        info@yourdomain.com
                        <br />
                        (+68) 120034509
                      </p>
                    </div>
                  </div>
                  <div className="info-section">
                    <FontAwesomeIcon icon={faGlobe} className="me-2" />
                    <div>
                      <strong>Follow Us</strong>
                      <div className="social-icons mt-2">
                        <FontAwesomeIcon icon={faTwitter} className="me-2" />
                        <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                        <FontAwesomeIcon icon={faInstagram} className="me-2" />
                        <FontAwesomeIcon icon={faFacebook} className="me-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
