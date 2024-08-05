import React from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questions = [
    "What are the symptoms of diabetes?",
    "How is high blood pressure treated?",
    "What is the cause of migraines?",
    "How to manage anxiety?",
    "What are the benefits of regular exercise?",
    "How to improve sleep quality?",
    "What is the impact of smoking on health?",
    "How to maintain a healthy diet?",
    "What are the early signs of cancer?",
    "How to prevent heart disease?",
    "What are the effects of alcohol on the liver?",
    "How to deal with stress?",
  ];
  return (
    <div className="mainDiv">
      <Container>
        <div className="topPage">
          <h1>Faq's</h1>
          <p>
            <FontAwesomeIcon icon={faHouse} style={{ marginRight: "5px" }} />
            <Link to="/">Home</Link> / Faq's
          </p>
        </div>
      </Container>
      <div className="faqContent p-5">
        <Row>
          {questions.map((question, index) => (
            <Col xs={12} md={6} key={index} className="mb-3">
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>{question}</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Faq;
