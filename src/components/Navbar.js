import React, { useState } from 'react';
import { Navbar, Button, FormControl, Form, Container } from 'react-bootstrap';
import logo from "../images/logo.png";
import AuthModal from './AuthModal';

const MyNavbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLoginModalShow = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  const handleSignUpModalShow = () => setShowSignUpModal(true);
  const handleSignUpModalClose = () => setShowSignUpModal(false);

  return (
    <div>
      <Navbar bg="body-tertiary" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" className='logo' style={{ width: "100px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Form className="ms-auto d-flex">
              <Button variant="outline-danger" type="button">
                Home
              </Button>
              <div style={{ margin: '0 10px' }}></div>
              <Button variant="outline-danger" type="button" onClick={handleLoginModalShow}>
                Login
              </Button>
              <div style={{ margin: '0 10px' }}></div>
              <Button variant="outline-danger" type="button" onClick={handleSignUpModalShow}>
                Sign Up
              </Button>
            </Form>
            <Form className="d-flex mt-3 mt-lg-0">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <AuthModal show={showLoginModal} handleClose={handleLoginModalClose} mode="login" />
      <AuthModal show={showSignUpModal} handleClose={handleSignUpModalClose} mode="signup" />
    </div>
  );
};

export default MyNavbar;
