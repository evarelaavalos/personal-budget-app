import { useState } from 'react';
import moment from 'moment';

import Button from '../components/Button';
import GoBackButton from '../components/GoBackButton';

import styles from './TransactionForm.module.css';

export default function TransactionForm({
    formTitle,
    types,
    transaction = {},
    disableSelector = false,
    isPendingTransaction,
    transactionState,
    handleSubmit,
}) {
    const initialValues = {
        concept: transaction?.concept ?? '',
        date: transaction?.date ?? moment().format('YYYY-MM-DD'),
        amount: transaction?.amount ?? 0,
        type: transaction?.type ?? 1,
    };

    // Make use of React Hooks
    const [formValues, setFormValues] = useState(initialValues);
    
    // Update the state when the inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>{formTitle}</h3>
            <label htmlFor="concept" className={styles.inputTitle}>
                Concepto:
            </label>
            <input
                type="text"
                id="concept"
                name="concept"
                placeholder="¿Cual es el motivo de la transacción?"
                value={formValues.concept}
                onChange={handleChange}
                required
            />
            <label htmlFor="date" className={styles.inputTitle}>
                Fecha:
            </label>
            <input
                type="date"
                id="date"
                name="date"
                value={formValues.date}
                onChange={handleChange}
                required
            />
            <label htmlFor="amount" className={styles.inputTitle}>
                Monto:
            </label>
            <input
                type="number"
                id="amount"
                name="amount"
                step="any"
                value={formValues.amount}
                onChange={handleChange}
                required
            />
            <label htmlFor="type" className={styles.inputTitle}>
                Tipo:
            </label>
            <select
                id="type"
                name="type"
                value={formValues.type}
                onChange={handleChange}
                disabled={disableSelector}
            >
                {types && types.map((type) => (
                    <option value={type.id} key={type.id}>
                        {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                    </option>
                ))}
            </select>
            <div className={styles.buttons}>
                <Button
                    type='submit'
                    isPendingTransaction={isPendingTransaction}
                    transactionState={transactionState}
                >
                    Agregar
                </Button>
                <GoBackButton>
                    Volver
                </GoBackButton>
            </div>
        </form>
    )
}
