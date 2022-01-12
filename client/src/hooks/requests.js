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
    try {
        return await fetch(`${API_URL}/transactions`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
        })
    } catch (err) {
        return {
            ok: false,
        };
    }
}

async function httpEditTransaction(transaction) {
    // TODO: Once API is ready.
}

async function httpDeleteTransaction(id) {
    try {
        return await fetch(`${API_URL}/transactions/${id}`, {
            method: 'delete',
        })
    } catch (err) {
        return {
            ok: false,
        }
    }
}

export {
    httpGetTypes,
    httpGetTransactions,
    httpGetBalance,
    httpSubmitTransaction,
    httpEditTransaction,
    httpDeleteTransaction,
};