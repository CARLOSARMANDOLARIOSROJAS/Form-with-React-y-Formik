import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './Formularios';
import './index.css'
import './Formulario.css'
// let name = 'Carlos';
// const JSX = (
//   <div className='container'>
//     <h1 className='title'>Hola {name}</h1>
//     <h2 className='title'>Que tengas un buen día mañana.</h2>
//   </div> 
//   // A eso se le conoce como fragmento de código. 
// )


ReactDOM.render(
  <React.StrictMode>
      <div className="contenedor">
        <Formulario/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
)



