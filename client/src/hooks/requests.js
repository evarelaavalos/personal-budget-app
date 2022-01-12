const API_URL = 'http://localhost:8000';

async function httpGetTypes() {
    const response = await fetch(`${API_URL}/types`);
    return await response.json();
}

async function httpGetTransactions() {
    const response = await fetch(`${API_URL}/transactions`);
    const fetchedTransactions = await response.json();
    return fetchedTransactions.sort((a, b) => {
        return b.id - a.id;
    });
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