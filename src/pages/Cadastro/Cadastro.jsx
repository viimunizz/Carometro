import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Cadastro.css';

function Cadastro() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="https://sindusconsp.com.br/wp-content/uploads/2020/09/Logo_SENAI_PRINCIPAL_VERMELHO.png" width="100px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Cadastro">Cadastro</Nav.Link>
            <Nav.Link href="#PaginaInicial">Página Inicial</Nav.Link>
            <Nav.Link href="#Turmas">Turmas</Nav.Link>
            <Nav.Link href="#Aluno">Aluno</Nav.Link>
            <NavDropdown title="Configurações" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Administrador</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Agenda
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ocorrências</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Fale conosco☎️
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Cadastro;