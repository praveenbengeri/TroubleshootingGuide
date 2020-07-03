import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const RightNav = () => {
  return (
    <div style={{background:"#f8f9fa"}}>
      <p >Quick links</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Hotfix information</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Suggestion box</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Sample code</NavLink>
        </NavItem>
        
      </Nav>
      <hr />
      
    </div>
  );
}

export default RightNav;