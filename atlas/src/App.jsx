import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import Modal from "./components/Modal";
import FinanceChart from "./components/charts/FinanceChart";


import { mockTransactions } from "./data/mockData";



function App() {

  const [transactions, setTransactions] = useState(mockTransactions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  function deleteTransaction(id) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  }

  function editTransaction(transaction) {
    setEditingTransaction(transaction);
    setIsModalOpen(true);
  }

  return (
    <>
     <Header />

      <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
    <TransactionForm
      transactions={transactions}
      setTransactions={setTransactions}
      onSave={() => setIsModalOpen(false)}
    />
    </Modal>

    <div className="actions">

    <button
      className="new-transaction-btn"
      onClick={() => setIsModalOpen(true)}
    >
      ➕ Nova Transação
    </button>

    </div>

    <Dashboard
      transactions={transactions}
    />

    <FinanceChart
      transactions={transactions}
    />

    <TransactionList
      transactions={transactions}
      deleteTransaction={deleteTransaction}
      editTransaction={editTransaction}
    />


    <TransactionList
  transactions={transactions}
  deleteTransaction={deleteTransaction}
  editTransaction={editTransaction}
/>
    </>

    
  );
}

export default App;