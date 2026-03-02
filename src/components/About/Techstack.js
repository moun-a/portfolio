import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {CgCPlusPlus} from 'react-icons/cg'
import {
  DiPython,
  DiGit,
  DiLinux,
} from 'react-icons/di'
import {
  SiArduino,
  SiMqtt,
  SiEspressif,
  SiStmicroelectronics,
  SiIntel,
} from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStmicroelectronics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEspressif />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMqtt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  )
}

export default Techstack
