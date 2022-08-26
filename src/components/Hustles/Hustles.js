import React from "react";
import { Container } from "react-bootstrap";
import RenderCards from "../Common/RenderCards";
import Particle from "../Particle2";

function Hustles() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 style={{ fontSize: "2.6em" }} className="underline">
          DESIGNING <span className="purple"> BUSINESS </span> CARDS
        </h1>
        <RenderCards />
      </Container>
    </Container>
  );
}

export default Hustles;
