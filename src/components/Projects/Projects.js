import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import senseCareBelt from "../../Assets/Projects/SensCareBelt.jpeg";
import ecoCold from "../../Assets/Projects/EcoCold.png";
import cnn from "../../Assets/Projects/CNN1.png";
import airQuality from "../../Assets/Projects/AirQualityMonitoring.png";
import rfid from "../../Assets/Projects/RFID.png";
import campusEvent from "../../Assets/Projects/campusevent.jpeg";

// Google Analytics removed
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
              imgPath={senseCareBelt}
              isBlog={false}
              title="Ceinture Intelligente – SenseCareBelt"
              description="Health monitoring system built with ESP32 integrating LoRa and WiFi for long and short range communication. Tracks activity and transmits real-time alerts for elderly and mobility-impaired individuals."
              link="https://github.com/moun-a/SenseCareBelt.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecoCold}
              isBlog={false}
              title="EcoCold – Anomaly Detection"
              description="Connected refrigerator monitoring system. Collects sensor data (temperature, movement) and uses a Python-based anomaly detection model to predict cold chain failures."
              link="https://github.com/moun-a/EcoCold.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnn}
              isBlog={false}
              title="Unknown Faces Detector"
              description="Remote internship project at INPT. Uses CNN to detect unknown faces entering a private space and alerts the owner via Telegram with a screenshot of the intruder."
              link="https://github.com/moun-a/Unknown_faces_detector.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rfid}
              isBlog={false}
              title="Contrôle d'Accès RFID Connecté"
              description="Embedded system using ESP8266 with RFID (MFRC522) for access control. Features authentication, WiFi communication with MySQL via PHP server, and unauthorized access alerts."
              link="https://github.com/moun-a"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airQuality}
              isBlog={false}
              title="Air Quality Monitoring System (TIPE)"
              description="Embedded system monitoring air quality in gyms using gas and particulate sensors. Displays real-time status (good/moderate/bad) on-screen per norms, with a companion app for remote checking before visiting."
              link="https://github.com/moun-a"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campusEvent}
              isBlog={false}
              title="Campus Events Hub"
              description="Academic platform built to enhance development skills. A collaborative web project for managing and discovering campus events."
              link="https://github.com/moun-a/Campus-Eevents-Hub.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
