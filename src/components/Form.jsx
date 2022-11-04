import { useEffect, useState } from "react";
import Boton from "./Boton";
import Input from "./Input";
import { BaseColaboradores as colaboradores } from "../BaseColaboradores";
// importo la  base de dato

const Form = ({buscarItem}) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const [BaseColaboradores, setdatosColaboradores] = useState([]);

  //Estado para los errores
  const [error, setError] = useState(null);

  // utilizo un useEffect  PARA QUE SE ME MUESTRE LA BASE DE DATO  EN LA LISTA  OCUPANDO EL MISMO HOOKS ES ESTA EN EL NUMERO 12 const [BaseColaboradores, setdatosColaboradores] = useState([]);
  useEffect(() => {
    setdatosColaboradores(colaboradores);
  }, []);
  //guardar informacion del inputCorreo con setNombre(e.target.value)
  const inputNombre = (e) => {
    setNombre(e.target.value);
  };
  //guardar informacion del inputCorreo con setCorreo(e.target.value)
  const inputCorreo = (e) => {
    setCorreo(e.target.value);
  };

  const agregarInformacion = (e) => {
    e.preventDefault();
    //Validación;
    if (nombre === "" || correo === "") {
      setError("escriba algo ");
    } else {
      setdatosColaboradores([
        ...BaseColaboradores,
        {
          id: BaseColaboradores.length + 1,
          nombre: nombre,
          correo: correo,
        },
      ]);
      // limpiar input
      setNombre("");
      setCorreo("");
      setError(null);
    }
  };
  const results = !buscarItem ? BaseColaboradores : BaseColaboradores.filter((item)=> item.nombre.toLowerCase().includes(buscarItem.toLowerCase())|| item.correo.toLowerCase().includes(buscarItem.toLowerCase()))
  
  return (
    <div>
      <h1 className="titulo">Base de Datos Colaboradores</h1>
      <hr />
      <div className="row">
        <div className="col-lista">
          <h4 className="tituloLista">Listado de Colaboradores</h4>
          <ul className="list-group">
            {results.map((item) => (
              <li className="list-group-item" key={item.id}>
                <span className="lead">
                {item.nombre} / {item.correo}
                </span>
              </li>
            ))}
          </ul>
        </div>
      {/*formulario*/}
      <form className="col-form" onSubmit={agregarInformacion}>
        {error ? <p>{error}</p> : null}
        <h4 className="tituloForm">Ingreso Colaborador</h4>
        <label>
          <strong>Nombre y Apellido</strong>
        </label>
        <Input
          onChange={inputNombre}
          placeholder={"Ingresa nombre del colaborador"}
          value={nombre}
        />

        <label>
          <strong>Correo electrónico</strong>
        </label>
        <Input
          onChange={inputCorreo}
          placeholder={"Ingresa correo del colaborador"}
          value={correo}
        />
        <Boton type={"submit"} />
      </form>
      {/* lista */}
      
      
      </div>
    </div>
  );
};

export default Form;
