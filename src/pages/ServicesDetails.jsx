import {
  Container,
  Image,
  Row,
  Col,
  ProgressBar,
  Accordion,
  Card,
  ListGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHouse, faCheck } from "@fortawesome/free-solid-svg-icons";
import imageW from "../assets/LatestNews1.jpg";

import { useEffect } from "react";

const ServicesDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const progressBars = [
    { label: "Advanced Technology", value: 96 },
    { label: "Certified Engineers", value: 79 },
    { label: "6 years Experience", value: 75 },
  ];
  const questions = [
    "How Doctor Can Ease Your Pain?",
    "How do I withdraw from a subject?",
    "Understand Doctor Before You Regret?",
    "What types of systems do you support?",
    "We Teach You How To Feel Better?",
    "How Can I Contact You?",
  ];

  return (
    <div className="mainDiv">
      <Container>
        <div className="topPage">
          <h1>Service Details</h1>
          <p>
            <FontAwesomeIcon icon={faHouse} style={{ marginRight: "5px" }} />
            <Link to="/">Home</Link> / Service Details
          </p>
        </div>
      </Container>
      <div className="details endBackground">
        <Container className="text-center py-5">
          <Image src={imageW} rounded className="m-auto" />
          <h2 className="title my-4">Why Medical Had Been So Popular Till</h2>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <Row>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="me-2 text-primary"
                  />{" "}
                  Then along come two they
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="me-2 text-primary"
                  />{" "}
                  That's just a little bit more than
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="me-2 text-primary"
                  />{" "}
                  Standard dummy text ever since
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="me-2 text-primary"
                  />{" "}
                  Simply dummy text of the printing
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="me-2 text-primary"
                  />{" "}
                  Make a type specimen book
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              {progressBars.map((bar, index) => (
                <div key={index} className="mb-3">
                  <h6 className="d-flex justify-content-between">
                    <span>{bar.label}</span>
                    <span>{bar.value}%</span>
                  </h6>
                  <ProgressBar now={bar.value} />
                </div>
              ))}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h5>Popular Questions</h5>
              <p>
                Standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <Accordion>
                {questions.map((question, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{question}</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ServicesDetails;
