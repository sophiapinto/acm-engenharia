import React from 'react';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Contato from './components/Contato/index.js';
import Carousel from './components/Carousel/index.js';


import "./App.css";

function App() {
  return (
    <div>
      <Header  />

      <div className='imagem-bg'  />

      <div className='intro-wrapper'>
          <span className='titulo-intro'><br/>ACM Engenharia<br/></span>
          <span className='subtitulo-intro'>Projetando e Construindo Sonhos</span>
      </div>

      <div className='quem-somos-wrapper'>
        <span className='titulo-quem-somos'><br/>QUEM SOMOS<br/></span>
        <span className='texto-quem-somos'><br/>Empresa do ramo da construção civil que visa projetar, <br/>gerenciar e excecutar com eficiência e eficácia<br/> o planejamento e controle de obras.<br/></span>
        
        <a href='https://www.linkedin.com/in/alison-maciel-6a3525242/'>
            
          <button className='button-quem-somos'>
            <span>CONHEÇA NOSSO <br/>RESPONSÁVEL TÉCNICO</span>
          </button>
        
        </a>
      </div>

      <div className='servicos-wrapper'>
      <span className='titulo-servicos'><br/>SERVIÇOS<br/></span>

        <div class="servicos-nav">
              <ul className='servicos-item'>◇ Administração de obra</ul>
              <ul className='servicos-item'>◇ Projeto Estrutural</ul>
              <ul className='servicos-item'>◇ Responsabilidade Técnica de Execução</ul>
              <ul className='servicos-item'>◇ Visita Técnica</ul>
              <ul className='servicos-item'>◇ Consultoria Técnica</ul>
          </div>
      </div>

      <Carousel  />

      <Contato  />
      
      <Footer  />
  
    </div>
    
    );
}

export default App;
