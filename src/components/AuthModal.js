import React from 'react';
import { Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthModal = ({ show, handleClose, mode }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{mode === 'login' ? 'Login' : 'Sign Up'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {mode === 'login' ? <LoginForm /> : <SignUpForm />}
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
