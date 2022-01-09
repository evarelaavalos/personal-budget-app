import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import TransactionForm from '../components/TransactionForm';

export default function Edit({
    transactions,
    types,
    isPendingTransaction,
    transactionState,
    handleSubmit
}) {
    const params = useParams();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState(null);
    
    // Make the checks only after the first render
    useEffect(() => {
        // Check if exists a transaction with the given id
        const id = Number(params.idTransaction);
        const transactionFinded = transactions
            .find(transaction => id === transaction.id);
    
        if (transactionFinded) {
            setTransaction({
                concept: transactionFinded.concept,
                date: transactionFinded.date.format('YYYY-MM-DD'),
                amount: transactionFinded.amount,
                type: transactionFinded.type,
            })
        } else {
            navigate('/');
        }
    }, []);

    return transaction && (
        <TransactionForm
            formTitle='Editar Transacción'
            types={types}
            {...transaction}
            disableSelector
            isPendingTransaction={isPendingTransaction}
            transactionState={transactionState}
            handleSubmit={handleSubmit}
        />
    );
}
