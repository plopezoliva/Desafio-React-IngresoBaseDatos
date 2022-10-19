import React from 'react'


const Input = ({infoUsuario,placeholder, onChange, value}) => {
  return (
    <div>
       <input placeholder={placeholder}
       onChange= {onChange}
       value= {value}
       />
         {infoUsuario}
        
    </div>
  )
}

export default Input