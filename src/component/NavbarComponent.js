import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import logo from '../Assets/a.png';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div>
        <Navbar
          light
          expand="md"
          style={{ padding: '0px', backgroundColor: 'white' }}
          fixed="top"
        >
          <NavbarBrand href="/" style={{ marginLeft: '5%' }}>
            <img src={logo} alt="Logo" height={'100px'} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="justify-content-end"
              navbar
              style={{ width: '95%', color: 'black', fontWeight: 'bold' }}
            >
              <NavItem style={{ marginRight: '2%' }}>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem style={{ marginRight: '2%' }}>
                <NavLink href="#portofolio">Data Peserta</NavLink>
              </NavItem>
              <NavItem style={{ marginRight: '2%' }}>
                <NavLink href="#pricing">About</NavLink>
              </NavItem>
              <NavItem style={{ marginRight: '2%' }}>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  )
}

export default NavbarComponent