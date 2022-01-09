import TransactionList from '../components/TransactionList';

export default function Expenses({ transactions, deleteTransaction }) {
    const expenses = transactions.filter(transaction => transaction.type === 2);

    return (
        <TransactionList
            title='Egresos'
            caption='Aquí se muestran los últimos gastos registrados.'
            transactions={expenses}
            deleteTransaction={deleteTransaction}
        />
    )
}
