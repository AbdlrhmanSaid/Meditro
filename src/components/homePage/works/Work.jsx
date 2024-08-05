import "./works.css";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";
import shape3 from "../../../assets/shape3.png";
import shape4 from "../../../assets/shape4.png";

import { useNavigate } from "react-router";

const Work = () => {
  const navigate = useNavigate();
  return (
    <div className="parent my-5 p-5">
      <div className="head my-3 p-1">
        <h2>Working Process</h2>
        <h1>How we works?</h1>
      </div>
      <Container className="my-3 p-1 position-relative">
        <div className="boxs d-flex gap-3">
          <div className="box boxOne">
            <div className="head">
              <h1>01</h1>
            </div>
            <div className="boxBody">
              <h4>Make Appointmnet</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
            </div>
            <div className="boxFooter">
              <Button
                onClick={() => {
                  navigate("/booking");
                }}
              >
                <span>Veiw More</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
          <div className="box top">
            <div className="head">
              <h1>02</h1>
            </div>
            <div className="boxBody">
              <h4>Take Treatment</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
            </div>
            <div className="boxFooter">
              <Button
                onClick={() => {
                  navigate("/booking");
                }}
              >
                <span>Veiw More</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
          <div className="box ">
            <div className="head">
              <h1>03</h1>
            </div>
            <div className="boxBody">
              <h4>Registration</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
            </div>
            <div className="boxFooter">
              <Button
                onClick={() => {
                  navigate("/booking");
                }}
              >
                <span>Veiw More</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
        </div>
        <img src={shape1} alt="shape1" className="shape shapeOne" />
        <img src={shape2} alt="shape1" className="shape shapeTwo" />
        <img src={shape3} alt="shape1" className="shape shapeThree" />
        <img src={shape4} alt="shape1" className="shape shapeFour" />
      </Container>
    </div>
  );
};

export default Work;
