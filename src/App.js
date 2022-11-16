/*import NavBar from "./Components/NavBar"*/
import CookiesPopUp from "./Components/CookiesPopUp";
import MainContent from "./Components/MainContent";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./Components/Footer"
import Container from "react-bootstrap/Container";
import Logo from "./pictures/logo.png";
import Nav from "react-bootstrap/Nav";
import './Components/styles/navbar.css';
import React, {useEffect, useState, useRef} from "react";

function App() {

    const [cookiesClicked, setCookiesClicked] = useState(true);
    const [count,setCount] = useState(0)
    const prevCountRef = useRef();

    useEffect(() => {
      if(document.cookie) {
          const contains = document.cookie.includes('accepted');
          setCookiesClicked(contains);
      }
    }, [setCookiesClicked])

    useEffect(() => {
        //assign the ref's current value to the count Hook
        prevCountRef.current = count;
    }, [count]);
    function clickHandler (x) {
        setCount(x)
    }
          return (
                <div className="app">
                    <nav id="nav-bar">
                        <Navbar bg="black" expand="lg" fixed="top" variant="dark">
                            <Container>
                                <Nav.Link onClick={() => clickHandler(0)}>
                                    <img
                                        src={Logo}
                                        width="auto"
                                        height="50"
                                        className="d-inline-block align-top"
                                        alt="Logo BIT Festival"
                                    />
                                </Nav.Link>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                    <Nav className="justify-content-end fs-5">
                                        <Nav.Link onClick={() => clickHandler(1)}>Noc Gier</Nav.Link>
                                        <Nav.Link onClick={() => clickHandler(2)}>Turniej</Nav.Link>
                                        <Nav.Link onClick={() => clickHandler(3)}>BIT Jam</Nav.Link>
                                        {/*<Nav.Link onClick={() => clickHandler(4)}>Warsztaty</Nav.Link>*/}
                                        <Nav.Link onClick={() => clickHandler(5)}>O nas</Nav.Link>
                                        <Nav.Link onClick={() => clickHandler(6)}>Partnerzy</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </nav>
                    <MainContent
                        count = {count}
                    />
                    <Footer/>
                    {!cookiesClicked && <CookiesPopUp/>}
                </div>
          );
}

export default App;
