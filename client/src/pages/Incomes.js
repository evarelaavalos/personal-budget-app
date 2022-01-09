import TransactionList from '../components/TransactionList';

export default function Incomes({ transactions, deleteTransaction }) {
    const incomes = transactions.filter(transaction => transaction.type === 1);

    return (
        <TransactionList
            title='Ingresos'
            caption='Estos son los últimos ingresos en tu cuenta.'
            transactions={incomes}
            deleteTransaction={deleteTransaction}
        />
    )
}
