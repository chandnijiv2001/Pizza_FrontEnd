import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          {/* /* <h6 className="text-light">
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; 
          </h6> */}
          <div className="navbar-brand"style={{fontFamily:"Lobster"}}><LinkContainer to="/" activeClassName="">
              <Nav.Link>Grab A Bite</Nav.Link>
            </LinkContainer></div>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName="">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName="">
              <Nav.Link>terms and policy</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
