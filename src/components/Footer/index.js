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
              <a href="https://www.linkedin.com/company/acm-engenharia-civil/">
                <img src={linkedin} className="logo" alt="logo-linkedin" />
              </a>
              <a href="https://instagram.com/acm_engenhariacivil?igshid=MmU2YjMzNjRlOQ==">
                <img src={instagram} className="logo" alt="logo-linkedin" />
              </a>
              <a href="https://wa.me/9881279583">
                <img src={whatsapp} className="logo" alt="logo-linkedin" />
              </a>
          </div>

      </div>
    </footer>
  );
}

export default Footer;