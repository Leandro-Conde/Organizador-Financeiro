import TransactionItem from "./TransactionItem";


function TransactionList({
  transactions,
  deleteTransaction,
}) {

  return (
    <section className="transactions">

      <h2>Últimas Transações</h2>

      {transactions.map((transaction) => (

    <TransactionItem
      key={transaction.id}
      transaction={transaction}
      deleteTransaction={deleteTransaction}
    />

))}
  
    </section>
  );
}

export default TransactionList;