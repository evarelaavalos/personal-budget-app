import { Routes, Route } from "react-router-dom";

import useTransactions from './hooks/useTransactions';
import useTypes from './hooks/useTypes';

import Layout from './components/Layout';

import Add from './pages/Add';
import Edit from './pages/Edit';
import Expenses from './pages/Expenses';
import Home from './pages/Home';
import Incomes from './pages/Incomes';

export default function App() {
    const {
        transactions,
        isPendingTransaction,
        transactionState,
        submitTransaction,
        editTransaction,
        deleteTransaction,
    } = useTransactions();

    const types = useTypes();

    return (
        <Layout>
            <Routes>
                <Route path="/" element={
                    <Home transactions={transactions} />
                } />
                <Route path="/add" element={
                    <Add types={types} />
                } />
                <Route path="/edit/:idTransaction" element={
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
