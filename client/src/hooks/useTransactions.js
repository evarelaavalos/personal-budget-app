import { useState, useEffect } from 'react';

import {
    httpGetTransactions,
    httpSubmitTransaction,
    httpEditTransaction,
    httpDeleteTransaction,
} from './requests';

import useTransactionState from './useTransactionState';

function useTransactions() {
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
    
    // Initialize the transactions
    useEffect(() => {
        getTransactions()
    }, []);

    const submitTransaction = async (e) => {
        // TODO: Once the page is ready.
        // Take the fields from the form and submit the data.
        setTimeout(() => {
            setPendingTransaction(false);
            resolve();
        }, 1000);
    }
    
    const editTransaction = (e) => {
        // TODO: Once the page is ready.
        // Take the fields from the form and submit the data.
    };
    
    const deleteTransaction = (id) => {
        // TODO: Once the page is ready.
    };

    return {
        transactions,
        isPendingTransaction,
        transactionState,
        submitTransaction,
        editTransaction,
        deleteTransaction,
    };
}

export default useTransactions;
