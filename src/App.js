import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';

import "./App.css";

function App() {
  return (
    <div>
      <Header  />

      <div className='imagem-bg'  />


      <div className='intro-wrapper'>
          <span className='titulo-intro'><br/>ACM Engenharia<br/></span>
          <span className='subtitulo-intro'> Projetando e Construindo Sonhos</span>
      </div>

      <div className='quem-somos-wrapper'>
        <span className='titulo-quem-somos'><br/>QUEM SOMOS<br/></span>
        <span className='texto-quem-somos'><br/>Empresa do ramo da construção civil que visa projetar, <br/>gerenciar e excecutar com eficiência e eficácia<br/> o planejamento e controle de obras.</span>
        <button>
          <span className='button´quem-somos'>CONHEÇA NOSSO RESPONSÁVEL TÉCNICO</span>
        </button>
      </div>

      <div className='servicos-wrapper'>
      <span className='titulo-servicos'><br/>SERVIÇOS<br/></span>

        <div class="servicos-nav">
              <span className='servicos-item'>Administração de obra</span>
              <span className='servicos-item'>Projeto Estrutural</span>
              <span className='servicos-item'>Responsabilidade Técnica de Execução</span>
              <span className='servicos-item'>Visita Técnica</span>
              <span className='servicos-item'>Consultoria Técnica</span>
          </div>
      </div>
      <Footer  />

    </div>
    
    );
}

export default App;
