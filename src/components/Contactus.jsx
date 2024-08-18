import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contactus = () => {
    return (
        <>
            <div className="row" style={{marginTop: '4rem', boxShadow: '10px'}}>
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
                        <Button variant="primary" style={{marginTop: '10px'}}>Send Message</Button>{' '}
                    </Form>
                </div>
                <div className="col-6">
                    <h1>Get in Touch</h1>
                    <h4>Whether you want to get in touch, talk about a project
                         collaboration, or just say hi, I'd love to hear from you.
                        Simply fill the from and send me an email.</h4>
                </div>
            </div>
        </>
    )
}
export default Contactus;