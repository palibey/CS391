import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Logo from './Assets/Bilkent_University_Crest.svg.png'
import {Container} from "react-bootstrap";


export function NavBar() {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#Home">
                    <img src={Logo} alt="HomeLogo"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#AboutUs">About Us</Nav.Link>
                    <Nav.Link href="#TheTeam">The Team</Nav.Link>
                    <Nav.Link href="#Documents">Documents</Nav.Link>
                    <Nav.Link href="https://github.com/cmglmsr/ORTACI-GAZETE">GitHub</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
