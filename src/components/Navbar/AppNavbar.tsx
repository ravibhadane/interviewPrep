import { useState } from "react"

import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (

    <Navbar color="dark" dark expand="md" className="px-4">
      <NavbarBrand to="/" >
       Q&A
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="w-100 justify-content-center justify-content-md-center gap-4">

          <NavItem>
            <NavLink to="/" className="nav-link">
              Menu
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/javascript" className="nav-link">
              JavaScript
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/angular" className="nav-link">
              Angular
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/common" className="nav-link">
              Common
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/coding" className="nav-link">
              Coding
            </NavLink>
          </NavItem>

        </Nav>
      </Collapse>
    </Navbar>
  )
}
export default AppNavbar;