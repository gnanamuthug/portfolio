import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple"> GNANAMUTHU GOVINTHAN </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently employed as a Junior developer at Sensiple software
            solutions.
            <br />
            I have completed Bachelor of Engineering (BE) in Mahakavi
            Bharathiyar College of Engineering & Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          +
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning AI Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          {/* IVR Developer with 3+ years of experience in designing, developing, and deploying scalable 
conversational AI and telephony solutions using Twilio, Dialogflow CX, and Node.js. Proven 
expertise in reducing call handling times by 25% through intelligent voice automation and 
seamless system integrations. Strong background in multi-turn dialogue management, 
backend API integration, and cloud-based IVR architecture. Passionate about building AI
powered solutions for enhanced customer engagement.  */}
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">GNANAMUTHU</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
