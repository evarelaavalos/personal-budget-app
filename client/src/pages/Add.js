import { useNavigate } from 'react-router-dom';
import moment from 'moment'

import Button from '../components/Button';
import GoBackButton from '../components/GoBackButton';

import styles from './Forms.module.css';

export default function Add({ types }) {
    const typesElements = (types.map((type) => (
        <option value={type.name} key={type.id}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
        </option>
    )));

    const today = moment().format('YYYY-MM-DD');

    const navigate = useNavigate();

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
            <h3 className={styles.formTitle}>Agregar Transacción</h3>
            <label htmlFor="concept" className={styles.inputTitle}>
                Concepto:
            </label>
            <input
                type="text"
                id="concept"
                name="concept"
                placeholder="¿Cual es el motivo de la transacción?"
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
                required
            />
            <label htmlFor="type" className={styles.inputTitle}>
                Tipo:
            </label>
            <select id="type" name="type">
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
