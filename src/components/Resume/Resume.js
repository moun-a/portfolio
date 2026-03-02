import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/cv_an_impression.pdf";
import { AiOutlineDownload } from "react-icons/ai";
// Google Analytics removed
function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="INPT – Cycle Ingénieur (SESNUM)"
              date="2024 – Present"
              content={[
                "Systèmes Embarqués et Services Numériques specialization.",
              ]}
            />
            <Resumecontent
              title="Classes Préparatoires TSI"
              date="2022 – 2024"
              content={[
                "Lycée d'Excellence Mohamed VI, Benguerir.",
              ]}
            />
            <Resumecontent
              title="Baccalauréat STE"
              date="2021 – 2022"
              content={[
                "Sciences et Technologies Électriques – Lycée Technique Prince Moulay Abdellah, Sidi Kacem.",
              ]}
            />

            <h3 className="resume-title">Technical Skills</h3>
            <Resumecontent
              title=""
              content={[
                "Languages: C (embedded), Python (data / ML)",
                "Microcontrollers: STM32, ESP32, ESP8266, Arduino",
                "FPGA: Digital logic, VHDL (basics), Quartus",
                "Protocols: LoRa, WiFi, MQTT, UART, I2C",
                "Tools: Git, GitHub, VS Code, Linux",
                "Languages: French (fluent), English (intermediate), Arabic (native)",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Club MSC – Mentoring"
              date="2026"
              content={[
                "Mentoring preparatory class students with their TIPE projects.",
              ]}
            />
            <Resumecontent
              title="INE Alumni Platform – Team Lead"
              date="2024 – Present"
              content={[
                "Platform connecting students and alumni (directory, opportunities, events).",
                "Team coordination, task organization and project follow-up.",
              ]}
            />
            <Resumecontent
              title="ALUDEX – Marraine"
              date="2024 – Present"
              content={[
                "Mentoring and guiding students at Lycée d'Excellence Mohamed VI.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
