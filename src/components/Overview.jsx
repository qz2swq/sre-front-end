import React from 'react'
import  './overview.scss'
import {FaCheckCircle} from 'react-icons/fa'
import {FaExclamationCircle} from 'react-icons/fa'
import {FaExclamationTriangle} from 'react-icons/fa'

function overview() {
  
  return (
    <div className='box'>
      <table>
   
        <tr>
          <td>Andar 1 </td>
          <td className='goodicon'>
          <FaCheckCircle />
          </td>
          <tr>
            <td> Adequado
           </td></tr>
          </tr>

          <tr>
          <td>Andar 2 </td>
          <td className='goodicon'>
          <FaCheckCircle />
          </td>
          <tr>
            <td> Adequado
           </td></tr>
          </tr>

          <tr>
          <td>Andar 3 </td>
          <td className='warning'>
          <FaExclamationCircle />
          </td>
          <tr>
            <td> Interditado
           </td></tr>
          </tr>

          <tr>
          <td>Andar 4 </td>
          <td className='alert'>
          <FaExclamationTriangle />
          </td>
          <tr>
            <td> Interditado
           </td></tr>
          </tr>

          <tr>
          <td>Andar 5 </td>
          <td className='goodicon'>
          <FaCheckCircle />
          </td>
          <tr>
            <td> Adequado
           </td></tr>
          </tr>
      </table>
    </div>
  )
}

export default overview