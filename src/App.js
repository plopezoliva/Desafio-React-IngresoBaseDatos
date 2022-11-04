
import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";



function App() {
 const[buscarItem,setBuscarItem]= useState('');
  
    return (
    <div className="App">
      <Navbar setBuscarItem={setBuscarItem}/>
      <Form buscarItem={buscarItem}/>
     </div>

    );
  }
  export default App;
