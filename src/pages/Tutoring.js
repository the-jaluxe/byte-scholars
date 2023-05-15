import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../components/NavBar';
import Reviews from '../components/Reviews';
import TutorTimeline from '../components/TutorTimeline';
import Footer from '../components/Footer';
import {
  faFaceSmile,
  faGraduationCap,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePicture from '../assets/main.jpg';

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
      <div class='grey-div'>
        <Container>
          <Row>
            <Col>
              <h1 class='tutoring-title'>Meet The Founder</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container className='image-container'>
                <img
                  src={ProfilePicture}
                  alt='My Profile'
                  style={{ borderRadius: '50%' }}
                />
              </Container>
            </Col>
          </Row>
          <Row>
            <h4 class='tutoring-title'>Jarrett Cornelison</h4>
            <h5 class='review-subtitle'>Founder</h5>
            <Container className='about-me'>
              <p>
                I have extensive experience tutoring students in both AP
                Computer Science A and AP Computer Science Principles on{' '}
                <a href='https://is.gd/9J9XDf'>Wyzant</a> and have also created
                self-study AP Computer Science courses on{' '}
                <a href='https://www.udemy.com/course/ap-computer-science-a-java-concepts-and-fundamentals/?referralCode=729147BB9513889EB831'>
                  Udemy
                </a>
                . I am also experienced with using multiple different
                programming languages such as Java, Python, and C++. I majored
                in Computer Science at UC San Diego while graduating with an A-
                average. I am now working as a Software Engineer at a Fortune
                500 company and enjoy teaching in my spare time.
              </p>
              <p>
                I have experience tutoring throughout my academics and I enjoy
                every part of making difficult concepts in math and computer
                science very easy and engaging for all ages. Whether you need
                help with the basics of programming or advanced topics like data
                structures, I have you covered. I have also taken classes in
                Computer Science education and love teaching others about the
                basics of Computer Science in all sorts of different languages
                like Python, Java, and C++.
              </p>
              <p>
                As a software engineer, I can also help provide college and
                career advice for anyone looking to work in the software field.
                If you would like to know the best ways of getting a career in
                the field, feel free to reach out and we can develop an
                effective plan together. Please feel free to contact me anytime
                about any questions or problems you may have. I am looking
                forward to getting to tutor you about computer science topics
                and help get through any material that may seem challenging. I
                look forward to hearing from you. Thanks!
              </p>
            </Container>
          </Row>
        </Container>
      </div>
      <div class='white-div'>
        <Container>
          <Row>
            <Col>
              <h1 class='tutoring-title'>Arrange A Tutoring Session</h1>
              <h4 class='tutoring-subtitle'>
                Include subjects needs, session length, and possible dates in
                your message. Thanks!
              </h4>
              <h1 class='tutoring-title'>Please Email Me At</h1>
              <h1 class='tutoring-title'>
                <a href='mailto:jarrett@bytescholars.com'>
                  jarrett@bytescholars.com
                </a>
              </h1>
              <h1 class='tutoring-title'>Or</h1>
              <h1 class='tutoring-title'>Sign Up For An Account On</h1>
              <h1 class='tutoring-title'>
                <a href='https://is.gd/9J9XDf'>Wyzant</a>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Tutoring;
