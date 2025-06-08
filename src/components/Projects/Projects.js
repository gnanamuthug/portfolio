import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Electric from "../../Assets/Projects/Electric Outage Reporting Bot.png"
import Healthcare from "../../Assets/Projects/Healthcare Appointment Assistant.png"
import Covid from "../../Assets/Projects/COVID Vaccination Chatbot.png"
import Portfolio from "../../Assets/Projects/Developer Portfolio Website.png"

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
              imgPath={Electric}
              isBlog={false}
              title="Electric Outage Reporting Bot"
              description="Built a conversational IVR solution for an electric utility company using Dialogflow CX and Google Cloud Functions. Users could report power outages, check restoration time, and receive SMS updates via Twilio integration."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Healthcare}
              isBlog={false}
              title="Healthcare Appointment Assistant "
              description="Developed a virtual assistant for a multispecialty hospital to help patients book appointments, get lab reports, and reschedule visits. Implemented dynamic slot filling and webhook validations."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Developer Portfolio Website"
              description="Created a responsive personal portfolio website to showcase skills, resume, and projects. Integrated GitHub API to display latest repos and commit history dynamically."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Covid}
              isBlog={false}
              title="COVID Vaccination Chatbot"
              description="Designed a smart voice/chatbot for helping users view vaccination schedules, download certificates, and reschedule appointments using Dialogflow CX and a custom Node.js webhook."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
