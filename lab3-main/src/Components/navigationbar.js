import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// This component is the page's navbar.
// It contains links to every other page.
const NavigationBar = () => {
  return (
    //Navbar's design
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/read">Read</Nav.Link>
        <Nav.Link as={Link} to="/create">Header</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;