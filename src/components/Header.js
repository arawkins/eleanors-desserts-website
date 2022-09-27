import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <header>
            <Container>

                <h1 className="text-center">Eleanor's Desserts</h1>

                {/* 
                <Navbar.Brand href="#home" className="text-center"></Navbar.Brand>
                
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#desserts">Desserts</Nav.Link>
                    <Nav.Link href="#aboutEleanor">About</Nav.Link>
                </Nav>
                */}
            </Container>
        </header>
    )
}

export default Header;