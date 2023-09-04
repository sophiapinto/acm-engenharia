import './contato.css';

function Contato() {
    
  return (
    <div className='form-wrapper'>

        <span className='titulo-contato'><br/>ENVIE SUA MENSAGEM<br/></span>
        
        <form className='contato'>
            <input className= "input-contato input-contato-nome" type="text" name="Nome" placeholder="Insira seu nome">
            </input>
            <input className= "input-contato input-contato-email" type="email" name="Email" placeholder="Insira seu e-mail">
            </input>
            <input className= "input-contato input-contato-mensagem" type="text" name="Mensagem" placeholder="Insira sua mensagem">
            </input>
                    
            <input className='input-contato button-contato' type="submit" name="Enviar" placeholder="Enviar">
            </input>
                

        </form>
    </div>

  );
}

export default Contato;