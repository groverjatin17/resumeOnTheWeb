import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle2";

import dmoagh from "../../Assets/Projects/dmoagh.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import headline from "../../Assets/Projects/headline.jpg";
import sharmaConsultancy from "../../Assets/Projects/sharmaConsultancy.webp";
import shopnsmile from "../../Assets/Projects/shopnsmile.PNG";
import portfolio1 from "../../Assets/Projects/portfolio1.0.png";

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
              imgPath={portfolio1}
              isBlog={false}
              title="Portfolio 1.0"
              description="Vintage version of my portfolio. The design was not great so I had to discard it. But it has some amazing features in it."
              link="https://groverjatin17-portfolio.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dmoagh}
              isBlog={false}
              title="DMOAGH"
              description="A responsive, multilingual website for Ortho hospital where patients can book an appointment and gather necessary information."
              link="https://world-of-ortho.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="International Students Dashboard"
              description="Interactive, realtime dashboard that consists variety of charts to identify patterns on data of international students from year 2011 to year 2020."
              link="https://groverjatin17.github.io/students_analysis/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopnsmile}
              isBlog={false}
              title="Shop-N-Smile"
              description="A dummy ecommerce website I built for my Capstone project. It was build using react-bootstrap and MongoDB. It has cool features in it such as filtering products, authenticationa, authorization and so on"
              link="https://github.com/groverjatin17/shop_n_smile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sharmaConsultancy}
              isBlog={false}
              title="Sharma Consultancy"
              description="A multinational human resource consulting firm headquartered in Toronto, Canada"
              link="https://github.com/groverjatin17/sharma_consultacy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={headline}
              isBlog={false}
              title="Headline Sythesizer"
              description="A Python script BeautifulSoup4 for Web Scrapping and fetching news headlines. Then the app uses text-to-speech feature to vocalize the news."
              link="https://github.com/groverjatin17/headline_synthesizer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
