import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Login.css';
import { Link } from 'react-router-dom';

function Login()  {
  return (

    <div className='body'>
    <Navbar expand="lg" id='login'>
      <Container>
        <Navbar.Brand href="#home"><img src="https://sindusconsp.com.br/wp-content/uploads/2020/09/Logo_SENAI_PRINCIPAL_VERMELHO.png" width="200px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Login">Login</Nav.Link>
            <Link className='cadastro-nav' to="/cadastro">Cadastro</Link>
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
        <Navbar.Brand href="#home"><img className='Brasil' src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/5881291177d6af418ec43c3c95e05056.jpg" width="50px" /></Navbar.Brand>

      </Container>
    </Navbar>

    <div className='caixa'>
      <form action="" className='formLogin'>
        <div className='Login'>
          <h1>LOGIN</h1>
          <div className='formulario'>
            <label htmlFor="">Usuário:</label>
            <input type="text" placeholder='Usuário:'/>
            <br />
            <label htmlFor="">Senha:</label>
            <input type="password" placeholder='Senha:'/>

            <div className='naoCadastro'><Link className="cadastro-style" to="/cadastro">Não tem um cadastro? Cadastra-se agora</Link></div><br />
            <div className='divButtonEntrar'><button className='buttonEntrar'>Entrar</button></div>
          </div>
        </div>
      </form>
    </div>
    </div>


  );
  
}

export default Login;