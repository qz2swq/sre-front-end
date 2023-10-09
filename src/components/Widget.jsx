import "./widget.scss";
import React, { useState } from 'react';



const Widget = () => {
    
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
  return (
        <div className="widget">
        Selecione o andar que você irá consultar: 
        <select value={selectedOption} onChange={handleOptionChange}>
        <option value="valor1">Andar 1</option>
        <option value="valor2">Andar 2</option>
        <option value="valor3">Andar 3</option>
        <option value="valor4">Andar 4</option>
        <option value="valor5">Andar 5</option>

      </select>     
      {selectedOption === 'valor1' && (
        <div className="data">
          <table>
            <tbody>
              <tr>
                <td>Estrutura</td>
                <td> 8/10</td>
              </tr>
              <tr>
                <td>Quantidade de pessoas</td>
                <td>16/20</td>
              </tr>
              <tr>
                <td>Qualidade do ar</td>
                <td>99%</td>
              </tr>
            </tbody>
            </table>
        </div>
      )}

      {selectedOption === 'valor2' && (
          <div className="data">
          <table>
            <tbody>
              <tr>
                <td>Estrutura</td>
                <td> 8/10</td>
              </tr>
              <tr>
                <td>Quantidade de pessoas</td>
                <td>16/20</td>
              </tr>
              <tr>
                <td>Qualidade do ar</td>
                <td>99%</td>
              </tr>
            </tbody>
            </table>
        </div>
      )}

      {selectedOption === 'valor3' && (
        <div className="data">
          <table>
            <tbody>
              <tr>
                <td>Estrutura</td>
                <td> 3/10</td>
              </tr>
              <tr>
                <td>Quantidade de pessoas</td>
                <td>20/20</td>
              </tr>
              <tr>
                <td>Qualidade do ar</td>
                <td>99%</td>
              </tr>
            </tbody>
            </table>
        </div>
      )}

      
      {selectedOption === 'valor4' && (
        <div className="data">
          <table>
            <tbody>
              <tr>
                <td>Estrutura</td>
                <td> 6/10</td>
              </tr>
              <tr>
                <td>Quantidade de pessoas</td>
                <td>15/20</td>
              </tr>
              <tr>
                <td>Qualidade do ar</td>
                <td>99%</td>
              </tr>
            </tbody>
            </table>
        </div>
      )}

      
      {selectedOption === 'valor5' && (
        <div className="data">
          <table>
            <tbody>
              <tr>
                <td>Estrutura</td>
                <td> 8/10</td>
              </tr>
              <tr>
                <td>Quantidade de pessoas</td>
                <td>12/20</td>
              </tr>
              <tr>
                <td>Qualidade do ar</td>
                <td>99%</td>
              </tr>
            </tbody>
            </table>
        </div>
      )}
    </div>    
        
  )
}

export default Widget