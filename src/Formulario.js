export default function Formulario({
  btnCadastrar,
  setNome,
  setIdade,
  setCidade,
  cadastrar,
  alterar,
  remover,
  cancelar,
  nome,
  idade,
  cidade,
}) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="nome"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="idade"
          className="form-control"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          type="text"
          placeholder="cidade"
          className="form-control"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        {btnCadastrar ? (
          <input
            type="button"
            value={"Cadrastar"}
            className="btn btn-primary"
            onClick={cadastrar}
          />
        ) : (
          <>
            <input
              type="button"
              value={"Alterar"}
              className="btn btn-secondary"
              onClick={alterar}
            />

            <input
              type="button"
              value={"Excluir"}
              className="btn btn-danger "
              onClick={remover}
            />

            <input
              type="button"
              value={"Cancelar"}
              className="btn btn-success"
              onClick={cancelar}
            />
          </>
        )}
      </form>
    </>
  );
}
