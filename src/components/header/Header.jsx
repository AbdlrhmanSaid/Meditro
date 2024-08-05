import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"; // Import useLocation and Link for routing

import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap/";
import logoImg from "../../assets/logo.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isScroll, setIsScroll] = useState(window.scrollY === 0);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar
        expand="lg"
        className={isScroll ? "bg-body-tertiary NavTop" : "bg-body-tertiary"}
      >
        <Container fluid>
          <img src={logoImg} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={`navText ${activeLink === "/" ? "active" : ""}`}
              >
                Home
              </Nav.Link>
              <NavDropdown title="Pages" className="navText">
                <NavDropdown.Item
                  as={Link}
                  to="/about"
                  className={activeLink === "/about" ? "active" : ""}
                >
                  About us
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/ourTeam"
                  className={activeLink === "/ourTeam" ? "active" : ""}
                >
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/faq"
                  className={activeLink === "/faq" ? "active" : ""}
                >
                  FAQ's
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/booking"
                  className={activeLink === "/booking" ? "active" : ""}
                >
                  Booking
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/login"
                  className={activeLink === "/login" ? "active" : ""}
                >
                  Login / Register
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" className="navText">
                <NavDropdown.Item
                  as={Link}
                  to="/services"
                  className={activeLink === "/services" ? "active" : ""}
                >
                  Service
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/details"
                  className={activeLink === "/services/details" ? "active" : ""}
                >
                  Service Details
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" className="navText">
                <NavDropdown.Item
                  as={Link}
                  to="/blogs"
                  className={activeLink === "/blogs" ? "active" : ""}
                >
                  Blogs
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/blogs/details"
                  className={activeLink === "/blogs/details" ? "active" : ""}
                >
                  Blog Details
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to="/contact"
                className={`navText ${
                  activeLink === "/contact" ? "active" : ""
                }`}
              >
                <Button>
                  Contact Us <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
