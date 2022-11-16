import Logo from '../pictures/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/*import NavDropdown from 'react-bootstrap/NavDropdown';*/
import './styles/navbar.css';

export default function NavBar () {
    return (
        <nav id="nav-bar">
          <Navbar bg="black" expand="lg" fixed="top" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    width="auto"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="justify-content-end fs-5">
                  <Nav.Link href="#noc-gier">Noc Gier</Nav.Link>
                  <Nav.Link href="#turniej">Turniej</Nav.Link>
                  <Nav.Link href="#game-jam">BIT Jam</Nav.Link>
                  <Nav.Link href="#warsztaty">Warsztaty</Nav.Link>
                  <Nav.Link href="#o-nas">O nas</Nav.Link>
                  <Nav.Link href="#partnerzy">Partnerzy</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
    )}
