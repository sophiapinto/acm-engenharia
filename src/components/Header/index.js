import logo from '../../assets/logo.png';
import './header.css';

function Header() {
    
  return (
      <div className="header">
      <img src={logo} className="logo-acm" alt="logo" />
          
          <div class="topnav">
              <a href="#quem-somos">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#portfolio">Portfólio</a>
              <a href="#contato">Contato</a>
          </div>
      </div>
  );
}

export default Header;
