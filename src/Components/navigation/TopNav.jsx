import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

function TopNav() {
    let expand = "md";
    const [navbarBg, setNavbarBg] = useState(false);


    const handleScroll = () => {
        if (window.scrollY > 800) {
            setNavbarBg(true); // Change to the desired background color
        } else {
            setNavbarBg(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Navbar key={expand} expand={expand} className={`${navbarBg ? "bg-light" : "bg-transparent"} bg-body-tertiary mb-3`} fixed="top" style={{ width: '100%', zIndex: 100 }}>
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
                                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className=" justify-content-start justify-content-md-between align-items-start align-items-md-center w-100 CustomPadding ">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">About</Nav.Link>
                                <Nav.Link className='d-none d-md-block' href="#action3"><Navbar.Brand href="#">FLATALLY</Navbar.Brand></Nav.Link>
                                <NavDropdown
                                    title="Areas"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item href="#action5">Camden Town</NavDropdown.Item>
                                    <NavDropdown.Item href="#action6">
                                        Notting Hill
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action7">
                                        Peckham
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action4">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNav;
