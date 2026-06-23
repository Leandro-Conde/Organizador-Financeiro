
function TransactionList({ transactions }) {
  return (
    <section className="transactions">

      <h2>Últimas Transações</h2>

      {transactions.map(transaction => (
        <div
          key={transaction.id}
          className="transaction"
        >
          <span>{transaction.descricao}</span>

          <span>

            {transaction.tipo === "entrada" &&
                "🟢"}

            {transaction.tipo === "saida" &&
                "🔴"}

            {transaction.tipo === "investimento" &&
                "🟡"}

            {transaction.tipo === "renda_passiva" &&
                "💎"}

            {" "}
            R$ {transaction.valor}

            </span>
        </div>
      ))}

      <button>
        + Nova Transação
      </button>

    </section>
  );
}

export default TransactionList;