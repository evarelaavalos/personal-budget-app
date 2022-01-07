import TransactionListRow from './TransactionListRow';

import styles from './TransactionList.module.css';

export default function TransactionList({ title, caption, transactions }) {
    return (
        <section className={styles.transactions}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.caption}>{caption}</p>
            </div>
            {transactions && transactions.map(transaction => (
                <TransactionListRow
                    key={transaction.id}
                    concept={transaction.concept}
                    amount={transaction.amount}
                    date={transaction.date}
                    type={transaction.type}
                />
            ))}
        </section>
    )
}
