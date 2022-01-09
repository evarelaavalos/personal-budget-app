import TransactionList from '../components/TransactionList';

import styles from './Home.module.css';

export default function Home({ transactions, deleteTransaction }) {
    return (
        <div className={styles.bankSummary}>
            <section className={styles.balance}>
                <div className={styles.balanceTitle}>
                    Balance Actual
                </div>
                <div className={styles.balanceAmount}>
                    <span className={styles.balanceAmountFraction}>1.010.570</span>
                    <sup className={styles.balanceAmountCents}>15</sup>
                </div>
            </section>
            <TransactionList
                title='Últimos Movimientos'
                caption='Gestiona las últimas operaciones realizadas.'
                transactions={transactions}
                deleteTransaction={deleteTransaction}
            />
        </div>
    )
}
