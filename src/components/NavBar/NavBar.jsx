import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "../CartWidget/CartWidget"
import LogoMundoDigital from './assest/LogoMundoDigital.png'

const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand >
                        <img src={LogoMundoDigital} alt="Logo Mundo Digital" width="60"
                        height="60"/>
                        <h1 className="display-6">Mundo Digital</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-5" variant="tabs"  >
                            <Nav.Item>
                                <Nav.Link>Notebook</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>Impresión</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>Gamings</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>Audio y Tv</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                <CartWidget />
                </Container>
            </Navbar>
        </header>
        
    )
}

export default NavBar