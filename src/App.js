
import { useState } from 'react';
import Boton from './components/Boton';
import Input from './components/Input';
import { nanoid } from 'nanoid';


function App() {

  const [nombre, setNombre]= useState('');
  const [correo, setCorreo]= useState('');
  //base datos agregada al listado
  const [nombres, setNombres]= useState([]);
  const [correos, setCorreos]= useState([]);

  //guardar informacion del inputCorreo con setNombre(e.target.value)
  const inputNombre = e=>{
    setNombre(e.target.value);
  }
  //guardar informacion del inputCorreo con setCorreo(e.target.value)
  const inputCorreo = e=>{
    setCorreo(e.target.value);
  }
  //enviar la informacion escrita en onSubmit

  const agregarInformacion= e=>{
    e.preventDefault();

    //los dos set de abajo estan ligados con el value={} mas abajo escrito en los input .sirve para cuando la informacion es agregada deje el input limpio
    setNombre('')
    setCorreo('')
    console.log(nombre)
    console.log(correo)
  }

  return (
    <div className="App">
     <h1 className='titulo'>Base de Datos Colaboradores</h1>
     <hr/>
     <div className='row'>
      <div className='col-lista'>
      <h4 className='tituloLista'>Listado de Colaboradores</h4>
      <ul className='list-group'>
        <li className='list-group-item'>
          <span className='lead'> Datos Colaborador</span>
        </li>
      </ul>
      </div>
      

     
      <form className='col-form' onSubmit={agregarInformacion}>
        <h4 className='tituloForm'>Ingreso Colaborador</h4>
        <label><strong>Nombre y Apellido</strong></label>
        <Input onChange={inputNombre} placeholder={'Ingresa nombre del colaborador'} value={nombre}/>

        <label><strong>Correo electrónico</strong></label>
        <Input onChange={inputCorreo} placeholder={'Ingresa correo del colaborador'}value={correo}/>
        <Boton type={'submit'}/>
      </form>
      </div>
    </div>
  );
}

export default App;
