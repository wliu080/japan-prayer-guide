import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

const ToggleHeader: React.FC = () => {
  // when the Navbar.Collapse is expanded we want to switch to the dark theme
  const [bg, setBg] = useState("white");
  const [variant, setVariant] = useState("light");

  const toggleColorScheme = () => {
    setBg(bg === "white" ? "primary" : "white");
    setVariant(variant === "light" ? "dark" : "light");
  };

  return (
    <Navbar fixed="top" bg={bg} expand="lg" variant={variant}>
      <Container>
        <Navbar.Brand href="#home">
          <Image
            alt="Crane logo with the text: Beneath the Surface"
            src={bg === "white" ? "/bts-crane-wht-logo-en.png" : "/bts-crane-blue-logo-en.png"}
            width="150"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleColorScheme} />
        <Navbar.Collapse id="basic-navbar-nav" className="no-transition">
          <Nav className="mr-auto" variant={variant}>
            <Nav.Link href="#topics">Topics</Nav.Link>
            <Nav.Link href="#downloads">Downloads</Nav.Link>
            <Nav.Link href="#purchase">Purchase the Book</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { ToggleHeader };
