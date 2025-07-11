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
import projectvuejs from "../assets/img/projects/vuejs.jpg";
import projectchess from "../assets/img/projects/chess.jpg";
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
import php1 from "../assets/img/projectImages/PHP.png";
import webdesign from "../assets/img/projectImages/Webdesign1.png";
import python from "../assets/img/projectImages/python.jpg";
import Microservices1 from "../assets/img/projectImages/Microservices1.png";
import Microservices2 from "../assets/img/projectImages/Microservices2.png";
import ReactNative from "../assets/img/projects/reactNative.jpg";
import ReactNative1 from "../assets/img/projectImages/ReactNative1.PNG";
import ReactNative2 from "../assets/img/projectImages/ReactNative2.PNG";
import ReactNative3 from "../assets/img/projectImages/ReactNative3.PNG";
import vue1 from "../assets/img/projectImages/vueproject.png";
import vue2 from "../assets/img/projectImages/vueproject2.png";
import vue3 from "../assets/img/projectImages/vueproject3.png";
import mobile1 from "../assets/img/projectImages/mobiledev1.png";
import mobile2 from "../assets/img/projectImages/mobiledev2.png";
import mobile3 from "../assets/img/projectImages/mobiledev3.png";
import mobile4 from "../assets/img/projectImages/mobiledev4.png";
import mobile5 from "../assets/img/projectImages/mobiledev5.png";
import chess from "../assets/img/projectImages/chessProject.png";
import ContentTracker1 from "../assets/img/projects/ContentList1.png";
import contentTrackerImage1 from "../assets/img/projectImages/ContentTracker1.png";
import contentTrackerImage2 from "../assets/img/projectImages/ContentTracker2.png";
import contentTrackerImage3 from "../assets/img/projectImages/ContentTracker3.png";
import contentTrackerImage4 from "../assets/img/projectImages/ContentTracker4.png";
import contentTrackerImage5 from "../assets/img/projectImages/ContentTracker5.png";
import contentTrackerImage6 from "../assets/img/projectImages/ContentTracker6.png";
import mobileAndWebApp from "../assets/img/projects/MobileAndWebApp.png";
import NextJs from "../assets/img/projects/nextjs.png";
import sdApp1 from "../assets/img/projectImages/sdApp1.png";
import sdApp2 from "../assets/img/projectImages/sdApp2.png";
import sdApp3 from "../assets/img/projectImages/sdApp3.png";
import sdApp4 from "../assets/img/projectImages/sdApp4.png";
import sdApp5 from "../assets/img/projectImages/sdApp5.png";
import sdApp6 from "../assets/img/projectImages/sdApp6.png";
import sdApp7 from "../assets/img/projectImages/sdApp7.png";
import sdApp8 from "../assets/img/projectImages/sdApp8.png";
import PlanningApp1 from "../assets/img/projectImages/PlanningApp1.png";
import PlanningApp2 from "../assets/img/projectImages/PlanningApp2.png";
import PlanningApp3 from "../assets/img/projectImages/PlanningApp3.png";

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Web Development & Marketing",
      imgUrl: dirkendigital,
      moreInfo: "DirkenDigital is my personal student company I founded during my second year in univeristy. I believe that engaging in a student enterprise brings numerous advantages. Participating in this venture allows me to mature quickly, take control of my destiny, project a professional image, and enhance my communication and client interaction skills.<br><br> Overall, such an experience is bound to have a positive impact on various aspects of my life. The skills and knowledge I acquire during this journey will undoubtedly prove valuable in the future, whether in my professional career or when running my own business. This marks a significant step in the right direction for me.<br><br>Note: I just updated my website to have a language switch because I might become active in France as well...",
      liveWebsiteLink: "https://www.dirkendigital.be/cases",
      images: [showcaseDirkenDigital1, showcaseDirkenDigital2],
    },
    {
      title: "Project 4.0 (react)",
      description: "Full stack web application with react, .net and postgreSQL database",
      imgUrl: projReact,
      moreInfo: "We addressed RideOnTrack's challenge of managing an overwhelming amount of train video footage in Belgium as a final project in our last year of university. Our solution involved creating an AI model for a camera mounted on trains, detecting anomalies (e.g., tree branches) and assets (e.g., traffic lights). The system sends images to our server, which are accessible through a React-based frontend.<br><br>Opting for React ensured minimal load time, while .NET (C#) served as the backend, aligning with the client's familiarity with C++. Each team focused on specific aspects—AI on the model, CCS on AWS setup, and application students on frontend development.<br><br>As the team lead, I facilitated collaboration, particularly between CCS and AI, ensuring the project's smooth progress. By week 3, we successfully integrated components, overcoming challenges in AWS implementation. The final implementation included a FastAPI linking anomaly detection to the frontend, resulting in a complete and functional solution.",
      githubLink: "https://github.com/JarneDirken/2024-React_Project",
      liveWebsiteLink: "https://2024-react-project.vercel.app/",
      images: [project401, project402, project403, project404, project405, project406],
    },
    {
      title: "Project Angular",
      description: "Full stack web application with angular, .net with mySQL database and auth0",
      imgUrl: projAngular,
      moreInfo: "Our team embarked on developing a trip planner in my last year of university, starting with research on existing services. We divided tasks among ourselves: one member created a front-end template using Angular, another developed the backend with .NET, while two others designed the user interface in Figma.<br><br>We implemented basic API functionalities and established a mock database for testing. Our project integrated Google's API for image retrieval and autocomplete features. We focused on developing various functionalities, including trip creation, activity management, viewer statistics, user authentication via Auth0, and profile management.<br><br>My role in this project was to manage everything with Auth0 and work on both the front-end and backend. I learned a lot during this project, especially improving my communication, teamwork, and team-leading skills.",
      githubLink: "https://github.com/JarneDirken/2024-Angular_Project",
      liveWebsiteLink: "https://2024-angular-project.vercel.app/",
      images: [angular1, angular2, angular3, angular4, angular5, angular6, angular7],
    },
    {
      title: "Project Mobile development",
      description: "Mobile development with flutter and dart",
      imgUrl: projMobileDev,
      moreInfo: "For this project, we had to create a Flutter application in Dart that works on phones in my last year of university. We also needed to implement some sort of AR/VR to make use of the camera.<br><br>We created a fitness application where you can check all the exercises by muscle group. You can add, delete, and change muscle groups and exercises. We really paid attention to style the application professionally. For the AR part, we used the camera to scan an exercise in the fitness area, after which a video would appear showing how to do that exercise.<br><br> I grew the most in problem-solving, Figma, and being creative. I really enjoyed working on this project.",
      githubLink: "https://github.com/JarneDirken/2024-MobileDev_Project",
      liveWebsiteLink: "https://www.youtube.com/watch?v=fZUhpyea7oM",
      images: [mobile1, mobile2, mobile3, mobile4, mobile5],
    },
    {
      title: "Mobile- and web app for a client (DirkenDigital)",
      description: "Development of a mobile and web application in react and react native",
      imgUrl: mobileAndWebApp,
      moreInfo: "For this project, I had to create a mobile and web application in React and React Native for a client. The goal was to develop a platform that allows users to manage their materials that are stored in their workbus. Every team leader has to verify each month if the materials are still in the bus and if they are still in good condition.<br><br>For this project, I had to learn a lot about React Native and how to use it. I also had to learn how to use Firebase for the authentication and file storage. I really enjoyed working on this project because I learned a lot and I was able to create a professional application.<br><br>As for the technology, I used React for the web application and React Native for the mobile application. I also used Firebase for the authentication and file storage. As for the api I used a .netAPI that is hosted on render. For the database I opted for postgreSQL. The web application is hosted on Vercel and the mobile application is available on the Google Play- & Apple Store.",
      images: [sdApp1, sdApp2, sdApp8, sdApp7, sdApp6, sdApp5, sdApp4, sdApp3],
    },
    {
      title: "Work shift scheduler (DirkenDigital)",
      description: "Development of a shift scheduler web application in next.js",
      imgUrl: NextJs,
      moreInfo: "For this project, I had to create a shift scheduler web application in Next.js for a client. The goal was to develop a platform that allows users to manage their work shifts and schedule them in an easy way.<br><br>For this project, I had to learn a lot about Next.js and how to use it. I also had to learn how to use Firebase for the authentication and file storage. I really enjoyed working on this project because I learned a lot and I was able to create a professional application.<br><br>As for the technology, I used Next.js for the web application and Firebase for the authentication and file storage. For the database I opted for postgreSQL. The web application is hosted on Vercel.",
      images: [PlanningApp1, PlanningApp2, PlanningApp3],
    },
  ];

  const projectsSecond = [
    {
      title: "Project chess analysis",
      description: "Chess analysis web application in react with javascript",
      imgUrl: projectchess,
      moreInfo: "This is a side project I started after my internship in my final year of university. I began playing chess last year, and it quickly became a hobby I really enjoy. I love playing online on chess.com, but there's one thing I dislike: after finishing a game, I can only review one game per day for free. To review more, you have to pay. That's how I came up with this idea.<br><br>I know this has been done before, but I wanted to embark on this journey myself. By creating this application, I'm broadening my experience with React and JavaScript. I also use an AI called Stockfish to determine whether a move is the best. Additionally, there's an evaluation bar that indicates the likelihood of each side winning.<br><br>Note: This is an ongoing project, and I plan to add more features later on. Some examples with what I might want to add: <br><ul><li>Highlighting good moves</li><li>Highlighting bad moves</li><li>Additional ways to import a game</li><li>An opening reservoir that tells you what opening you're playing</li><li>Arrows indicating what the best move would have been</li></ul>",
      githubLink: "https://github.com/JarneDirken/2024-chessReview",
      liveWebsiteLink: "https://2024-chess-review.vercel.app/",
      images: [chess],
    },
    {
      title: "Content tracker",
      description: "Track your favorite films and series with my next.js app",
      imgUrl: ContentTracker1,
      moreInfo: "This is another side project I started after my internship in my final year of university. This project is based on a website called 'MyAnimeList' which does almost the same thing. <br> The point of this application is to be able to register which films you saw, want to see, what score you gave them, add favorites, etc... The app is made with next.js 14, postgreSQL as database and firebase for the authentication and file storage.<br><br>Note: The app is not yet finished I do my best to keep adding features and removing bugs. Things I intend to change:<ul><li>When not logged in save your movie, create account and automatically save the movie</li><li>Being able to add friends and 'compete' with each other</li><li>Add more movies</li><li>Make the series tab work</li></ul>",
      githubLink: "https://github.com/JarneDirken/2024-MyContentList",
      liveWebsiteLink: "https://2024-my-content-list.vercel.app/",
      images: [contentTrackerImage1, contentTrackerImage2, contentTrackerImage3, contentTrackerImage4, contentTrackerImage5, contentTrackerImage6],
    },
    {
      title: "Project react native",
      description: "Expense tracker in react native",
      imgUrl: ReactNative,
      moreInfo: "I completed this project relatively quickly as a side project during my last year in university. The main idea behind starting a project in React Native was to improve my JavaScript skills as well as my knowledge of creating mobile applications.<br><br>I did learn quite a lot in the process of creating this app, and I am happy to share it with everyone.",
      githubLink: "https://github.com/JarneDirken/2024-ReactNative_Project",
      images: [ReactNative1, ReactNative2, ReactNative3],
    },
    {
      title: "Project PHP",
      description: "Web application in php",
      imgUrl: projPhp,
      moreInfo: "This project is a follow-up to the Requirements Analysis project I worked on previously, carried out with a team in my second year in university. Our aim for this project is to take the prototypes we developed during the Requirements Analysis phase and build them out using PHP.<br><br>My role involves creating various pages for the website, such as the profile, payment, and registration pages, along with a few pages for basic operations like creating, reading, updating, and deleting data. I'm also responsible for making sure the website's hosting is kept up to date.<br><br>I really enjoy working on a project like this because it's great practice for the future. It's about working together with others on a single project, communicating effectively, and meeting deadlines. Plus, I find it interesting to discuss the project with our client to ensure we deliver exactly what they're looking for.",
      githubLink: "https://github.com/JarneDirken/2023-PHP_Project",
      liveWebsiteLink: "https://www.projectphp.tve-a.be/",
      images: [php1],
    },
    {
      title: "Project Webdesign",
      description: "Website, using HTML, Sass and Javascript",
      imgUrl: projWebdesign,
      moreInfo: "I developed an educational website utilizing HTML, JavaScript, and Sass as my first year in university. My introduction to Sass posed initial challenges, but as I became more familiar with it, the usage became significantly more straightforward. The incorporation of numerous animations and transitions enhanced the website's interactivity. Delving into JavaScript for the first time, I employed it to implement a mobile-friendly hamburger menu. The website was designed for an imaginary company, envisioning a platform that offered courses for learning various programming languages.<br><br>Throughout this project, my leadership skills improved as I navigated team dynamics and embraced the Scrum methodology. My proficiency in Sass and JavaScript grew, and I gained valuable experience in addressing common teamwork challenges, including communication issues, occasional deadline misses, and individual project contributions. Despite these hurdles, the team emerged stronger, having learned from our mistakes and developed effective strategies to tackle such issues.",
      githubLink: "https://github.com/JarneDirken/2022-Webdesign_Project",
      liveWebsiteLink: "https://hg1-webdesign-eindproject-eztyping.netlify.app/",
      images: [webdesign],
    },
    {
      title: "Project Enterprise Development",
      description: "Java backend achitecture of the basis of microservices.",
      imgUrl: projenterprise,
      moreInfo: "In our project in our final year bachelor, we developed a Java backend architecture based on microservices. We made four microservices: two MySQL microservices and two MongoDB microservices. We used a pipeline in GitHub to create Docker containers and run them. We also implemented an API gateway that would allow restrictions and more advanced features.<br><br>During this project, I really learned how to use Java as a backend programming language. I think I improved the most in problem-solving because it's not as easy as clicking 'inspect element' and seeing the actual error. You have to figure it out yourself.",
      githubLink: "https://github.com/JarneDirken/2024-EnterpriseDevelopment_Project",
      liveWebsiteLink: "https://www.youtube.com/watch?v=6MJGU0NiiDs",
      images: [Microservices1, Microservices2],
    },
  ];

  const projectsThird = [
    {
      title: "Project Python",
      description: "2D game using pycharm in python",
      imgUrl: projpython,
      moreInfo: "This project from my first year in university is another interesting one to discuss. For an elective project in one of our subjects, we were tasked with choosing a project related to what we had learned that year. Having a keen interest in game development and having studied Python, I decided to embark on creating a 2D game using Python.<br><br>Embarking on this project with modest expectations, after extensive research and deliberation, I settled on a simple yet engaging concept. In the game, you play as a witch who can shoot arrows at falling aliens using her staff. Each hit on an alien increases your score, and the game ends if an alien touches you.<br><br>I believe working on this game significantly enhanced my Python skills, offering a practical application of the programming concepts we had learned.",
      githubLink: "https://github.com/JarneDirken/2022-2DPythonGame",
      liveWebsiteLink: "https://www.youtube.com/watch?v=seunVV9bQvY",
      images: [python],
    },
    {
      title: "Project administration",
      description: "Full stack web application with vue.js, node.js and mongoDB as database",
      imgUrl: projectvuejs,
      moreInfo: "This is a side project I picked up during my internship in my last year of university. I always wanted to create an administration system for myself so that I don't have to keep track of everything on paper or in file explorer. This way, it's all online and easy to access. I know there are already plenty of similar systems that exist, but I thought, why not try to create one myself.<br><br>This is thus a work in progress. For technology, I use Vue.js because I wanted to learn Vue. For the backend, I use Node with Express.js and for now Auth0 for authentication. I will switch to Firebase when I have the time to further work on the project because I find Firebase easier to work with than Auth0 and I will have access to file storage, which I have already used. For the database, I use MongoDB because I haven't used it often and this way it will be a new experience.<br><br>Note: I have not found a way to host Node and Express.js with MongoDB online, so the backend doesn't work yet.",
      githubLink: "https://github.com/JarneDirken/2024-AdministrationProject",
      liveWebsiteLink: "https://2024-administration-project.vercel.app/",
      images: [vue1, vue2, vue3],
    },
  ];

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
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
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
                    <Tab.Pane eventKey="third">
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
                    </Tab.Pane>
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
