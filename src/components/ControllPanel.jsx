import React from 'react';
import controllpanel from './controllpanel.scss';

const ControllPanel = () => {
  return (
    <div> <h3>Painel de Controle</h3>
    <div className='button-controll'>
    
    <button className='button' type="button1" 
   >Travar elevador</button>    
    
    <button className='button2' type="button2">Ligar Luzes de emergência</button>
    
    <button className='button' type="button3">Notificar incidente</button> 
   
    <button className='button2' type="button4">Ativar Sprinkler</button>
   
    <button className='button' type="button5">Reportar baixa estrutura</button> 
    
    <button className='button2' type="button6">Gerenciar Andar</button>
    
  
    </div>
  
    </div>
  )

}

export default ControllPanel