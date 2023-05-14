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
                <NavbarText className='m-2 navbar-item'>
                  Multiple Choice
                </NavbarText>
                <DropdownItem className='navbar-item'>
                  <NavLink className='navbar-item' tag={Link} to='/ap-practice'>
                    AP Computer Science Principles
                  </NavLink>
                </DropdownItem>
                <DropdownItem className='navbar-item'>
                  <NavLink className='navbar-item' tag={Link} to='/ap-practice'>
                    AP Computer Science A
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <NavbarText className='m-2 navbar-item'>
                  Free Response Questions
                </NavbarText>
                <DropdownItem className='navbar-item'>
                  <NavLink className='navbar-item' tag={Link} to='/ap-practice'>
                    AP Computer Science A
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
