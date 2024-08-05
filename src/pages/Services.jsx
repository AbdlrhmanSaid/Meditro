import React from "react";
import { Container, Button, Row, Col, Card, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBriefcaseMedical,
  faSyringe,
  faTruckMedical,
  faStethoscope,
  faPumpMedical,
  faHouse,
  faChevronRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import doc1 from "../assets/testimonialDoc1.jpeg";
import doc2 from "../assets/testimonialDoc2.jpeg";
import doc3 from "../assets/testimonialDoc3.jpeg";

import news1 from "../assets/LatestNews1.jpg";
import news2 from "../assets/LatestNews2.jpg";
import news3 from "../assets/LatestNews3.jpg";

import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const boxes = [
    {
      icon: faBriefcaseMedical,
      title: "Surgy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ad voluptatem",
    },
    {
      icon: faSyringe,
      title: "Injections",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ad voluptatem",
    },
    {
      icon: faTruckMedical,
      title: "Emergency",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ad voluptatem",
    },
    {
      icon: faStethoscope,
      title: "Consultation",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ad voluptatem",
    },
    {
      icon: faPumpMedical,
      title: "Equipment",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ad voluptatem",
    },
    {
      icon: faBriefcaseMedical,
      title: "Surgy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe ad voluptatem",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="mainDiv">
      <Container>
        <div className="topPage">
          <h1>Services</h1>
          <p>
            <FontAwesomeIcon icon={faHouse} style={{ marginRight: "5px" }} />
            <Link to="/">Home</Link> / Services
          </p>
        </div>
      </Container>
      <Container>
        <div className="services">
          <Row>
            {boxes.map((box, index) => (
              <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                <div className="box">
                  <div className="head">
                    <h2>
                      <FontAwesomeIcon icon={box.icon} />
                    </h2>
                  </div>
                  <div className="body">
                    <h1>{box.title}</h1>
                    <p>{box.text}</p>
                    <Button
                      variant="primary"
                      onClick={() => {
                        navigate("/services/details");
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <div className="history p-5 my-5">
        <Container>
          <div className="aboutBoxs d-flex gap-3 py-5">
            <div className="aboutbox">
              <h1>200</h1>
              <h2> Years With You</h2>
              <p>
                Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                libero.
              </p>
            </div>
            <div className="aboutbox">
              <h1>400</h1>
              <h2> Award</h2>
              <p>
                Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                libero.
              </p>
            </div>
            <div className="aboutbox">
              <h1>250</h1>
              <h2> Doctors</h2>
              <p>
                Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                libero.
              </p>
            </div>
            <div className="aboutbox">
              <h1>800</h1>
              <h2> Satisfied Client</h2>
              <p>
                Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                libero.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="doctor p-5 my-5">
        <Container className="my-3">
          <div className="news-content text-center">
            <div className="news-head mb-5">
              <h2>Our Doctors</h2>
              <h1>Meet Best Doctors</h1>
            </div>
            <div className="cards d-flex gap-3">
              <Card
                className="shadow"
                style={{ width: "18rem", padding: "20px", border: "none" }}
              >
                <Card.Img variant="top" src={doc1} />
                <Card.Body>
                  <Card.Title>
                    <h2>Dr. Addition Smith</h2>
                  </Card.Title>
                  <Card.Text>Cardiologist</Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="shadow"
                style={{ width: "18rem", padding: "20px", border: "none" }}
              >
                <Card.Img variant="top" src={doc2} />
                <Card.Body>
                  <Card.Title>
                    <h2>Dr. Addition Smith</h2>
                  </Card.Title>
                  <Card.Text>Chiropractor</Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="shadow"
                style={{ width: "18rem", padding: "20px", border: "none" }}
              >
                <Card.Img variant="top" src={doc3} />
                <Card.Body>
                  <Card.Title>
                    <h2>Dr. Addition Smith</h2>
                  </Card.Title>
                  <Card.Text>Dentist</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
      <Container className="my-3 p-3 endBackground">
        <div className="news-content text-center">
          <div className="news-head mb-5">
            <h2>Latest News</h2>
            <h1>Our Latest News</h1>
          </div>
          <div className="cards d-flex gap-3">
            <Card
              className="shadow"
              style={{ width: "18rem", padding: "20px", border: "none" }}
            >
              <Card.Img variant="top" src={news1} />
              <Card.Body>
                <Card.Title className="d-flex">
                  <div className="info" style={{ fontSize: "14px" }}>
                    <span className="mx-1">
                      <Image
                        src={doc1}
                        fluid
                        roundedCircle
                        style={{ width: "20px" }}
                      />
                    </span>
                    <span>Jhon doe</span>
                  </div>
                  <div className="date" style={{ fontSize: "14px" }}>
                    <span className="mx-1">
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                    <span>21 July 2021</span>
                  </div>
                </Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Button variant="primary">
                  <span>Read More</span>
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card
              className="shadow"
              style={{ width: "18rem", padding: "20px", border: "none" }}
            >
              <Card.Img variant="top" src={news2} />
              <Card.Body>
                <Card.Title className="d-flex">
                  <div className="info" style={{ fontSize: "14px" }}>
                    <span className="mx-1">
                      <Image
                        src={doc2}
                        fluid
                        roundedCircle
                        style={{ width: "20px" }}
                      />
                    </span>
                    <span>Jhon doe</span>
                  </div>
                  <div className="date" style={{ fontSize: "14px" }}>
                    <span className="mx-1">
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                    <span>21 July 2021</span>
                  </div>
                </Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Button variant="primary">
                  <span>Read More</span>
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </Button>
              </Card.Body>
            </Card>
            <Card
              className="shadow"
              style={{ width: "18rem", padding: "20px", border: "none" }}
            >
              <Card.Img variant="top" src={news3} />
              <Card.Body>
                <Card.Title className="d-flex">
                  <div className="info" style={{ fontSize: "14px" }}>
                    <span className="mx-1">
                      <Image
                        src={doc3}
                        fluid
                        roundedCircle
                        style={{ width: "20px" }}
                      />
                    </span>
                    <span>Jhon doe</span>
                  </div>
                  <div className="date" style={{ fontSize: "14px" }}>
                    <span className="mx-1">
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                    <span>21 July 2021</span>
                  </div>
                </Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
                <Button variant="primary">
                  <span>Read More</span>
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
