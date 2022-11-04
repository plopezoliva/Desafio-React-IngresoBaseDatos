import React from 'react'
import Input from './Input'

const Navbar = ({setBuscarItem}) => {

const inputBuscar= (e) =>{
    setBuscarItem(e.target.value);
};

  return (
    <div className='buscador'>
        <Input placeholder={'Buscar colaboradores'} onChange ={inputBuscar}/>
    </div>
  )
}

export default Navbar