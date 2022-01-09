// TODO: Placeholder. Delete once API is ready.
import { transactions, types } from './fakeData';

const API_ROUTE = 'http://localhost:8000';

async function httpGetTypes() {
    return types;
    // TODO: Once API is ready.
}

async function httpGetTransactions() {
    return transactions;
    // TODO: Once API is ready.
}

async function httpGetTotalBalance() {
    // TODO: Once API is ready.
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
    httpGetTotalBalance,
    httpSubmitTransaction,
    httpEditTransaction,
    httpDeleteTransaction,
};