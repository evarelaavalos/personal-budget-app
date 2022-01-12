import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    httpGetTransactions,
    httpGetBalance,
    httpSubmitTransaction,
    httpEditTransaction,
    httpDeleteTransaction,
} from './requests';

import useTransactionState from './useTransactionState';

function useTransactions() {
    const navigate = useNavigate();
    const [balance, setBalance] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [isPendingTransaction, setPendingTransaction] = useState(false);
    const {
        transactionState,
        resolveTransaction: resolve,
        rejectTransaction: reject,
    } = useTransactionState();

    const getTransactions = async () => {
        const fetchedTransactions = await httpGetTransactions();
        setTransactions(fetchedTransactions);
    };

    const getBalance = async () => {
        const balance = await httpGetBalance();
        setBalance(balance);
    }

    // Initialize the transactions
    useEffect(() => {
        getTransactions();
        getBalance();
    }, []);

    // Format the data and send a POST request
    const submitTransaction = async (e) => {
        e.preventDefault();
        setPendingTransaction(true);
        const data = new FormData(e.target);
        const concept = data.get('concept');
        const date = data.get('date');
        const amount = Math.abs(data.get('amount'));
        const type = Number(data.get('type'));

        const response = await httpSubmitTransaction({
            concept,
            date,
            amount,
            type,
        });

        const success = response.ok;
        if (success) {
            getTransactions();
            getBalance();
            setTimeout(() => {
                setPendingTransaction(false);
                resolve();
                navigate('/');
            }, 1000);
        } else {
            setTimeout(() => {
                setPendingTransaction(false);
                reject();
            }, 1000);
        }
    }

    // Format the data and send a PUT request
    const editTransaction = async (e) => {
        e.preventDefault();
        setPendingTransaction(true);

        // TODO: find another way to get the id
        const id = Number(...e.target.baseURI.split('/').slice(-1));

        const data = new FormData(e.target);
        const concept = data.get('concept');
        const date = data.get('date');
        const amount = Math.abs(data.get('amount'));

        const response = await httpEditTransaction(id, {
            concept,
            date,
            amount,
        });

        const success = response.ok;
        if (success) {
            getTransactions();
            getBalance();
            setTimeout(() => {
                setPendingTransaction(false);
                resolve();
                navigate('/');
            }, 1000);
        } else {
            setTimeout(() => {
                setPendingTransaction(false);
                reject();
            }, 1000);
        }
    };

    const deleteTransaction = async (id) => {
        const response = await httpDeleteTransaction(id);

        const success = response.ok;
        if (success) {
            getTransactions();
            getBalance();
            setTimeout(() => {
                setPendingTransaction(false);
                resolve();
                navigate('/');
            }, 1000);
        } else {
            setTimeout(() => {
                setPendingTransaction(false);
                reject();
            }, 1000);
        }
    };

    return {
        balance,
        transactions,
        isPendingTransaction,
        transactionState,
        submitTransaction,
        editTransaction,
        deleteTransaction,
    };
}

export default useTransactions;
