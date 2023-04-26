import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "../CartWidget/CartWidget"
import LogoMundoDigital from './assest/LogoMundoDigital.png'

const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img src={LogoMundoDigital} alt="Logo Mundo Digital" width="60"
                        height="60"/>
                        <h1 className="display-6">Mundo Digital</h1>
                    </Navbar.Brand>
                </Container>
                <Nav className="me-auto">
                    <Nav.Link>Notebooks</Nav.Link>
                    <Nav.Link>Impresión</Nav.Link>
                    <Nav.Link>Gamings</Nav.Link>
                    <Nav.Link>Audio y Tv</Nav.Link>
                </Nav>
                <CartWidget />
            </Navbar>
        </header>
        
    )
}

export default NavBar