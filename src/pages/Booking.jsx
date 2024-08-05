import { Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mainDiv">
      <div className="topPage">
        <h1>Booking</h1>
        <p>
          <Link to="/">
            {" "}
            <FontAwesomeIcon
              icon={faHouse}
              style={{ marginRight: "5px" }}
            />{" "}
            Home
          </Link>{" "}
          / Booking
        </p>
      </div>
      <div className="parentDiv bookingForm endBackground  p-3">
        <div className="form m-auto" style={{ background: "#eee" }}>
          <h2 className="mb-3">Book Appointment</h2>
          <Form>
            <Form.Select aria-label="Default select example" className="mb-5">
              <option>Selcet Department</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" className="mb-5">
              <option>Selcet Doctor</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control
              type="text"
              placeholder="Your Name"
              className="mb-5"
            />
            <Form.Control
              type="number"
              placeholder="Your Phone"
              className="mb-5"
            />
            <Form.Control
              type="date"
              placeholder="Your Date"
              className="mb-5"
            />
            <Button>Appointment Now</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
