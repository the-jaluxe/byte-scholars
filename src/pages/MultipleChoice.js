import React from 'react';
import NavBar from '../components/NavBar';
import {
  Container,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
      <hr />
      <Container className='test-container'>
        <h2 class='tutoring-title'>AP Computer Science Principles</h2>
      </Container>
      <Container className='test-container'>
        <UncontrolledAccordion defaultOpen='1'>
          <AccordionItem>
            <AccordionHeader targetId='1'>
              AP Computer Science Principles Practice Test #1
            </AccordionHeader>
            <AccordionBody accordionId='1'>
              Test Format:
              <ul>
                <li>70 multiple-choice questions</li>
                <li>Time Limit: 2hrs</li>
                <li>4 answer options for each question</li>
              </ul>
              <Link to='/multiple-choice/apcsp/quiz1'>
                <Button className='test-button' color='primary'>
                  Start
                </Button>
              </Link>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId='2'>
              AP Computer Science Principles Practice Test #2
            </AccordionHeader>
            <AccordionBody accordionId='2'>
              <strong>This is the second item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId='3'>
              AP Computer Science Principles Practice Test #3
            </AccordionHeader>
            <AccordionBody accordionId='3'>
              <strong>This is the third item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </Container>
    </div>
  );
}

export default APPractice;
