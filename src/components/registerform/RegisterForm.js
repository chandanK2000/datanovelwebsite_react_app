import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'; // Use Row and Col for grid layout
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaLock } from 'react-icons/fa'; // FontAwesome icons
import { motion } from 'framer-motion'; // For animation
import './RegisterForm.css';

const RegisterForm = ({ closeForm,toggleForm }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    company: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    closeForm(); // Close the form after submission
  };

  const handleOverlayClick = (e) => {
    // Close the form if clicked outside the popup
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  useEffect(() => {
    // Trigger the overlay and popup to slide down after mounting
    const overlay = document.querySelector('.register-overlay');
    const popup = document.querySelector('.register-popup');
    if (overlay && popup) {
      overlay.style.transform = 'translateY(0)'; // Slide-in effect for overlay
      overlay.style.opacity = '1'; // Fade in effect
      popup.style.transform = 'translateY(0)'; // Slide-in effect for popup
    }
  }, []);

  return (
    <motion.div
      className="register-overlay"
      initial={{ opacity: 0, y: '-100%' }} // Initial off-screen position
      animate={{ opacity: 1, y: 0 }} // Final position when in view
      exit={{ opacity: 0, y: '-100%' }} // Exit slide-up animation
      transition={{ type: 'spring', stiffness: 100, damping: 20 }} // Faster animation transition
      onClick={handleOverlayClick} // Close form on clicking outside
    >
      <div className="register-popup" onClick={(e) => e.stopPropagation()}> {/* Prevent click propagation on popup */}
        <button className="close-button" onClick={closeForm}>
          <span>&times;</span>
        </button>
        <h3 className="register-popup-title text-start"> <FaUser className='mb-2' /> Register</h3>

        <Form onSubmit={handleSubmit} className="border p-3 rounded">
          <Row>
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <InputGroup className="custom-input-group">
                  <InputGroup.Text><FaUser /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <InputGroup className="custom-input-group">
                  <InputGroup.Text><FaUser /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup className="custom-input-group">
                  <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup className="custom-input-group">
                  <InputGroup.Text><FaLock /></InputGroup.Text>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <InputGroup className="custom-input-group">
                  <InputGroup.Text><FaPhone /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formCompany">
                <Form.Label>Company</Form.Label>
                <InputGroup className="custom-input-group">
                  <InputGroup.Text><FaBuilding /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mt-3 text-center">
            <Button type="submit" className='register-submit-button'>
              Register
            </Button>
          </Form.Group>

          <Form.Group className="mt-2 text-center">
            <p>
              Already have an account?{' '}
              <a href="#!" onClick={toggleForm}>Login here</a>
            </p>
          </Form.Group>
        </Form>
      </div>
    </motion.div>
  );
};

export default RegisterForm;
