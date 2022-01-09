import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment'

import Button from '../components/Button';
import GoBackButton from '../components/GoBackButton';

import styles from './TransactionForm.module.css';

export default function TransactionForm({
    formTitle,
    types,
    concept = '',
    date = moment().format('YYYY-MM-DD'),
    amount = 0,
    type = 1,
    disableSelector = false,
}) {
    const initialValues = { concept, date, amount, type };

    // Make use of React Hooks
    const [formValues, setFormValues] = useState(initialValues);
    const navigate = useNavigate();
    
    // Log the changes made by handleChange()
    useEffect(() => {
        console.log(1, formValues);
    }, [formValues]);
    
    // Update the state when the inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Format the data and send a POST request
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const concept = data.get('concept');
        const date = moment(data.get('date'));
        const amount = Number(data.get('amount'));
        const type = Number(data.get('type'));

        const response = {
            concept,
            date,
            amount,
            type,
        };

        console.log(response);

        // TODO: Set success based on response.
        const success = true;
        if (success) {
            // Do something
            navigate('/');
            
        } else {
            // Do something else
        }
    }

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
                {types.map((type) => (
                    <option value={type.id} key={type.id}>
                        {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                    </option>
                ))}
            </select>
            <div className={styles.buttons}>
                <Button type='submit'>
                    Agregar
                </Button>
                <GoBackButton>
                    Volver
                </GoBackButton>
            </div>
        </form>
    )
}
