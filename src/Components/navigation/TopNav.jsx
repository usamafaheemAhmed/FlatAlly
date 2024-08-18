import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import { FaBars, FaSearch } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { LoggedInUserTokenJwt, PreferenceState } from '../../Atom';

function TopNav() {
    let expand = "md";
    let loggedUserToken = useRecoilValue(LoggedInUserTokenJwt)
    let preferenceObj = useRecoilValue(PreferenceState);

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

    // let Nav = useNavigate();

    let handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

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
                                <Navbar.Brand as={NavLink} to="/">FLATALLY</Navbar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start justify-content-md-between align-items-start align-items-md-center w-100 CustomPadding">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                                {loggedUserToken?.accessToken && preferenceObj && (
                                    <Nav.Link as={NavLink} to="/DashBoard/notification">Notification</Nav.Link>
                                )}
                                <NavLink to="/About" className="nav-link">About</NavLink>
                                <NavLink to="/" className="nav-link d-none d-md-block">
                                    <Navbar.Brand href="#">FLATALLY</Navbar.Brand>
                                </NavLink>

                                <Nav.Link as={NavLink} to="/Search">Search <BiSearchAlt style={{ marginTop: "-5px" }} /></Nav.Link>
                                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

                                {loggedUserToken?.accessToken && preferenceObj && (
                                    <NavDropdown
                                        title="Profile"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item as={NavLink} to="/DashBoard/Profile">DashBoard</NavDropdown.Item>
                                        <NavDropdown.Item as={NavLink} to="/History">Notifications</NavDropdown.Item>
                                        <NavDropdown.Item as="button"
                                            onClick={handleLogout}
                                            className="logout-button">logout</NavDropdown.Item>
                                    </NavDropdown>
                                )}

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNav;
