import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    // Validate email format
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.name) {
            validationErrors.name = "Name is required";
        }

        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            validationErrors.email = "Enter a valid email";
        }

        if (!formData.subject) {
            validationErrors.subject = "Subject is required";
        }

        if (!formData.message) {
            validationErrors.message = "Message is required";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully:", formData);
            // Add code to handle form submission (e.g., send to an API)
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <div className="row" style={{ marginTop: '4rem', margin: '10px' }}>
                <div className="col-6">
                    <h1>Send A Message</h1>

                    <Form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                        <div className="your-name">
                            <label>Your Name</label><br />
                            <input
                                name="name"
                                type="text"
                                style={{ width: '100%' }}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        </div>

                        <div>
                            <label>Email</label><br />
                            <input
                                name="email"
                                type="text"
                                style={{ width: '100%' }}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>

                        <div>
                            <label>Subject</label><br />
                            <input
                                name="subject"
                                type="text"
                                style={{ width: '100%' }}
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
                        </div>

                        <div>
                            <label>Message</label><br />
                            <textarea
                                name="message"
                                style={{ width: '100%' }}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                        </div>

                        <Button type="submit" variant="primary" style={{ marginTop: '10px' }}>
                            Send Message
                        </Button>
                    </Form>
                </div>

                <div className="col-6">
                    <h1>Get in Touch</h1>
                    
                    <h4>Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from you.
                        Simply fill the form and send me an email.</h4>
                    <div className="social">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" style={{ fontSize: '50px', color: '#333', margin: '10px' }}></i>
                        </a>

                        {/* <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin" style={{ fontSize: '50px', color: '#0077B5' }}></i>
                        </a> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactus;
