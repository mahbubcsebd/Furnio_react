import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
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
                <NavLink to="/">Home</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/home2">Home 2</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/home3">Home 3</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <NavLink to="/shop">Shop</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/blog">Blog</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contact">Contact</NavLink>
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
