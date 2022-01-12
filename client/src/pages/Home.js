import TransactionList from '../components/TransactionList';

import styles from './Home.module.css';

export default function Home({ balance, transactions, deleteTransaction }) {
    return (
        <div className={styles.bankSummary}>
            <section className={styles.balance}>
                <div className={styles.balanceTitle}>
                    Balance Actual
                </div>
                <div className={styles.balanceAmount}>
                    <span className={styles.balanceAmountFraction}>
                        {Math.trunc(balance)}
                    </span>
                    <sup className={styles.balanceAmountCents}>
                        {balance.toString().split('.')[1]}
                    </sup>
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
