import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/img';
import style from './header.module.css';

function Header() {
  return (
    <Navbar
      bg=""
      expand="lg"
      sticky="top"
      className={style.mainNavbar}
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Home"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to="/">Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/home2">Home 2</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/home3">Home 3</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/shop">Shop</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blog">Blog</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>

          <div className={style.navIcon}>
            <Button variant='none'>
              <AiOutlineSearch />
            </Button>
            <Button variant='none'>
              <AiOutlineHeart />
            </Button>
            <Button variant='none'>
              <AiOutlineShopping />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
