import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Umair Anser </span>
            <br />My interest and passion revolve around the field of Computer Science 
             & Information Technology. My interest in Computer Science
             is wide-ranging and limitless. My aim is to strengthen
              the understanding of programming and software 
              development. I mostly use React.JS in FrontEnd 
              and ASP.Net Core in BackEnd.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Tell me and I forget. Teach me and I remember. Involve me and I learn."{" "}
          </p>
          <footer className="blockquote-footer">Benjamin Franklin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
