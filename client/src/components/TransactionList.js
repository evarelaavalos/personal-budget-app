import TransactionListRow from './TransactionListRow';

import styles from './TransactionList.module.css';

export default function TransactionList() {
    return (
        <section className={styles.transactions}>
            <div className={styles.transactionsHeader}>
                <h2 className={styles.transactionsHeaderTitle}>Últimos Movimientos</h2>
                <p className={styles.transactionsHeaderCaption}>Gestiona las últimas operaciones realizadas.</p>
            </div>
            <TransactionListRow
                concept='Aca compraste algo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit provident aliquid doloribus quo mollitia praesentium architecto aut repellat rem harum.'
                amount='$215.23'
                date='20 de Diciembre'
                type='income'
            />
            <TransactionListRow
                concept='Aca vendiste algo.'
                amount='$215.23'
                date='20 de Diciembre'
                type='income'
            />
            <TransactionListRow
                concept='Aca te depositaron algo.'
                amount='$215.23'
                date='20 de Diciembre'
                type='income'
            />
            <TransactionListRow
                concept='Aca compraste algo.'
                amount='$215.23'
                date='20 de Diciembre'
                type='expense'
            />
        </section>
    )
}
