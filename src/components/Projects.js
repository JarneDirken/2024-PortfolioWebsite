import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import projPhp from "../assets/img/projects/project-php.jpg";
import dirkendigital from "../assets/img/projects/dirkendigital.jpg";
import projReact from "../assets/img/projects/react.jpg";
import projRequir from "../assets/img/projects/Requirement_analysis.jpg";
import projAngular from "../assets/img/projects/angular.png";
import projMobileDev from "../assets/img/projects/mobile-dev.png";
import projWebdesign from "../assets/img/projects/webdesing.png";
import projpython from "../assets/img/projects/python.png";
import projdevops from "../assets/img/projects/devops.jpeg";
import projenterprise from "../assets/img/projects/microservices.jpg";
// project images
import showcaseDirkenDigital1 from "../assets/img/projectImages/DirkenDigital1.png";
import showcaseDirkenDigital2 from "../assets/img/projectImages/DirkenDigital2.png";
import project401 from "../assets/img/projectImages/Project401.png";
import project402 from "../assets/img/projectImages/Project402.png";
import project403 from "../assets/img/projectImages/Project403.png";
import project404 from "../assets/img/projectImages/Project404.png";
import project405 from "../assets/img/projectImages/Project405.png";
import project406 from "../assets/img/projectImages/Project406.png";
import angular1 from "../assets/img/projectImages/Angular1.png";
import angular2 from "../assets/img/projectImages/Angular2.png";
import angular3 from "../assets/img/projectImages/Angular3.png";
import angular4 from "../assets/img/projectImages/Angular4.png";
import angular5 from "../assets/img/projectImages/Angular5.png";
import angular6 from "../assets/img/projectImages/Angular6.png";
import angular7 from "../assets/img/projectImages/Angular7.png";
import requirement1 from "../assets/img/projectImages/requiredment1.jpg";
import requirement2 from "../assets/img/projectImages/requiredment2.jpg";
import php1 from "../assets/img/projectImages/PHP.png";
import webdesign from "../assets/img/projectImages/Webdesign1.png";
import python from "../assets/img/projectImages/python.jpg";
import Microservices1 from "../assets/img/projectImages/Microservices1.png";
import Microservices2 from "../assets/img/projectImages/Microservices2.png";
import ReactNative from "../assets/img/projects/reactNative.jpg";
import ReactNative1 from "../assets/img/projectImages/ReactNative1.PNG";
import ReactNative2 from "../assets/img/projectImages/ReactNative2.PNG";
import ReactNative3 from "../assets/img/projectImages/ReactNative3.PNG";


export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Web Development & Marketing",
      imgUrl: dirkendigital,
      moreInfo: "DirkenDigital is my personal student venture, and I'm thrilled to embark on this endeavor. I believe that engaging in a student enterprise brings numerous advantages. Participating in this venture allows me to mature quickly, take control of my destiny, project a professional image, and enhance my communication and client interaction skills.<br><br> Overall, such an experience is bound to have a positive impact on various aspects of my life. The skills and knowledge I acquire during this journey will undoubtedly prove valuable in the future, whether in my professional career or when running my own business. This marks a significant step in the right direction for me.",
      liveWebsiteLink: "https://www.dirkendigital.be",
      images: [showcaseDirkenDigital1, showcaseDirkenDigital2],
    },
    {
      title: "Project 4.0 (react)",
      description: "We had to create a working React application",
      imgUrl: projReact,
      moreInfo: "We addressed RideOnTrack's challenge of managing an overwhelming amount of train video footage in Belgium. Our solution involved creating an AI model for a camera mounted on trains, detecting anomalies (e.g., tree branches) and assets (e.g., traffic lights). The system sends images to our server, accessible through a React-based frontend.<br><br> Opting for React ensured minimal load time, while .NET (C#) served as the backend, aligning with the client's familiarity with C++. Each team focused on specific aspects—AI on the model, CCS on AWS setup, and application students on frontend development. <br><br>As the team lead, I facilitated collaboration, particularly between CCS and AI, ensuring the project's smooth progress. By week 3, we successfully integrated components, overcoming challenges in AWS implementation. The final implementation included a fastAPI linking anomaly detection to the frontend, resulting in a complete and functional solution.",
      githubLink: "https://github.com/JarneDirken/2024-React_Project",
      liveWebsiteLink: "https://2024-react-project.vercel.app/",
      images: [project401, project402, project403, project404, project405, project406],
    },
    {
      title: "Project Angular",
      description: "Final project Angular",
      imgUrl: projAngular,
      moreInfo: " Our team embarked on developing a trip planner, initiating with research on existing services. We divided tasks among ourselves; one member created a front-end template using Angular, another developed the backend with .NET, while two others designed the user interface in Figma. <br><br>We implemented basic API functionalities and established a mock database for testing. Our project integrated Google's API for image retrieval and autocomplete features. We focused on developing various functionalities, including trip creation, activity management, viewer statistics, user authentication via Auth0, and profile management.<br><br>My role in this project was to fix everything with auth0 and work on the front- and backend. I learned a lot during this project especially my communication, teamwork and teamleading skills.",
      githubLink: "https://github.com/JarneDirken/2024-Angular_Project",
      liveWebsiteLink: "https://2024-angular-project.vercel.app/",
      images: [angular1, angular2, angular3, angular4, angular5, angular6, angular7],
    },
    {
      title: "Project PHP",
      description: "We had to create a working PHP application.",
      imgUrl: projPhp,
      moreInfo: "This project is a follow-up to the Requirements Analysis project I worked on previously, carried out with a team. Our aim for this project is to take the prototypes we developed during the Requirements Analysis phase and build them out using PHP.<br><br>My role involves creating various pages for the website, such as the profile, payment, and registration pages, along with a few pages for basic operations like creating, reading, updating, and deleting data. I'm also responsible for making sure the website's hosting is kept up to date.<br></br>I really enjoy working on a project like this because it's great practice for the future. It's about working together with others on a single project, communicating effectively, and meeting deadlines. Plus, I find it interesting to discuss the project with our client to ensure we deliver exactly what they're looking for.",
      githubLink: "https://github.com/JarneDirken/2023-PHP_Project",
      liveWebsiteLink: "https://www.projectphp.tve-a.be/",
      images: [php1],
    },
    {
      title: "Project Mobile development",
      description: "Design & Development flutter and dart",
      imgUrl: projMobileDev,
      moreInfo: "For this project we had to create a flutter application in dart that works on phones. We also needed to implement some sort of AR/VR to also make use of the camera.<br><br>We created a fitness application where you can check all the exercises by muscle group. You can add, delete and change muscle groups and exercises. We really payed attention to style the applicaiton professionally. As AR part we used the camera to scan an exercise in the fitness, after that a video will appear on how to do that exercise.<br><br> I grew most in Problem solving, figma and being creative. I really enjoyed working on this project. ",
      githubLink: "https://github.com/JarneDirken/2024-MobileDev_Project",
      liveWebsiteLink: "https://www.youtube.com/watch?v=fZUhpyea7oM",
      images: [],
    },
    {
      title: "Project react native",
      description: "For this project I created a expense tracker I made a expense tracker with react native.",
      imgUrl: ReactNative,
      moreInfo: "I completed this project relatively quick. The main idea behind starting a project in react native was to improve my javascript skills aswell as my knowledge of creating mobile applications.<br><br>I did learn quite a lot in the process of creating this app and I am happy to share it with everyone.",
      githubLink: "https://github.com/JarneDirken/2024-ReactNative_Project",
      images: [ReactNative1, ReactNative2, ReactNative3],
    },
  ];

  const projectsSecond = [
    {
      title: "Project Webdesign",
      description: "We needed to make a website, using HTML, Javascript and Sass.",
      imgUrl: projWebdesign,
      moreInfo: "I developed an educational website utilizing HTML, JavaScript, and Sass. My introduction to Sass posed initial challenges, but as I became more familiar with it, the usage became significantly more straightforward. The incorporation of numerous animations and transitions enhanced the website's interactivity. Delving into JavaScript for the first time, I employed it to implement a mobile-friendly hamburger menu. The website was designed for an imaginary company, envisioning a platform that offered courses for learning various programming languages. <br><br>Throughout this project, my leadership skills improved as I navigated team dynamics and embraced the Scrum methodology. My proficiency in Sass and JavaScript grew, and I gained valuable experience in addressing common teamwork challenges, including communication issues, occasional deadline misses, and individual project contributions. Despite these hurdles, the team emerged stronger, having learned from our mistakes and developed effective strategies to tackle such issues.",
      githubLink: "https://github.com/JarneDirken/2022-Webdesign_Project",
      liveWebsiteLink: "https://hg1-webdesign-eindproject-eztyping.netlify.app/",
      images: [webdesign],
    },
    {
      title: "Requirements Analysis",
      description: "For this project, we had to create 1 large data model and use case diagram.",
      imgUrl: projRequir,
      moreInfo: "A group project for Requirements Analysis where our goal was solving all of the problems of our client and developing the plans for a future application that they will be using. We solved these issues by creating an accurate use case model and getting feedback from the client. With this use case model we could then create prototypes for the application.<br><br>My role in this project was creating prototypes and helping with the design of the use case model. Also during our meetings with the client, I asked questions to get a better understanding of the client's needs. During this project, I improved my communication skills by always communicating clearly both verbally and written.",
      images: [requirement1, requirement2],
    },
    {
      title: "Project Python",
      description: "I chose to create a 2D game using pycharm.",
      imgUrl: projpython,
      moreInfo: "This project from my first year in college is another interesting one to discuss. For an elective project in one of our subjects, we were tasked with choosing a project related to what we had learned that year. Having a keen interest in game development and having studied Python, I decided to embark on creating a 2D game using Python.<br></br>Embarking on this project with modest expectations, after extensive research and deliberation, I settled on a simple yet engaging concept. In the game, you play as a witch who can shoot arrows at falling aliens using her staff. Each hit on an alien increases your score, and the game ends if an alien touches you.<br></br>I believe working on this game significantly enhanced my Python skills, offering a practical application of the programming concepts we had learned.",
      githubLink: "https://github.com/JarneDirken/2022-2DPythonGame",
      liveWebsiteLink: "https://www.youtube.com/watch?v=seunVV9bQvY",
      images: [python],
    },
    {
      title: "Project DevOps",
      description: "We needed to create a Windows Forms application with a SQLite Database.",
      imgUrl: projdevops,
      moreInfo: "In this uncomplicated project, my goal was to develop an application in C#. I opted for a simplified version of the Memory Test found in Human Benchmark. The initial steps involved crafting the overall layout and ensuring the functionality of the application. I diligently documented the entire process along with a brief demonstration, and the link to the GitHub repository is provided (in Dutch). Additionally, a concise demo is available at the conclusion of the readme file. You should be able to add data to the database and retrieve it. In my case the highscore of the best user. Also we needed to make a .exe file with GitHub Actions.<br><br>During this project, I've improved my C# and problem solving skills. Also leared a thing or two about storing data in a database and retrieving it. This project helped me get an idea of how to start a project. Start with research, write everything down in steps and start working step by step. Also helped me get a basic understanding with C#.",
      githubLink: "https://github.com/JarneDirken/2023-DevOps_Project",
      liveWebsiteLink: "https://www.youtube.com/watch?v=VxAt9o7RVyo",
      images: [],
    },
    {
      title: "Project Enterprise Development",
      description: "In our project we developed a Java backend achitecture of the basis of microservices.",
      imgUrl: projenterprise,
      moreInfo: "In our project we developed a Java backend achitecture of the basis of microservices. We made 4 microservices, two MySQL microservices Two MongoDB microservices. We used a pipline in github to create docker containers and run it. We also implemented an api gateway that would allow restrictions and more advanced features.<br><br>During this project I really learned how to use Java as a backend programming language, I think I improved most in problem solving because it's not as easy as clicking inspect element and seeing the actually error. You have to figuere it out yourself.",
      githubLink: "https://github.com/JarneDirken/2024-EnterpriseDevelopment_Project",
      liveWebsiteLink: "https://www.youtube.com/watch?v=6MJGU0NiiDs",
      images: [Microservices1, Microservices2],
    },
  ];

  //const projectsThird = [{}];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility offset={100}>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
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
                    </Tab.Pane>
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
  )
}
