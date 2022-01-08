import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import moment from 'moment'

import Layout from './components/Layout';

import Add from './pages/Add';
import Edit from './pages/Edit';
import Expenses from './pages/Expenses';
import Home from './pages/Home';
import Incomes from './pages/Incomes';

export default function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      concept: 'Aca compraste algo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit provident aliquid doloribus quo mollitia praesentium architecto aut repellat rem harum.',
      amount: 739.85,
      date: moment('2021-12-20'),
      type: 'income',
    },
    {
      id: 2,
      concept: 'Aca vendiste algo.',
      amount: 215.23,
      date: moment('2021-06-15'),
      type: 'income',
    },
    {
      id: 3,
      concept: 'Aca te depositaron algo.',
      amount: 14725.10,
      date: moment('2021-08-10'),
      type: 'income',
    },
    {
      id: 4,
      concept: 'Aca compraste algo.',
      amount: 8752.15,
      date: moment('1998-02-05'),
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
        <Route path="/" element={
          <Home transactions={transactions} />
        } />
        <Route path="/add" element={
          <Add types={types} />
        } />
        <Route path="/edit/:transactionId" element={
          <Edit types={types} transactions={transactions} />
        } />
        <Route path="/expenses" element={
          <Expenses transactions={transactions} />
        } />
        <Route path="/incomes" element={
          <Incomes transactions={transactions} />
        } />
        <Route path="*" element={
          <p>There's nothing here!</p>
        } />
      </Routes>
    </Layout>
  )
}
