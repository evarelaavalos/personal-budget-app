import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout';

import Add from './pages/Add';
import Expenses from './pages/Expenses';
import Home from './pages/Home';
import Incomes from './pages/Incomes';

export default function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      concept: 'Aca compraste algo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit provident aliquid doloribus quo mollitia praesentium architecto aut repellat rem harum.',
      amount: 215.23,
      date: '20 de Diciembre',
      type: 'income',
    },
    {
      id: 2,
      concept: 'Aca vendiste algo.',
      amount: 215.23,
      date: '20 de Diciembre',
      type: 'income',
    },
    {
      id: 3,
      concept: 'Aca te depositaron algo.',
      amount: 215.23,
      date: '20 de Diciembre',
      type: 'income',
    },
    {
      id: 4,
      concept: 'Aca compraste algo.',
      amount: 215.23,
      date: '20 de Diciembre',
      type: 'expense',
    },
  ]);

  const [types, useTypes] = useState([
    {
        id: 1,
        name: 'expense',
    },
    {
        id: 2,
        name: 'income',
    },
  ]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home transactions={transactions}/>} />
        <Route path="/add" element={<Add types={types} />} />
        <Route path="/expenses" element={<Expenses transactions={transactions}/>} />
        <Route path="/incomes" element={<Incomes transactions={transactions}/>} />
      </Routes>
    </Layout>
  )
}
