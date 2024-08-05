import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

function TopNav() {
    let expand = "md";
    return (
        <div>
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" fixed="top" style={{ width: '100%', zIndex: 100 }}>
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="border-0">
                        <FaBars />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-between align-items-center w-100" style={{ padding: "0px 15rem" }}>
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <Nav.Link href="#action3"><Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand></Nav.Link>
                                <Nav.Link href="#action4">Link</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action6">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action7">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNav;
