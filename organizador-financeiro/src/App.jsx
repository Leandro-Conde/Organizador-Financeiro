import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";

import { mockTransactions } from "./data/mockData";



function App() {

  const [transactions, setTransactions] = useState(mockTransactions);

  return (
    <>
     <Header />

     <TransactionForm
      transactions={transactions}
      setTransactions={setTransactions}
    />

<Dashboard
  transactions={transactions}
/>

<TransactionList
  transactions={transactions}
/>
    </>
  );
}

export default App;