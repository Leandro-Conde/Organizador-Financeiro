import { useState } from "react";

function TransactionForm({
  transactions,
  setTransactions,
}) {

    const [tipo, setTipo] =
  useState("entrada");

  const [descricao, setDescricao] =
    useState("");

  const [valor, setValor] =
    useState("");

  function salvarTransacao() {

    const novaTransacao = {
      id: Date.now(),
      descricao,
      valor: Number(valor),
      tipo,
    };

    setTransactions([
      ...transactions,
      novaTransacao,
    ]);

    setDescricao("");
    setValor("");
  }

  return (
    <div className="transaction-form">

      <h2>Nova Transação</h2>

      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) =>
          setDescricao(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) =>
          setValor(e.target.value)
        }
      />

<select
  value={tipo}
  onChange={(e) =>
    setTipo(e.target.value)
  }
>

  <option value="entrada">
    Entrada
  </option>

  <option value="saida">
    Saída
  </option>

  <option value="investimento">
    Investimento
  </option>

  <option value="renda_passiva">
    Renda Passiva
  </option>

</select>

      <button
        onClick={salvarTransacao}
      >
        Salvar
      </button>

    </div>
  );
}

export default TransactionForm;