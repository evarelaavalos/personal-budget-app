import Button from '../components/Button';

import styles from './Add.module.css';

export default function Add({ types }) {
    const typesElements = (types.map((type) => (
        <option value={type.name} key={type.id}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
        </option>
    )));

    const today = new Date().toISOString().split("T")[0];

    return (
        <form className={styles.form}>
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
            <Button type='submit'>
                Agregar
            </Button>
        </form>
    )
}
