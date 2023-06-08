import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import JavaCourse from '../assets/java-course.jpg';
import PythonCourse from '../assets/python-course.jpg';

function SelfStudy(args) {
  return (
    <div class='tutoring'>
      <NavBar />
      <Container className='self-container'>
        <Row>
          <Col>
            <h1 class='tutoring-title'>Self-Study Courses</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 class='tutoring-subtitle'>
              Want a self-guided course on coding? Choose from our options
              below:
            </h4>
          </Col>
        </Row>
      </Container>
      <Container className='d-flex course-container'>
        <Row className='m-auto align-self-center'>
          <Card>
            <a href='https://www.udemy.com/course/ap-computer-science-a-java-concepts-and-fundamentals/?referralCode=729147BB9513889EB831'>
              <img className='img-fluid' alt='Java Course' src={JavaCourse} />
            </a>
            <CardBody>
              <CardTitle tag='h5'>
                AP Computer Science A - Java Concepts and Fundamentals
              </CardTitle>
              <CardSubtitle className='mb-2 text-muted' tag='h6'>
                Attain a high-level understanding of Java concepts and
                fundamentals with a focus on succeeding on the AP Exam.
              </CardSubtitle>
              <Button href='https://www.udemy.com/course/ap-computer-science-a-java-concepts-and-fundamentals/?referralCode=729147BB9513889EB831'>
                Visit
              </Button>
            </CardBody>
          </Card>
        </Row>
      </Container>
      <Container className='d-flex course-container'>
        <Row className='m-auto align-self-center'>
          <Card>
            <img
              className='img-fluid coming-soon'
              alt='Python Course'
              src={PythonCourse}
              width='750'
              height='422'
            />
            <CardBody>
              <CardTitle tag='h5'>
                Complete Python Crash Course For Beginners
              </CardTitle>
              <CardSubtitle className='mb-2 text-muted' tag='h6'>
                Learn Python with an easy to follow course featuring hands-on
                coding exercises and quick videos in under 4 hours.
              </CardSubtitle>
              <Button href>Visit</Button>
            </CardBody>
          </Card>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default SelfStudy;
