import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Tankhwa"
              description="Its a payroll management
               system that has the capability of 
               calculating wages, tracking attendance,
                withholding taxes and deductions, printing
                 and delivering checks, completing direct
                  deposits, paying premiums to insurance 
                  carriers, and/or paying employment taxes
                   to the government. This software can be
                    purchased through an HR software vendor
                     or included in an HR software package 
                     as a module within a comprehensive system."
             
            />
             
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              title="Prosper Fleet"
              description="PropserFleet is a 
              lead generation, sales, and business
               intelligence research tool for the trucking 
               industry that empowers you to search over 100
                data points per fleet in the context of your 
                target market and the fleet characteristics
               that are actionable for your business."
            />
            <Button variant="primary" href={"https://www.valgen.com/"} target="_blank" style={{marginTop:'-70px'}}>
          <BiLinkExternal /> &nbsp;
          { "View Project"}
        </Button>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="My QUE"
              description="Q U E is a mobile app that
               allows you to position yourself in a waiting 
               queue without the need to be physically present. 
               By leveraging the power of technology at your fingertips,
                you can be doing any other tasks or simply be sipping 
              soda in the parking lot as you wait – the smart way!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              title="Getac Video Solution"
              description="Getac Enterprise Data Management is
               one of the most powerful backend video management 
               tools in the industry. The highly scalable software 
               provides dashboard overview, media management and
                remote management to all Getac devices."
            />
            <Button variant="primary" href={"https://getacvideo.com/"} target="_blank" style={{marginTop:'-70px'}}>
          <BiLinkExternal /> &nbsp;
          { "View Project"}
        </Button>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
