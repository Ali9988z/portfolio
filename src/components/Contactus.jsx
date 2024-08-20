import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contactus = () => {

    return (
        <>
            <div className="row" style={{ marginTop: '4rem', margin: '10px', }}>
                <div className="col-6">
                    <h1>Send A Message</h1>

                    <Form style={{ margin: '10px' }}>
                        <div className='your-name'>
                            <label>Your Name</label><br />
                            <input style={{ width: '100%' }}
                                type="text"
                                // value={Name}

                            />
                        </div>
                        <div>

                            <label>Email</label><br />
                            <input style={{ width: '100%' }}
                                type="text"
                                // value={email}

                            />
                        </div>
                        <div>
                            <label>Subject</label><br />
                            <input style={{ width: '100%' }}
                                type="text"
                                // value={Subject}

                            />
                        </div>
                        <div>
                            <label>Message</label><br />
                            <input style={{ width: '100%' }}

                                type="textarea"
                                // value={Message}


                            />
                        </div>
                        <Button type="submit" variant="primary" style={{ marginTop: '10px' }}>Send Message</Button>{' '}
                    </Form>
                </div>
                <div className="col-6">
                    <h1>Get in Touch</h1>
                    <h4>Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from you.
                        Simply fill the from and send me an email.</h4>
                    <div className="social">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" style={{ fontSize: '50px', color: '#333', margin: '10px' }}></i>
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