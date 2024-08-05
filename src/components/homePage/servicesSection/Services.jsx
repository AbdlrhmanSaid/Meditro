import { Container, Button, Image } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./services.css";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcaseMedical,
  faSyringe,
  faTruckMedical,
  faStethoscope,
  faPumpMedical,
} from "@fortawesome/free-solid-svg-icons";

import shape1 from "../../../assets/zigzag.png";
import shape2 from "../../../assets/shape5.png";
import shape3 from "../../../assets/shape6.png";
import shape4 from "../../../assets/shape4.png";

const Services = () => {
  return (
    <Container>
      <div className="main d-flex my-5">
        <div className="text p-3">
          <h2>Services</h2>
          <h1>We Cover A Big Variety Of Medical Services</h1>
          <p>
            We provide the special tips and advice’s of heath care treatment and
            high level of best.
          </p>
          <button> All Services </button>
        </div>
        <div className="slider  mx-auto my-4 position-relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <div className="head">
                <h2>
                  <FontAwesomeIcon icon={faBriefcaseMedical} />
                </h2>
              </div>
              <div className="body">
                <h1>Surgy</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit saepe ad voluptatem
                </p>
                <Button variant="primary">Learn More</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="head">
                <h2>
                  <FontAwesomeIcon icon={faSyringe} />
                </h2>
              </div>
              <div className="body">
                <h1>Vaccine</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit saepe ad voluptatem
                </p>
                <Button variant="primary">Learn More</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="head">
                <h2>
                  <FontAwesomeIcon icon={faTruckMedical} />
                </h2>
              </div>
              <div className="body">
                <h1>Emergency </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit saepe ad voluptatem
                </p>
                <Button variant="primary">Learn More</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="head">
                <h2>
                  <FontAwesomeIcon icon={faStethoscope} />
                </h2>
              </div>
              <div className="body">
                <h1>Diagnostics</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit saepe ad voluptatem
                </p>
                <Button variant="primary">Learn More</Button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="head">
                <h2>
                  <FontAwesomeIcon icon={faPumpMedical} />{" "}
                </h2>
              </div>
              <div className="body">
                <h1>Treatment</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit saepe ad voluptatem
                </p>
                <Button variant="primary">Learn More</Button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <img src={shape1} alt="shape1" className="shape shapeOne" />
        <img src={shape2} alt="shape1" className="shape shapeTwo" />
        <img src={shape3} alt="shape1" className="shape shapeThree" />
        <img src={shape4} alt="shape4" className="shape shape4" />
      </div>
    </Container>
  );
};

export default Services;
