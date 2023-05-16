import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navbar navbar-expand-sm nav-color'>
        <NavbarBrand href='/'>Byte Scholars</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink className='navbar-item' tag={Link} to='/'>
                Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='navbar-item' nav caret>
                AP Practice
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className='dropdown-item'>
                  <NavLink
                    className='dropdown-item'
                    tag={Link}
                    to='/multiple-choice'>
                    Multiple Choice
                  </NavLink>
                </DropdownItem>
                <DropdownItem className='dropdown-item'>
                  <NavLink className='dropdown-item' tag={Link} to='/'>
                    Free Response Questions
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className='navbar-item' tag={Link} to='/tutoring'>
                Tutoring
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navbar-item' tag={Link} to='/self-study'>
                Self-Study Courses
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
