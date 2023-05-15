import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../components/NavBar';
import Reviews from '../components/Reviews';
import TutorTimeline from '../components/TutorTimeline';
import {
  faFaceSmile,
  faGraduationCap,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tutoring(args) {
  return (
    <div class='tutoring'>
      <NavBar />
      <div class='white-div'>
        <Container>
          <Row>
            <Col>
              <h1 class='tutoring-title'>Tutoring Services</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 class='tutoring-subtitle'>
                Striving to provide the best and most effective tutoring
                services.
              </h4>
            </Col>
          </Row>
          <Row className='tutoring-icon'>
            <Col xs='4'>
              <FontAwesomeIcon
                icon={faFaceSmile}
                size='5x'
                style={{ color: '#39A2AE' }}
              />
              <h4 class='tutoring-title'>Satisfaction Guaranteed</h4>
              <p>
                {' '}
                If you are unhappy with any of my services for any reason, I
                will provide you with no charge for the session. No commitment
                is required so you can find a match that's right for you.
              </p>
            </Col>
            <Col xs='4'>
              <FontAwesomeIcon
                icon={faGraduationCap}
                size='5x'
                style={{ color: '#39A2AE' }}
              />
              <h4 class='tutoring-title'>Subject Competency</h4>
              <p>
                {' '}
                I host tutoring services for computer science courses for the
                grades of K-12 and college. Whether it's basic programming
                concepts or AP Computer Science, I will make sure that you
                succeed.
              </p>
            </Col>
            <Col xs='4'>
              <FontAwesomeIcon
                icon={faDollarSign}
                size='5x'
                style={{ color: '#39A2AE' }}
              />
              <h4 class='tutoring-title'>Competitive Rates</h4>
              <p>
                {' '}
                My tutoring services have rates that are competitive with other
                tutors and typically start at $80 per hour. This rate is
                flexible based on the difficulty of the class and services
                needed.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <TutorTimeline />
      <Reviews />
    </div>
  );
}

export default Tutoring;
