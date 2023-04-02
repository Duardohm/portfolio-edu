import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'animate.css';
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <sapn className="navbar-toggler-icon"></sapn>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projetos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/edupe/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Ícone do Linkedin" /></a>
              <a href="https://github.com/Eh-Duardo/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Ícone do Github" /></a>
              <a href="https://www.instagram.com/Duardohm/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Ícone do Instagram" /></a>
              <a href="https://linktr.ee/duardohm" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Ícone de Links" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('Teste')}><span>Meu Currículo</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}