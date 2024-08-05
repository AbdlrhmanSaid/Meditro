import { Container, Button, Card, Image } from "react-bootstrap";
import news1 from "../../../assets/LatestNews1.jpg";
import news2 from "../../../assets/LatestNews2.jpg";
import news3 from "../../../assets/LatestNews3.jpg";

import doc1 from "../../../assets/testimonialDoc1.jpeg";
import doc2 from "../../../assets/testimonialDoc2.jpeg";
import doc3 from "../../../assets/testimonialDoc3.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./news.css";
const News = () => {
  return (
    <Container className="my-3">
      <div className="news-content text-center">
        <div className="news-head mb-5">
          <h2>Latest News</h2>
          <h1>Our Latest News</h1>
        </div>
        <div className="cards d-flex gap-3">
          <Card className="border-0 shadow" style={{ padding: "20px" }}>
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
          <Card className="border-0 shadow" style={{ padding: "20px" }}>
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
          <Card className="border-0 shadow" style={{ padding: "20px" }}>
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
  );
};

export default News;
