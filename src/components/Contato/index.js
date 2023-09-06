import './contato.css';
//import {formAjax} from './form-submission-handler.js';

function Contato() {
    
  return (
    <div className='form-wrapper'>

        <span className='titulo-contato'><br/>ENVIE SUA MENSAGEM<br/></span>
        

        <form className='contato' id="Forms-Contato" method='POST' data-email="sarahsophiapinto@gmail.com"
        action='https://script.google.com/macros/s/AKfycbww52oX9orU4dvLlDcmjtuvmLhVXHNC7cw0Cb6rb7UU59cuE20BE9YtT9kf7k42UUo3/exec'
  >
            <input className= "input-contato input-contato-nome" type="text" name="name" placeholder="Insira seu nome" required>
            </input>
            <input className= "input-contato input-contato-email" type="email" name="email" placeholder="Insira seu e-mail" required>
            </input>
            <input className= "input-contato input-contato-mensagem" type="text" name="mensage" placeholder="Insira sua mensagem" required>
            </input>
                    
            <button className='input-contato button-contato' type="submit" >
              Enviar
            </button>

            <script data-cfasync="false" type="text/javascript" src="./form-submission-handler.js"></script>

            <div  class="thankyou_message">
           <h2><em>Thanks</em> for contacting us! We will get back to you soon!
            </h2>
        </div>

        </form>
    </div>

  );
}

export default Contato;