import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/Avatar.png'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an engineering student at <b className="purple">INPT</b>,
              passionate about
              <b className="purple"> embedded systems</b> and
              <b className="purple"> IoT</b>.
              <br />
              <br />I work with microcontrollers like
              <i>
                <b className="purple"> STM32, ESP32, and ESP8266 </b>
              </i>
              using <b className="purple">C</b> and
              <b className="purple"> Python</b>, and I explore
              <b className="purple"> FPGA</b> with VHDL.
              <br />
              <br />
              My interests revolve around &nbsp;
              <i>
                <b className="purple">
                  intelligent embedded systems, real-time applications, and
                  wireless communication{' '}
                </b>
              </i>
              using <b className="purple">LoRa, MQTT, and WiFi</b>, with a
              focus on <b className="purple">data-oriented embedded design</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/moun-a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mouna-mouhib-a1789b320"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
