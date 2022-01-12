// TODO: Placeholder. Delete once API is ready.
import { transactions, types } from './fakeData';

const API_URL = 'http://localhost:8000';

async function httpGetTypes() {
    return types;
    // TODO: Once API is ready.
}

async function httpGetTransactions() {
    return transactions;
    // TODO: Once API is ready.
}

async function httpGetBalance() {
    const response = await fetch(`${API_URL}/balance`);
    const obj = await response.json();
    return obj.balance;
}

async function httpSubmitTransaction(transaction) {
    // TODO: Once API is ready.
}

async function httpEditTransaction(transaction) {
    // TODO: Once API is ready.
}

async function httpDeleteTransaction(id) {
    console.log(`The transaction ${id} was deleted.`);
    // TODO: Once API is ready.
}

export {
    httpGetTypes,
    httpGetTransactions,
    httpGetBalance,
    httpSubmitTransaction,
    httpEditTransaction,
    httpDeleteTransaction,
};