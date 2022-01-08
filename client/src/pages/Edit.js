import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment'

import Button from '../components/Button';
import GoBackButton from '../components/GoBackButton';

import styles from './Forms.module.css';

export default function Edit({ transactions, types }) {
    // Make use of React Hooks
    const params = useParams();
    const navigate = useNavigate();

    // Check if exists a transaction with the given id
    const [formValues, setFormValues] = useState({});
    const id = Number(params.transactionId);

    // Make the checks only in the first render
    useEffect(() => {
        const transaction = transactions.find(transaction => id === transaction.id);

        if (transaction) {
            setFormValues({
                concept: transaction.concept,
                date: transaction.date.format('YYYY-MM-DD'),
                amount: transaction.amount,
                type: transaction.type,
            })
        } else {
            navigate('/');
        }
    }, []);

    // Update the state when the inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Log the changes made by handleChange()
    useEffect(() => {
        console.log(formValues);
    }, [formValues]);
    
    // Render every type element
    const typesElements = (types.map((type) => (
        <option value={type.name} key={type.id}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
        </option>
    )));

    const today = moment().format('YYYY-MM-DD');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const concept = data.get('concept');
        const date = moment(data.get('date'));
        const amount = Number(data.get('amount'));
        const type = data.get('type');

        const response = {
            concept,
            date,
            amount,
            type
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
            <h3 className={styles.formTitle}>Editar Transacción</h3>
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
                defaultValue={today}
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
                disabled
            >
                {typesElements}
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
