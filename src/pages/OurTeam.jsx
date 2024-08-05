import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import doc1 from "../assets/testimonialDoc1.jpeg";
import doc2 from "../assets/testimonialDoc2.jpeg";

import { useEffect } from "react";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mainDiv">
      <Container>
        <div className="topPage">
          <h1>Our Team</h1>
          <p>
            <FontAwesomeIcon icon={faHouse} style={{ marginRight: "5px" }} />
            <Link to="/">Home</Link> / Our Team
          </p>
        </div>
        <div className="doctor  p-5 my-5">
          <Container className="my-3">
            <div className="news-content text-center">
              <div className="cards d-flex gap-3">
                <Row className="gy-4 py-3 ">
                  <Col md={4} sm={6}>
                    <Card
                      className="shadow"
                      style={{ width: "100%", padding: "20px", border: "none" }}
                    >
                      <div className="imgCard">
                        <Card.Img variant="top" src={doc1} />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          <h2>Dr. Addition Smith</h2>
                        </Card.Title>
                        <Card.Text>Cardiologist</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} sm={6}>
                    <Card
                      className="shadow"
                      style={{ width: "100%", padding: "20px", border: "none" }}
                    >
                      <div className="imgCard">
                        <Card.Img variant="top" src={doc2} />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          <h2>Dr. Addition Smith</h2>
                        </Card.Title>
                        <Card.Text>Chiropractor</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} sm={6}>
                    <Card
                      className="shadow"
                      style={{ width: "100%", padding: "20px", border: "none" }}
                    >
                      <div className="imgCard">
                        <Card.Img variant="top" src={doc2} />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          <h2>Dr. Addition Smith</h2>
                        </Card.Title>
                        <Card.Text>Dentist</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} sm={6}>
                    <Card
                      className="shadow"
                      style={{ width: "100%", padding: "20px", border: "none" }}
                    >
                      <div className="imgCard">
                        <Card.Img variant="top" src={doc2} />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          <h2>Dr. Addition Smith</h2>
                        </Card.Title>
                        <Card.Text>Dentist</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} sm={6}>
                    <Card
                      className="shadow"
                      style={{ width: "100%", padding: "20px", border: "none" }}
                    >
                      <div className="imgCard">
                        <Card.Img variant="top" src={doc2} />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          <h2>Dr. Addition Smith</h2>
                        </Card.Title>
                        <Card.Text>Dentist</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} sm={6}>
                    <Card
                      className="shadow"
                      style={{ width: "100%", padding: "20px", border: "none" }}
                    >
                      <div className="imgCard">
                        <Card.Img variant="top" src={doc2} />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          <h2>Dr. Addition Smith</h2>
                        </Card.Title>
                        <Card.Text>Dentist</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
