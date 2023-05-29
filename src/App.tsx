import { TiposBasicos } from "./typescript/TiposBasicos";
import { Funciones } from './typescript/Funciones';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Contador } from './components/Contador';
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
import { Formularios } from "./components/Formularios";

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS - React</h1>
      <hr />
      <br />
      <TiposBasicos />
      <br />
      <hr />
      <ObjetosLiterales />
      <br />
      <hr />
      <Funciones />
      <br />
      <hr />
      <Contador />
      <br />
      <hr />
      <ContadorConHook />
      <br />
      <hr />
      <Login />
      <br />
      <hr />
      <Usuarios />
      <br />
      <hr />
      <Formularios />
      <br />
      <hr />

    </div>
  )
}
export default App;
