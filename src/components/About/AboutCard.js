import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jatin Grover </span>
            from <span className="purple"> Punjab, India.</span>
            <br />I am a Tech savvy individual who graduated in B.Tech(Computer Science).
            <br />
            <br />
            Apart from being a full-time nerd, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> MMA
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Solo Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Backpacking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>
          <br />
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Learning is not enough, implementation matters!"{" "}
          </p>
          <footer className="blockquote-footer">Jatin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
