import { formatCurrency } from "../utils/formatCurrency";

function TransactionItem({
    transaction,
    deleteTransaction,
  }) {
    return (
      <div className="transaction">
  
        <div>
  
          <h3>{transaction.descricao}</h3>
  
          <small>
            Categoria: {transaction.categoria}
          </small>
  
          <br />
  
          <small>
            {transaction.data}
          </small>
  
          <br />
  
          <small>
            {transaction.observacao}
          </small>
  
        </div>
  
        <div>
  
          <strong>
  
          formatCurrency(transaction.valor)
  
          </strong>
  
          <br />
  
          <button
            onClick={() =>
              deleteTransaction(transaction.id)
            }
          >
            🗑 Excluir
          </button>
  
        </div>
  
      </div>
    );
  }
  
  export default TransactionItem;