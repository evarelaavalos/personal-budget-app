import TransactionForm from '../components/TransactionForm';

export default function Add({
    types,
    handleSubmit,
    isPendingTransaction,
    transactionState,
}) {
    return (
        <TransactionForm
            formTitle='Agregar Transacción'
            types={types}
            isPendingTransaction={isPendingTransaction}
            transactionState={transactionState}
            handleSubmit={handleSubmit}
        />
    )
}
