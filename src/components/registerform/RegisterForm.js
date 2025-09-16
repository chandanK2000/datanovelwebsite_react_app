import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './RegisterForm.css';
import { toast } from 'react-toastify';

const RegisterForm = ({ closeForm, toggleForm }) => {
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


  const validateMobile = (mobile) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(mobile);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateMobile(formData.mobile)) {
      toast.error('⚠️ Invalid mobile number! It should start with 6,7,8 or 9 and be 10 digits long.');
      return;
    }

    const payload = {
      FIRST_NAME: formData.firstName,
      LAST_NAME: formData.lastName,
      EMAIL: formData.email,
      PASSWORD: formData.password,
      PHONE_NUMBER: formData.mobile,
      COMPANY: formData.company
    };

    try {
      // const response = await fetch('http://localhost:5000/register', {
      const response = await fetch('http://172.16.49.117:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.status === 201) {
        toast.success('✅ Registration successful! Please check your email for the verification link.');
        closeForm();
      } else {
        // maybe 409 or other errors
        toast.error(`❌ ${result.message}`);
      }
    } catch (err) {
      console.error('Registration error:', err);
      toast.error('⚠️ Something went wrong. Please try again.');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  useEffect(() => {
    const overlay = document.querySelector('.register-overlay');
    const popup = document.querySelector('.register-popup');
    if (overlay && popup) {
      overlay.style.transform = 'translateY(0)';
      overlay.style.opacity = '1';
      popup.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <motion.div
      className="register-overlay"
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      onClick={handleOverlayClick}
    >
      <div className="register-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeForm}>
          &times;
        </button>
        <h3 className="register-popup-title text-start">
          <FaUser className='mb-2' /> Register
        </h3>

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
                    maxLength={10}

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
