import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header: React.FunctionComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-center align-items-center">
        <Navbar.Brand>Note App with React-Bootstrap & typescript</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
