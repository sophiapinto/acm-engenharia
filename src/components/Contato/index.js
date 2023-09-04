import './contato.css';

function Contato() {
    
  return (
    <div className='form-wrapper'>

        <span className='titulo-contato'><br/>ENVIE SUA MENSAGEM<br/></span>
        <form>
            <input className= "input-contato input-contato-nome" type="text" name="Nome" placeholder="Insira seu nome">
            </input>
            <input className= "input-contato input-contato-email" type="email" name="Email" placeholder="Insira seu e-mail">
            </input>
            <input className= "input-contato input-contato-mensagem" type="text" name="Mensagem" placeholder="Insira sua mensagem">
            </input>
                    
            <button className='button-contato' type="submit">Enviar</button>
                

        </form>
    </div>

  );
}

export default Contato;