import { Container, Image } from "react-bootstrap";
import "./testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import Doc1 from "../../../assets/testimonialDoc1.jpeg";
import Doc2 from "../../../assets/testimonialDoc2.jpeg";
import Doc3 from "../../../assets/testimonialDoc3.jpeg";
import Doc4 from "../../../assets/testimonialDoc4.jpeg";
import Doc5 from "../../../assets/testimonialDoc5.jpeg";
import Doc6 from "../../../assets/testimonialDoc6.jpeg";

import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";
import shape3 from "../../../assets/shape6.png";
import shape4 from "../../../assets/shape5.png";

const Testimonial = () => {
  return (
    <Container className="my-3">
      <div className="testimonial position-relative">
        <div className="headTest mb-5">
          <h2>Testimonial</h2>
          <h1>See What Are The Patients Saying About us</h1>
        </div>
        <div className="contain d-flex text-center">
          <div className="pics">
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
  );
};

export default Testimonial;
