import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import navIcon3 from '../assets/svg/nav-icon3.svg';
import navIcon2 from '../assets/svg/nav-icon2.svg';
import TrackVisibility from 'react-on-screen';
import internship1 from "../assets/img/projectImages/internship1.png";
import internship2 from "../assets/img/projectImages/internship2.jpg";
import internship3 from "../assets/img/projectImages/internship3.jpg";
// documents
import thesis from "../assets/downloads/Thesis.pdf";
import manual from "../assets/downloads/ManualUsers.pdf";
import scope from "../assets/downloads/Project_scope.pdf";
import plan from "../assets/downloads/Project_plan.pdf";
import reflection from "../assets/downloads/Reflection.pdf";

export const Internship = () => {
  const images = [internship1, internship2, internship3];
  return (
    <section className="internship" id="internship">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility offset={100}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Internship</h2>
                  <p>
                    During my internship at King Mongkut's Institute of Technology Ladkrabang (KMITL), 
                    I worked on developing a new e-borrowing web application to replace the old system for 13 weeks 
                    (from 28/02 until 28/05). We were a team of three students and didn't have specific job assignments. 
                    I worked full stack on the application and often felt like the team lead. I ensured that meetings were arranged, 
                    everyone stayed on schedule, stand-up meetings were conducted, and I took charge of most of the documentation.<br /><br />
                    The experience was truly wonderful, and I believe I can speak for everyone when I say we learned a great deal. 
                    This internship wasn't without its challenges, but we overcame them as a team. 
                    I feel that I grew most in my communication skills, my ability to lead a team, and the art of thinking outside the box to come up with effective solutions.<br /><br />
                    Some technical aspects. We created the application in next.js 14 which is a full stack react based framework. 
                    We coded everything in typescript for type safety. As database we used postgreSQL. 
                    For the authentication and cloud file storage for documents, photos, we used firebase. 
                    To deploy everything we created a simple docker file with docker compose.<br /><br />
                    <div className="internship-bottom">
                      <div>
                        <div><span>Project scope:</span> <a href={scope} target="_blank" rel="noopener noreferrer" aria-label="Project_Scope">Project scope</a></div>
                        <div><span>Project plan:</span> <a href={plan} target="_blank" rel="noopener noreferrer" aria-label="Project_Plan">Project plan</a></div>
                        <div><span>Thesis:</span> <a href={thesis} target="_blank" rel="noopener noreferrer" aria-label="Thesis">Thesis</a></div>
                        <div><span>Reflection:</span> <a href={reflection} target="_blank" rel="noopener noreferrer" aria-label="Reflection">Reflection</a></div>
                        <div><span>Manual:</span> <a href={manual} target="_blank" rel="noopener noreferrer" aria-label="Manual">Manual</a></div>
                      </div>
                      <div className='social-icon'>
                        <a href="https://2024-internship-assignment.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Website" /></a>
                        <a href="https://github.com/JarneDirken/2024-InternshipAssignment" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
                      </div>
                    </div>
                  </p>
                  <Carousel>
                  {images.map((image, index) => (
                      <Carousel.Item key={index} className="text-center">
                      <img
                          className="popupImages mx-auto"
                          src={image}
                          alt={`Slide ${index + 1}`}
                      />
                      </Carousel.Item>
                  ))}
                  </Carousel>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}