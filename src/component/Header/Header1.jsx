import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Hamburger from './Hamburger'

function Header1() {
    return (
        <>
            <Navbar bg="light" className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>

                    <Hamburger />
                </Container>
            </Navbar>
        </>
    );
}

export default Header1;