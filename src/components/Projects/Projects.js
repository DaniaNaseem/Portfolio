import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import datadrive from "../../Assets/Projects/datadrive.png";
import quizzypop from "../../Assets/Projects/quizzypop.png";
import chatbox from "../../Assets/Projects/chatbox.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbox}
              isBlog={false}
              title="SAAS AI CHATBOX"
              description="This project is a comprehensive AI chatbot for email marketing, built with Nextjs15, Clerk, Neon, and other advanced tools. It features an automated AI sales representative, real-time chat, and appointment booking with payment processing. The platform is customizable with white-labeling options, integrates with Stripe, and includes a financial dashboard. Additionally, it offers secure file uploads, an SEO-optimized blog, and a sleek, minimal UI with light/dark mode toggling"
             // ghLink="https://github.com/soumyajit4419/Chatify"
            //  demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datadrive}
              isBlog={false}
              title="HR Data Drive"
              description="This Project is a web-based corporate tool to enhance HR management through advanced data analytics and reporting. Designed user-friendly interfaces for HR professionals and employees, and implemented predictive analytics using machine learning for data-driven decisions. Integrated features like time tracking, performance evaluations, and AI-powered workforce analytics, with role-based access control and Gmail integration."
              
              demoLink="https://datadarbaar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizzypop}
              isBlog={false}
              title="QuizzyPOP"
              description="A web-based trivia game integrated with blockchain technology for secure and transparent transactions. The game features real-time multiplayer interactions, rewarding players with cryptocurrency for correct answers. Utilized smart contracts to ensure fair play and automated reward distribution"
              ghLink="https://github.com/DaniaNaseem/blockchain-trivia-game"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
