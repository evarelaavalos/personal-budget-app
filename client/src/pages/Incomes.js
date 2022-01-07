import TransactionList from '../components/TransactionList';

export default function Incomes({ transactions }) {
    const incomes = transactions.filter(transaction => transaction.type === 'income');

    return (
        <TransactionList
            title='Ingresos'
            caption='Estos son los últimos ingresos en tu cuenta.'
            transactions={incomes}
        />
    )
}
