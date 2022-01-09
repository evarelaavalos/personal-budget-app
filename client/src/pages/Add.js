import TransactionForm from '../components/TransactionForm';

export default function Add({ types }) {
    return (
        <TransactionForm
            formTitle='Agregar Transacción'
            types={types}
        />
    )
}
