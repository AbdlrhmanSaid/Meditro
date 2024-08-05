import "./about.css";
import { Container, Image, Button } from "react-bootstrap";
import docOne from "../../../assets/about1.jpg";
import docTwo from "../../../assets/about2.jpg";
import docThree from "../../../assets/about3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyringe,
  faBed,
  faTruckMedical,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";
import shape4 from "../../../assets/shape4.png";

const Aboutus = () => {
  const navigate = useNavigate();
  return (
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
          <Button
            onClick={() => {
              navigate("/about");
            }}
          >
            Read More
          </Button>
        </div>
        <img src={shape1} alt="shape1" className="shape shapeOne" />
        <img src={shape2} alt="shape1" className="shape shapeTwo" />
        <img src={shape4} alt="shape4" className="shape shape4" />
      </div>
    </Container>
  );
};

export default Aboutus;
