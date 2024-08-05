import { Container, Image, Button, Card } from "react-bootstrap";
import docOne from "../assets/about1.jpg";
import docTwo from "../assets/about2.jpg";
import docThree from "../assets/about3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyringe,
  faBed,
  faTruckMedical,
  faDroplet,
  faCalendarDays,
  faChevronRight,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./pages.css";

import shape1 from "../assets/shape1.png";
import shape2 from "../assets/shape2.png";
import shape3 from "../assets/shape6.png";
import shape4 from "../assets/shape4.png";

import doc1 from "../assets/testimonialDoc1.jpeg";
import doc2 from "../assets/testimonialDoc2.jpeg";
import doc3 from "../assets/testimonialDoc3.jpeg";

import news1 from "../assets/LatestNews1.jpg";
import news2 from "../assets/LatestNews2.jpg";
import news3 from "../assets/LatestNews3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import Doc1 from "../assets/testimonialDoc1.jpeg";
import Doc2 from "../assets/testimonialDoc2.jpeg";
import Doc3 from "../assets/testimonialDoc3.jpeg";
import Doc4 from "../assets/testimonialDoc4.jpeg";
import Doc5 from "../assets/testimonialDoc5.jpeg";
import Doc6 from "../assets/testimonialDoc6.jpeg";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mainDiv">
      <div className="topPage">
        <h1>About Us</h1>
        <p>
          <FontAwesomeIcon icon={faHouse} style={{ marginRight: "5px" }} />
          <Link to="/">Home</Link> / About Us
        </p>
      </div>
      <Container>
        <div className="aboutUs d-flex position-relative">
          <div className="images pe-3">
            <div className="topImg ">
              <Image className="imgOne" src={docOne} alt="doc" fluid />
              <Image className="imgTwo" src={docTwo} alt="doc" fluid />
            </div>
            <div className="btmImg d-flex">
              <Image className="imgThree" src={docThree} alt="doc" fluid />
              <h2 className="imgFour">
                <p>20</p>
                Year Experience
              </h2>
            </div>
          </div>
          <div className="info  ps-3">
            <div className="topInfo">
              <h3>About Us</h3>
              <h1>The Great Place Of Medical Hospital Center</h1>
              <p>
                We provide the special tips and advice’s of heath care treatment
                and high level of best technology involve in the our hospital.
              </p>
            </div>
            <div className="row btminfo">
              <div className="col-md-6 mb-4">
                <div className="info-box">
                  <FontAwesomeIcon icon={faSyringe} />
                  Medical Treatment
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="info-box">
                  <FontAwesomeIcon icon={faTruckMedical} />
                  Emergency Help
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="info-box">
                  <FontAwesomeIcon icon={faBed} />
                  Qualified Doctors
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="info-box">
                  <FontAwesomeIcon icon={faDroplet} />
                  Best Professionals
                </div>
              </div>
            </div>
          </div>
          <img src={shape1} alt="shape1" className="shape shapeOne" />
          <img src={shape2} alt="shape1" className="shape shapeTwo" />
          <img src={shape4} alt="shape4" className="shape shape4" />
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
      <Container className="my-3">
        <div className="testimonial position-relative">
          <div className="headTest mb-5">
            <h2>Testimonial</h2>
            <h1>See What Are The Patients Saying About us</h1>
          </div>
          <div className="contain d-flex text-center ">
            <div className="pics shadow">
              <div className="top">
                <Image src={Doc1} fluid />
              </div>
              <div className="topMid d-flex justify-content-center">
                <Image src={Doc2} fluid />
                <Image src={Doc3} fluid />
              </div>
              <div className="btmMid d-flex justify-content-center">
                <Image src={Doc4} fluid />
                <Image src={Doc5} fluid />
              </div>
              <div className="btm">
                <Image src={Doc6} fluid />
              </div>
            </div>
            <div className="testiSlider ">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="position-relative">
                  <span>,,</span>
                  <div className="testSlideTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur qui ab ducimus culpa maxime placeat aliquam
                  </div>
                  <div className="testSlideBtm">
                    <h2>Jhon doe</h2>
                    <h4>Patient</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="position-relative">
                  <span>,,</span>
                  <div className="testSlideTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur qui ab ducimus culpa maxime placeat aliquam
                  </div>
                  <div className="testSlideBtm">
                    <h2>Jhon doe</h2>
                    <h4>Patient</h4>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide className="position-relative">
                  <span>,,</span>
                  <div className="testSlideTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur qui ab ducimus culpa maxime placeat aliquam
                  </div>
                  <div className="testSlideBtm">
                    <h2>Jhon doe</h2>
                    <h4>Patient</h4>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide className="position-relative">
                  <span>,,</span>
                  <div className="testSlideTop">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur qui ab ducimus culpa maxime placeat aliquam
                  </div>
                  <div className="testSlideBtm">
                    <h2>Jhon doe</h2>
                    <h4>Patient</h4>
                  </div>
                </SwiperSlide>{" "}
              </Swiper>
            </div>
            <img src={shape1} alt="shape1" className="shape shapeOne" />
            <img src={shape4} alt="shape4" className="shape shape4" />
            <img src={shape3} alt="shape1" className="shape shapeThree" />
            <img src={shape2} alt="shape1" className="shape shapeTwo" />
          </div>
        </div>
      </Container>
      <div className="aboutLates endBackground">
        <Container className="my-3 p-3">
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
    </div>
  );
};

export default About;
