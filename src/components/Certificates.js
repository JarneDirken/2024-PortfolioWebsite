import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import cyberSecurityImage from "../assets/img/certificatesImages/cyberSecurity.png";
import cyberSeucirty from "../assets/img/certificates/cybersecuritychallenge.png";
import udemy from "../assets/img/certificates/udemy.png";
import udemyCertificate from "../assets/img/certificatesImages/udemyCertificate.jpg";

export const Certificates = () => {

    const certificates = [
        {
            title: "Reply Cyber Security Challenge",
            description: "This was a 24h cyber security challenge.",
            imgUrl: cyberSeucirty,
            moreInfo: "",
            images: [cyberSecurityImage],
        },
        {
            title: "Complete WordPress Developer Course 2023 - Plugins & Themes",
            description: "I did a full wordpress developer course.",
            liveWebsiteLink: "https://www.udemy.com/certificate/UC-983aae4a-5802-4148-8ef8-a4a522a73451/",
            imgUrl: udemy,
            moreInfo: "",
            images: [udemyCertificate]
        }
    ];

    return (
        <section className="certificate" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificates</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          certificates.map((certificate, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...certificate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsSecond.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> */}
                    {/* <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsThird.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
    );
}