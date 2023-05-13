import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import AnimatedBg from '../components/AnimatedBg';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  faFileLines,
  faUserGraduate,
  faTerminal,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home(args) {
  return (
    <div>
      <AnimatedBg />
      <div class='container'>
        <h1 class='home-text'>Why choose us?</h1>
        <hr />
      </div>
      <div class='container'>
        <div class='row'>
          <div class='col-sm-3 home-text'>
            <FontAwesomeIcon
              icon={faFileLines}
              size='5x'
              style={{ color: '#39A2AE' }}
            />
            <h3 class='icon-text-title'>Practice AP Tests</h3>
            <p class='icon-text'>
              Use our curated multiple-choice practice tests for both AP
              Computer Science A and AP Computer Science Principles to acheive
              mastery on the multiple-choice parts of the exam.
            </p>
          </div>
          <div class='col-sm-3 home-text'>
            <FontAwesomeIcon
              icon={faUserGraduate}
              size='5x'
              style={{ color: '#39A2AE' }}
            />
            <h3 class='icon-text-title'>Private Tutoring</h3>
            <p class='icon-text'>
              Want a private tutoring session? Feel free to sign up for our
              tutoring services to arrange a one-on-one session to get any help
              you need. Whether it is AP classes or college level class, we are
              here to help.
            </p>
          </div>
          <div class='col-sm-3 home-text'>
            <FontAwesomeIcon
              icon={faLaptop}
              size='5x'
              style={{ color: '#39A2AE' }}
            />
            <h3 class='icon-text-title'>Self-Study Courses</h3>
            <p class='icon-text'>
              Prefer to learn computer science at your own pace? We offer
              self-study courses for Java and Python with a focus on AP classes.
              If you find one that interests you, feel free to enroll and have
              fun!
            </p>
          </div>
          <div class='col-sm-3 home-text'>
            <FontAwesomeIcon
              icon={faTerminal}
              size='5x'
              style={{ color: '#39A2AE' }}
            />
            <h3 class='icon-text-title'>Coding Practice</h3>
            <p class='icon-text'>
              Use our coding environments to practice Free Response Questions
              for AP Computer Science A or improve your code writing skills. It
              offers many practice problems of varying difficulties that will
              ensure you have a solid understanding of coding.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
