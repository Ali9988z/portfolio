import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contactus = () => {
    return (
        <>
            <div className="row" style={{ marginTop: '4rem', margin: '10px',backgroundColor: '',boxShadow: '5px 5px 5px 5px rgba(1, 1, 1, 1'}}>
                <div className="col-6">
                    <h1>Send A Message</h1>

                    <Form style={{ margin: '10px' }}>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control placeholder="Your name" />

                        <Form.Label> Your Email</Form.Label>
                        <Form.Control placeholder="Your Email" />

                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder="Subject" />

                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '100px' }}
                        />
                        <Button variant="primary" style={{ marginTop: '10px' }}>Send Message</Button>{' '}
                    </Form>
                </div>
                <div className="col-6">
                    <h1>Get in Touch</h1>
                    <h4>Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from you.
                        Simply fill the from and send me an email.</h4>
                    <div className="social">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" style={{ fontSize: '50px', color: '#333',margin:'10px' }}></i>
                        </a>

                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin" style={{ fontSize: '50px', color: '#0077B5' }}></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contactus;