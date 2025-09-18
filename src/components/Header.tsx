import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { fetchCountries } from "../redux/slices/countriesSlice";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleNavLinkClick = (link: string) => {
    console.log("🚀 ~ handleNavLinkClick ~ link:", link);
    try {
      setActiveLink(link);
      console.log("🚀 ~ handleNavLinkClick ~ setActiveLink called with:", link);
      dispatch(fetchCountries(link));
    } catch (error) {
      console.error("🚀 ~ handleNavLinkClick ~ error:", error);
    }
  };

  // Debug state changes
  useEffect(() => {
    console.log("🚀 ~ Header ~ activeLink updated:", activeLink);
  }, [activeLink]);

  // Debug component mount/unmount
  useEffect(() => {
    console.log("🚀 ~ Header ~ component mounted");
    return () => console.log("🚀 ~ Header ~ component unmounted");
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <h4>Countries</h4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
          <Nav className="me-auto gap-4">
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("")}
              className={activeLink === "" ? "active-link" : ""}
            >
              All
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("asia")}
              className={activeLink === "asia" ? "active-link" : ""}
            >
              Asia
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("europe")}
              className={activeLink === "europe" ? "active-link" : ""}
            >
              Europe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
