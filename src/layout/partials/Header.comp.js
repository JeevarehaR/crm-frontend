import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const history = useNavigate();
  const logMeOut = () => {
    history("/");
  };

  return (
    <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
      <Navbar.Brand>
        <img
          src={logo}
          alt="logo"
          width="50px"
          height="50px"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginLeft: "16px",
          }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav mx-auto">
          {/* <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="">Logout</Link> */}
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={logMeOut}> Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
