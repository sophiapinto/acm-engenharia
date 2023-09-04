import './footer.css';
import linkedin from '../../assets/linkedin.svg';
import instagram from '../../assets/instagram.svg';
import whatsapp from '../../assets/whatsapp.svg';

function Footer() {
    
  return (
    <footer>
      <div className="footer-wrapper">
          <span className='footer-text'>Copyright&copy;&nbsp;2023.<br/>Desenvolvido por Sophia Pinto.</span>
          
          <div class="footer-nav">
              <a href="#quem-somos">
                <img src={linkedin} className="logo" alt="logo-linkedin" />
              </a>
              <a href="#quem-somos">
                <img src={instagram} className="logo" alt="logo-linkedin" />
              </a>
              <a href="#quem-somos">
                <img src={whatsapp} className="logo" alt="logo-linkedin" />
              </a>
          </div>

      </div>
    </footer>
  );
}

export default Footer;