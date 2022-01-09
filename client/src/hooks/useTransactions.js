import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import {
    httpGetTransactions,
    httpSubmitTransaction,
    httpEditTransaction,
    httpDeleteTransaction,
} from './requests';

import useTransactionState from './useTransactionState';

function useTransactions() {
    const navigate = useNavigate();
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

    // Format the data and send a POST request
    const submitTransaction = async (e) => {
        e.preventDefault();
        setPendingTransaction(true);
        const data = new FormData(e.target);
        const concept = data.get('concept');
        const date = moment(data.get('date'));
        const amount = Number(data.get('amount'));
        const type = Number(data.get('type'));

        const response = await httpSubmitTransaction({
            concept,
            date,
            amount,
            type,
        });

        // TODO: Set success based on response.
        const success = false;
        if (success) {
            getTransactions();
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
        const data = new FormData(e.target);
        const concept = data.get('concept');
        const date = moment(data.get('date'));
        const amount = Number(data.get('amount'));

        const response = await httpEditTransaction({
            concept,
            date,
            amount,
        });

        // TODO: Set success based on response.
        const success = false;
        if (success) {
            getTransactions();
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

        // TODO: Set success based on response.
        const success = false;
        if (success) {
            getTransactions();
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
        transactions,
        isPendingTransaction,
        transactionState,
        submitTransaction,
        editTransaction,
        deleteTransaction,
    };
}

export default useTransactions;
