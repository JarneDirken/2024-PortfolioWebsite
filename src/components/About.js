import React from 'react';
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from "react-bootstrap";
import Image from "../assets/img/aboutImage.jpg";

export const About = () => {
  return (
    <section className="about" id="about">
        <Container>
            <div className="about-bx wow zoomIn">
                <h2>About me</h2>
                <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={6}>
                    <div className="image-container">
                        <img src={Image} alt='About' />
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                <p className='aboutText'>
                    My name is Dirken Jarne, a 20-year-old student at Thomas More University Geel. 
                    I live in Ravels, Antwerp, Belgium with my parents and two little sisters. 
                    I love going to the gym, cooking meals, reading, and programming. 
                    Since my passion is programming, I chose to study Applied Computer Science at Thomas More in Geel.
                    <br></br><br></br>
                    I'm eager to put my knowledge and experience to the test, preferably as a full-stack programmer.
                    I believe with my experience so far from school as well as from my own student company, I will be a valuable asset to any company.
                    With a passion for continuous learning and a small step ahead of other students, 
                    I am confident in my ability to contribute effectively to any team or work independently and tackle challenging projects. 
                    I am excited about the future and the opportunities that lie ahead in my career.
                    </p>
                </Col>
                </Row>
            </div>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
