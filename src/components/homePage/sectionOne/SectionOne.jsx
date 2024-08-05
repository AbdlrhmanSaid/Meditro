import "./homePage.css";
import docImg from "../../../assets/doctor.7c2bc96d67d3eba1d64a.png";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";
import shape3 from "../../../assets/shape3.png";
import shape4 from "../../../assets/shape4.png";

import { Button, Image, Container } from "react-bootstrap";

import { useNavigate } from "react-router";

const SectionOne = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mainPage">
        <Container className="d-flex main">
          <div className="text">
            <h6>We Provide All Health Care Solution</h6>
            <h1>Protect Your Health And Take Care To Of Your Health</h1>
            <Button
              onClick={() => {
                navigate("/about");
              }}
            >
              Read More
            </Button>
          </div>
          <div className="imgDiv">
            <Image src={docImg} fluid />
          </div>
          <img src={shape1} alt="shape1" className="shape shapeOne" />
          <img src={shape2} alt="shape1" className="shape shapeTwo" />
          <img src={shape3} alt="shape1" className="shape shapeThree" />
          <img src={shape4} alt="shape4" className="shape shape4" />
        </Container>
        <div className="wave"></div>
      </div>
    </>
  );
};

export default SectionOne;
