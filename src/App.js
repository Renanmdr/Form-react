import { Fragment } from "react";
import Formulario from "./Formulario";
import Table from "./Table";
import { useState } from "react";
import "./App.css";

function App() {
  const [indiceVetor, setIndiceVetor] = useState("");
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [arr, setArr] = useState([]);

  function cadastrar() {
    let obj = {
      nome,
      idade,
      cidade,
    };
    setArr([...arr, obj]);

    setNome("");
    setIdade("");
    setCidade("");
  }

  function selecionar(indice) {
    setIndiceVetor(indice);
    setNome(arr[indice].nome);
    setIdade(arr[indice].idade);
    setCidade(arr[indice].cidade);

    setBtnCadastrar(false);
  }

  function alterar() {
    let obj = {
      nome,
      idade,
      cidade,
    };
    const copiaArr = [...arr];
    copiaArr[indiceVetor] = obj;
    setArr(copiaArr);
    setNome("");
    setIdade("");
    setCidade("");
    setBtnCadastrar(true);
  }

  function remover() {
    const copiaArr = [...arr];
    copiaArr.splice(indiceVetor, 1);
    setArr(copiaArr);
    setNome("");
    setIdade("");
    setCidade("");
    setBtnCadastrar(true);
  }

  function cancelar() {
    setNome("");
    setIdade("");
    setCidade("");
    setBtnCadastrar(true);
  }
  return (
    <Fragment>
      <Formulario
        btnCadastrar={btnCadastrar}
        setNome={setNome}
        setIdade={setIdade}
        setCidade={setCidade}
        cadastrar={cadastrar}
        alterar={alterar}
        remover={remover}
        cancelar={cancelar}
        nome={nome}
        idade={idade}
        cidade={cidade}
      />
      <Table arr={arr} selecionar={selecionar} />
    </Fragment>
  );
}

export default App;
