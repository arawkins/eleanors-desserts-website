import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {
    return(
        <Navbar expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">Eleanor's Desserts</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#desserts">Desserts</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;