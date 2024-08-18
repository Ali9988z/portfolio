import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import Work from "./Skills";
import About from "./About";
import Project from "./Project";
import Contactus from "./Contactus";


const Home = (props) => {


  return (
    <>
      <Header />
      <Card className="text-center" style={{ margin: '10px' }}>
        <Card.Body>
          <Card.Text><h1>
            <badge bg="secondary" > Hello , im Ali nawaz</badge>
          </h1>
          </Card.Text>
          <Card.Title>
            <h2>
              Frontend Developer
            </h2>
          </Card.Title>
          <Button variant="primary" href="/project" size="lg">Projects</Button>
        </Card.Body>
      </Card>
     <About />
      <Work />
      <Project />
      <Contactus />
    </>
  )
}
export default Home;