import React from 'react';
import NavBar from '../components/NavBar';
import { Container } from 'reactstrap';

function APPractice(args) {
  return (
    <div class='tutoring'>
      <NavBar />
      <Container className='test-container'>
        <h1 class='tutoring-title'>Multiple Choice Practice</h1>
        <h4 class='tutoring-subtitle'>
          Choose a practice multiple-choice test to get started
        </h4>
      </Container>
    </div>
  );
}

export default APPractice;
