import './contato.css';

function Contato() {
    
  return (
    <div className='form-wrapper'>

        <span className='titulo-contato'><br/>ENVIE SUA MENSAGEM<br/></span>
        
        
        <form className='contato' id="Forms-Contato">
            <input className= "input-contato input-contato-nome" type="text" name="Nome" placeholder="Insira seu nome" required>
            </input>
            <input className= "input-contato input-contato-email" type="email" name="Email" placeholder="Insira seu e-mail" required>
            </input>
            <input className= "input-contato input-contato-mensagem" type="text" name="Mensagem" placeholder="Insira sua mensagem" required>
            </input>
                    
            <input className='input-contato button-contato' type="submit" value="Enviar" name="Enviar" placeholder="Enviar">
            </input>
        </form>

        <script src="script.js"></script>

    </div>

  );
}

export default Contato;