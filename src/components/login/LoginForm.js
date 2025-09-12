import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './LoginForm.css';
import { toast } from 'react-toastify';

const LoginForm = ({ closeForm, toggleForm }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // mobile: '',
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            EMAIL: formData.email,
            PASSWORD: formData.password,
        };

        try {
            const response = await fetch('http://172.16.49.117:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.status === 200) {
                toast.success('🎉 Login successful!');
                localStorage.setItem('loggedInUser', JSON.stringify(result.user));


                // You can store user data in localStorage or context here if needed
                // localStorage.setItem('user', JSON.stringify(result.user));

                closeForm(); // Close login popup
                window.location.reload(); // simplest approach

            } else {
                toast.error(`❌ ${result.message}`);
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Something went wrong. Please try again.');
        }
    };


    const handleOverlayClick = (e) => {
        // If the click is outside of the login-popup, close the form
        if (e.target === e.currentTarget) {
            closeForm();
        }
    };

    return (
        <motion.div
            className="login-overlay"
            initial={{ opacity: 0, y: '-100%' }} // Initial off-screen position
            animate={{ opacity: 1, y: 0 }} // Final position when in view
            exit={{ opacity: 0, y: '-100%' }} // Exit slide-up animation
            transition={{ type: 'spring', stiffness: 50, damping: 25 }}
            onClick={handleOverlayClick} // Add onClick to overlay
        >
            <div className="login-popup">
                <button className="login-close-button" onClick={closeForm}>
                    <span>&times;</span>
                </button>
                <h2 className="login-popup-title text-start text-primary"><FaSignInAlt /> Login</h2>

                <Form onSubmit={handleSubmit} className="login-form border p-3 rounded">
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

                    <Form.Group className="login-submit-group mt-3 text-center">
                        <Button type="submit" className="login-submit-button">
                            Login
                        </Button>
                    </Form.Group>
                    <Form.Group className="register-login-group mt-2 text-center">
                        <p>
                            Already have an account?{' '}
                            <a href="#!" onClick={toggleForm}>Register here</a>
                        </p>
                    </Form.Group>
                </Form>
            </div>
        </motion.div>
    );
};

export default LoginForm;
