import { useState } from "react";
import { Link } from "react-router-dom";


export default function Todo() {

  const [lista, setLista] = useState([]);
  const [id, setid] = useState(1);
  const [Atividade, setAtividade] = useState("");


  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { Atividade: Atividade, id: id }]);
    setid(id + 1);
  }


  return (
    <div>
      <h1>todo</h1>

      <Link to="/home">App</Link>
      <form onSubmit={salvar}>
        <input onChange={(e) => setAtividade(e.target.value)} type="text" />
        <button>Encrementa</button>
      </form>
      
      {lista.map((atividade) => (
        <div key={atividade.id}>
          <p>{atividade.id}</p>
          <p>{atividade.Atividade}</p>
        </div>
      ))}
    </div>
  );
}