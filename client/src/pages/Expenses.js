import TransactionList from '../components/TransactionList';

export default function Expenses({ transactions }) {
    const expenses = transactions.filter(transaction => transaction.type === 'expense');

    return (
        <TransactionList
            title='Egresos'
            caption='Aquí se muestran los últimos gastos registrados.'
            transactions={expenses}
        />
    )
}
