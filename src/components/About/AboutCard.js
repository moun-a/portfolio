import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Mouna Mouhib </span>
            from <span className="purple"> Morocco.</span>
            <br />I am an engineering student at
            <span className="purple"> INPT</span>, specializing in
            Embedded Systems & IoT. I have hands-on experience with
            <span className="purple"> ESP32, STM32, and LoRa</span> through
            applied projects in health, cold chain, and connected systems.
            <br />
            <br />
            My interests include intelligent embedded systems, wireless
            communication, and data-oriented embedded design.
            <br />
            <br />
            Apart from engineering, some other activities that I love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building IoT prototypes
            </li>
            <li className="about-activity">
              <ImPointRight /> Electronics & image processing
            </li>
            <li className="about-activity">
              <ImPointRight /> Arts manuels & Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering & mentoring students
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "The best way to predict the future is to create it."{' '}
          </p>
          <footer className="blockquote-footer">Peter Drucker</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
