import "./bookapp.css";
import phone from "../../../assets/phone.png";
import woman from "../../../assets/woman.png";
import { Container, Form, Image, Button } from "react-bootstrap";
const BookApp = () => {
  return (
    <Container className="my-3">
      <div className="parentDiv d-flex p-3">
        <div className="form">
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
        <div className="imags d-flex position-relative overflow-hidden w-50 m-auto">
          <Image src={phone} alt="phone" fluid className="imgOne" />
          <Image src={woman} alt="woman" fluid className="imgTwo" />
        </div>
      </div>
    </Container>
  );
};

export default BookApp;
