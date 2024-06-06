import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
// documents
import thesis from "../assets/downloads/Thesis.pdf";
import manual from "../assets/downloads/ManualUsers.pdf";
import scope from "../assets/downloads/Project_scope.pdf";
import plan from "../assets/downloads/Project_plan.pdf";
import reflection from "../assets/downloads/Reflection.pdf";

export const Internship = () => {
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
                    For the authentication and cloud file storage for documents, photos, etc... 
                    We used firebase. To deploy everything we created a simple docker file with docker compose.<br /><br />
                    <div><span>Project scope:</span> <a href={scope} download="Project_Scope.pdf" aria-label="Project_Scope">Projectscope</a></div>
                    <div><span>Project plan:</span> <a href={plan} download="Project_Plan.pdf" aria-label="Project_Plan">Projectplan</a></div>
                    <div><span>Thesis:</span> <a href={thesis} download="Thesis.pdf" aria-label="Thesis">Thesis</a></div>
                    <div><span>Reflection:</span> <a href={reflection} download="Reflection.pdf" aria-label="Reflection">Reflection</a></div>
                    <div><span>Manual:</span> <a href={manual} download="Manual.pdf" aria-label="Manual">Manual</a></div>
                  </p>
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