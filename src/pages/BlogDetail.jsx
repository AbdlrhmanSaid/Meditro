import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHouse,
  faUser,
  faCalendarAlt,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import imageBlog from "../assets/blogDetails.jpg";
import imageBlog2 from "../assets/blogImg.jpg";
import imageBlog3 from "../assets/blogImg2.jpg";

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mainDiv">
      <Container>
        <div className="topPage">
          <h1>Blog Details</h1>
          <p>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} style={{ marginRight: "5px" }} />
              Home / Blog Details
            </Link>
          </p>
        </div>
      </Container>
      <Container className="blogDetail endBackground py-5">
        <Row>
          <Col md={12}>
            <Card className="mb-4">
              <Card.Img variant="top" src={imageBlog} />
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="me-2 text-primary"
                  />
                  <span>Samiya Alhayek</span>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="ms-4 me-2 text-primary"
                  />
                  <span>28 July 2021</span>
                </div>
                <Card.Title>Precious Tips To Help You Get Better.</Card.Title>
                <Card.Text>
                  You just need to enter the keyword and select the keyword type
                  to generate a list of citable ideas and suggestions. If you're
                  not satisfied with the results, you can always hit the refresh
                  button to generate a new list of unique titles.
                </Card.Text>
                <blockquote className="blockquote mb-4">
                  <p className="mb-0">
                    Once you've gotten all the titles and have chosen the best
                    one, the next thing you need to do is to craft a magnetic
                    content. Great content marketers excel at creating content.
                  </p>
                </blockquote>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Card.Text>
                <Row className="mt-4">
                  <Col md={4}>
                    <Card.Img src={imageBlog2} className="img-thumbnail" />
                  </Col>
                  <Col md={4}>
                    <Card.Img src={imageBlog3} className="img-thumbnail" />
                  </Col>
                  <Col md={4}>
                    <Card.Img src={imageBlog2} className="img-thumbnail" />
                  </Col>
                </Row>
                <Card.Text className="mt-4">
                  You just need to enter the keyword and select the keyword type
                  to generate a list of citable ideas and suggestions. If you're
                  not satisfied with the results, you can always hit the refresh
                  button to generate a new list of unique titles.
                </Card.Text>
                <Card.Text>
                  Industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div>
                    <span className="me-2">Tags:</span>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                    >
                      Health
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                    >
                      Growth
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      Life
                    </Button>
                  </div>
                  <Button variant="outline-primary">
                    <FontAwesomeIcon icon={faShareAlt} className="me-2" /> Share
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetail;
