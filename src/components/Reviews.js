import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'reactstrap';
import {
  faFaceSmile,
  faGraduationCap,
  faDollarSign,
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Reviews(args) {
  return (
    <div class='white-div'>
      <Container>
        <Row>
          <Col>
            <h1 class='tutoring-title'>Testimonials</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 class='tutoring-subtitle'>
              Hear some of the stellar reviews that our clients have provided
            </h4>
          </Col>
        </Row>
        <Row className='tutoring-icon'>
          <Col xs='4'>
            <h4 class='tutoring-title'>Niza</h4>
            <h5 class='review-subtitle'>7 lessons with Jarrett</h5>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p>
              {' '}
              Highly recommended! Jarrett was super helpful, patient and
              knowledgeable. My son was able to get his AP Computer Science
              homework and project done with his help. We already booked more
              sessions with him! Thank you Jarrett!
            </p>
            <FontAwesomeIcon icon={faQuoteRight} />
            <br />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
          </Col>
          <Col xs='4'>
            <h4 class='tutoring-title'>Rachelle</h4>
            <h5 class='review-subtitle'>3 lessons with Jarrett</h5>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p>
              {' '}
              Excellent teacher and support for AP Computer Science! Jarrett is
              very patient and helped me with many homework corrections for AP
              Computer Science. He took the time to carefully explain the
              processes and I really have a good understanding of how to do the
              work now. I highly recommend him.
            </p>
            <FontAwesomeIcon icon={faQuoteRight} />
            <br />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
          </Col>
          <Col xs='4'>
            <h4 class='tutoring-title'>Nilima</h4>
            <h5 class='review-subtitle'>5 lessons with Jarrett</h5>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p>
              {' '}
              Patient and knowledgeable tutor. An excellent tutor. He is helping
              my son with his AP Computer Science A class. He makes the more
              difficult concepts understandable. My son is very happy working
              with Jarrett.
            </p>
            <FontAwesomeIcon icon={faQuoteRight} />
            <br />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
          </Col>
        </Row>
        <Row className='tutoring-icon'>
          <Col xs='4'>
            <h4 class='tutoring-title'>Xiaoli</h4>
            <h5 class='review-subtitle'>8 lessons with Jarrett</h5>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p>
              {' '}
              Jarrett helped my daughters for her AP computer class. He
              explained very tricky concepts by showing her how to do it from
              the beginning to the end. It takes a lot of patience. The lesson
              went great. Will definitely use him again.
            </p>
            <FontAwesomeIcon icon={faQuoteRight} />
            <br />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
          </Col>
          <Col xs='4'>
            <h4 class='tutoring-title'>Mona</h4>
            <h5 class='review-subtitle'>15 lessons with Jarrett</h5>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p>
              {' '}
              My daughter says he explains the concepts very well for computer
              science class. He was able to clear up any issues she had with
              understanding some fundamental concepts and also ensured she
              practiced many problems to get comfortable with the topic.
            </p>
            <FontAwesomeIcon icon={faQuoteRight} />
            <br />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
          </Col>
          <Col xs='4'>
            <h4 class='tutoring-title'>Jim</h4>
            <h5 class='review-subtitle'>2 lessons with Jarrett</h5>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p>
              {' '}
              Better than could have imagined. He explained everything perfectly
              and directly in line with the AP unit information. We will
              definitely be reaching out to Jarrett on a more regular
              "proactive" schedule. I cannot thank you enough for what you did.
            </p>
            <FontAwesomeIcon icon={faQuoteRight} />
            <br />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: '#39A2AE' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reviews;
