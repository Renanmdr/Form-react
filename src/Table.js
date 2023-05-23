import { useState } from "react";

export default function Table({ arr, selecionar }) {
  const [termo, setTermo] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Buscar Nome"
        className="form-control pesquisa"
        onChange={(e) => setTermo(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
            <th>Selecionar</th>
          </tr>
        </thead>
        <tbody>
          {arr
            .filter((obj) =>
              obj.nome.toLocaleUpperCase().includes(termo.toLocaleUpperCase())
            )
            .map((obj, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{obj.nome}</td>
                <td>{obj.idade}</td>
                <td>{obj.cidade}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => selecionar(i)}
                  >
                    Cadastrar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
