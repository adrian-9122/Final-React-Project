// Navbar.js
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function BrandExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary"  >
            <Container style={{backgroundColor: '#00FFFF'}}>
                <Navbar.Brand href="#home">Happy Harry's Hardware</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                         <Nav.Link href="/HomePage">Home</Nav.Link>
                        <Nav.Link href="/CustomerPage">Customers</Nav.Link>
                        <Nav.Link href="/ProductPage">Products</Nav.Link>
                        <Nav.Link href="/SalesPage">Sales</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BrandExample;