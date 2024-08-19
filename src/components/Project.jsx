import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Project = () => {
    return (
        <>
            <div className="project" style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ marginTop: '6rem' }}>Projects</h1>
            </div>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="column" style={{ flex: '2', padding: '10px', backgroundColor: 'lightblue;', boxSizing: 'border-box' }}   >
                    <Card style={{ width: '20rem', margin: '10px' }}>
                        <Card.Img src="/images/arjanmotor.jpeg" />
                        <Card.Body>
                            <Card.Title>Arjan Motors–Car Dealership Management System</Card.Title>
                            <Card.Text>
                                The Arjan Motors Car Dealership Management System, developed by Napps, is a comprehensive solution designed to streamline dealership operations, enhance customer relationships, and improve overall efficiency. By leveraging modern technology, it provides a robust and scalable platform to meet the dynamic needs of car dealerships.
                            </Card.Text>
                            <Button variant="primary" href="https://arjanmotors.in/" target="_blank">View project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="column" style={{ flex: '2', padding: '10px', backgroundColor: 'lightblue;', boxSizing: 'border-box'}} >
                    <Card style={{ width: '20rem', margin: '10px', }}>
                        <Card.Img variant="top" src="/images/srk.jpeg" style={{height: '220px'}} />
                        <Card.Body>
                            <Card.Title>Srk Style e-commerce</Card.Title>
                            <Card.Text>
                            Welcome to SRK Style – Redefine Your Wardrobe with Glamour! Our exclusive collection brings you the timeless elegance and unmatched style of SRK. From T-Shirts, Jeans to Oversized charm, find pieces that make you feel like a star. Elevate your fashion game with outfits 
                            that speak volumes. Embrace the spotlight. Shop SRK Style today!
                            </Card.Text>
                            <Button variant="primary" href="https://srkstyle.com/" target="_blank">View project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="column" style={{ flex: '2', padding: '10px', backgroundColor: 'lightblue;', boxSizing: 'border-box' }} >
                    <Card style={{ width: '20rem', margin: '10px' }}>
                        <Card.Img variant="top" src="/images/silverfoil.jpeg"style={{height: '220px'}} />
                        <Card.Body>
                            <Card.Title>Silver foil</Card.Title>
                            <Card.Text>
                            Now part of Napps, specializes in empowering food delivery startups, SMBs, franchises, and enterprises with robust online ordering and delivery solutions. Their comprehensive suite includes customizable software for single restaurants, chain operations, cloud kitchens, and startups, facilitating seamless online food, grocery, and liquor delivery.


                            </Card.Text>
                            <Button variant="primary"  href="https://silverfoil.in/" target="_blank">View project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="column" style={{ flex: '2', padding: '10px', backgroundColor: 'lightblue;', boxSizing: 'border-box' }} >
                    <Card style={{ width: '20rem', margin: '10px' }}>
                        <Card.Img variant="top" src="/images/Para.jpeg" style={{height: '310px'}}/>
                        <Card.Body>
                            <Card.Title>Para Astro</Card.Title>
                            <Card.Text>
                            Paraastro, your gateway to the stars and beyond! Whether you're an amateur astronomer or a seasoned stargazer, Paraastro offers a wealth of 
                            resources to ignite your curiosity and expand your knowledge of the cosmos.
                            </Card.Text>
                            <Button variant="primary"href="https://www.paraastro.com/" target="_blank">View project</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>

        </>
    )
}
export default Project;