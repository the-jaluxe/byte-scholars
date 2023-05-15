import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../components/NavBar';
import Reviews from '../components/Reviews';
import {
  faFaceSmile,
  faGraduationCap,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

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

      <div class='grey-div'>
        <h1 class='tutoring-title'>How Do I Start?</h1>
        <h4 class='tutoring-subtitle'>
          Learn about the ways to setup a tutoring session.
        </h4>
        <Timeline className='timeline' position='alternate'>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h1 class='tutoring-title'>Contact Us</h1>
              <p>
                Either send an email to the address listed below or sign up for
                an account on Wyzant to schedule your first session. Feel free
                to include available times, subjects needed, and the session
                length in your message.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h1 class='tutoring-title'>Session Details</h1>
              <p>
                I will personally reach out to confirm any details about the
                session either through email or Wyzant. If you need any special
                requests, please feel free to let me know and I will be sure to
                accomodate.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h1 class='tutoring-title'>Tutoring Session</h1>
              <p>
                Using the Wyzant online platform, I will set up a session for
                you to join. I have experience using different methods of
                teaching that are most effective for the content you need help
                with.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <h1 class='tutoring-title'>Finished</h1>
              <p>
                You were able to finish that homework assignment or ace that
                difficult test so it's time to celebrate. After finishing your
                first session, we can arrange repeating sessions based on your
                schedule.
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <Reviews />
    </div>
  );
}

export default Tutoring;
