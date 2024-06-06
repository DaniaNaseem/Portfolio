import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dania Naseem </span>
             By profession,I'm an avid programmer fueled by enthusiasm. A quick learner by nature, I thrive on self-improvement and embrace challenges with open arms.
             Exploring new technologies is not just a hobby; it's my passion.
             I find joy in problem-solving and am deeply invested in making the web a more accessible place for everyone. Whether it's frontend, backend, or full-stack development, I'm equally enamored by all facets of web application development. Currently seeking opportunities that align with my skills and interests, I'm eager to contribute to impactful projects
                   
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Do pottery
            </li>
            <li className="about-activity">
              <ImPointRight /> Ineract with people
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dania</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
