import logo from '../../assets/logo.png';
import './header.css';

function Header() {
    
  return (
      <div className="header">
      <img src={logo} className="logo-acm" alt="logo" />
          
          <div class="topnav">
              <a href="#quem-somos">SOBRE</a>
              <a href="#servicos">SERVIÇOS</a>
              <a href="#portfolio">PORTFÓLIO</a>
              <a href="#contato">CONTATO</a>
          </div>
      </div>
  );
}

export default Header;
