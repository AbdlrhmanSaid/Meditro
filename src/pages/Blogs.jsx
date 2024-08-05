import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHouse,
  faCalendarDays,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Pagination,
  Image,
} from "react-bootstrap";

import blog1 from "../assets/LatestNews1.jpg";
import blog2 from "../assets/LatestNews2.jpg";
import blog3 from "../assets/LatestNews3.jpg";

import doc1 from "../assets/testimonialDoc1.jpeg";
import doc2 from "../assets/testimonialDoc2.jpeg";
import doc3 from "../assets/testimonialDoc3.jpeg";

import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const blogs = [
    {
      image: blog1,
      doc: doc1,
      title: "Dental Care for Women is very important",
      author: "John Doe",
      date: "28 July 2021",
    },
    {
      image: blog2,
      doc: doc2,
      title: "In this hospital there are special surgeon",
      author: "Peter Packer",
      date: "28 July 2021",
    },
    {
      image: blog3,
      doc: doc3,
      title: "Why is Skin Surgeon Considered Underrated",
      author: "Samiya Alhayek",
      date: "27 July 2021",
    },
    {
      image: blog1,
      doc: doc1,
      title: "Understand Health Before You Regret",
      author: "John Doe",
      date: "28 July 2021",
    },
    {
      image: blog2,
      doc: doc2,
      title: "Health Will Be A Thing Of The Past And Here",
      author: "Peter Packer",
      date: "28 July 2021",
    },
    {
      image: blog3,
      doc: doc3,
      title: "Can you get a diflucan prescription online?",
      author: "Samiya Alhayek",
      date: "27 July 2021",
    },
    {
      image: blog1,
      doc: doc1,
      title: "Ten Gigantic Influences Of Health",
      author: "John Doe",
      date: "28 July 2021",
    },
    {
      image: blog2,
      doc: doc2,
      title: "Why is Skin Surgeon Considered Underrated",
      author: "Peter Packer",
      date: "28 July 2021",
    },
    {
      image: blog3,
      doc: doc3,
      title: "Everyone need to go Dentist regularly",
      author: "Samiya Alhayek",
      date: "27 July 2021",
    },
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
      <div className="blogBox endBackground">
        <Container className="py-5 ">
          <Row>
            {blogs.map((blog, index) => (
              <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                <Card
                  style={{ padding: "20px" }}
                  className=" border-0 shadow h-100"
                >
                  <Card.Img variant="top" src={blog.image} />
                  <Card.Body>
                    <Card.Title className="d-flex">
                      <div className="info" style={{ fontSize: "14px" }}>
                        <span className="mx-1">
                          <Image
                            src={blog.doc}
                            fluid
                            roundedCircle
                            style={{ width: "20px" }}
                          />
                        </span>
                        <span>{blog.author}</span>
                      </div>
                      <div className="date" style={{ fontSize: "14px" }}>
                        <span className="mx-1">
                          <FontAwesomeIcon icon={faCalendarDays} />
                        </span>
                        <span>{blog.date}</span>
                      </div>
                    </Card.Title>
                    <Card.Text>{blog.title}</Card.Text>
                    <Button variant="primary">
                      <span>Read More</span>
                      <span>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination className="justify-content-center">
            <Pagination.Prev>Prev</Pagination.Prev>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next>Next</Pagination.Next>
          </Pagination>
        </Container>
      </div>
    </div>
  );
};

export default Blogs;
