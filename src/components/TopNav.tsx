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
  NavbarText
} from 'reactstrap';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar style={{background:"#2F4F4F !important"}} color="light" light expand="md">
        <NavbarBrand href="/">Office Dev</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Introduction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components">Basic Framework</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                ToolsInformation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                When to use a tool
                </DropdownItem>
                <DropdownItem>
                  Steps to use a tool
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;