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
                    <Home
                        transactions={transactions}
                        deleteTransaction={deleteTransaction}
                    />
                } />
                <Route path="/add" element={
                    <Add
                        types={types}
                        isPendingTransaction={isPendingTransaction}
                        transactionState={transactionState}
                        handleSubmit={submitTransaction}
                    />
                } />
                <Route path="/edit/:idTransaction" element={
                    <Edit
                        transactions={transactions}
                        types={types}
                        isPendingTransaction={isPendingTransaction}
                        transactionState={transactionState}
                        handleSubmit={editTransaction}
                    />
                } />
                <Route path="/expenses" element={
                    <Expenses
                        transactions={transactions}
                        deleteTransaction={deleteTransaction}
                    />
                } />
                <Route path="/incomes" element={
                    <Incomes
                        transactions={transactions}
                        deleteTransaction={deleteTransaction}
                    />
                } />
                <Route path="*" element={
                    <p>There's nothing here!</p>
                } />
            </Routes>
        </Layout>
    )
}
