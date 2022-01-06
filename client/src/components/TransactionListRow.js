import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faArrowCircleDown,
    faArrowCircleUp,
    faPen,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import styles from './TransactionListRow.module.css';

export default function TransactionListRow({ concept, amount, date, type }) {
    const typeElement = type === 'income' ? (
        <div className={styles.transactionsRowType}>
            <FontAwesomeIcon icon={faArrowCircleDown} size="3x" />
            Ingreso
        </div>
    ) : (
        /* type === 'expense' */
        <div className={styles.transactionsRowType}>
            <FontAwesomeIcon icon={faArrowCircleUp} size="3x" />
            Egreso
        </div>
    );

    return (
        <div className={styles.transactionsRow}>
            {typeElement}
            <div className={styles.transactionsRowDescription}>
                {concept}
            </div>
            <div className={styles.transactionsRowMetadata}>
                <div className={styles.transactionsRowMetadataAmount}>
                    {amount}
                </div>
                <div className={styles.transactionsRowMetadataDate}>
                    {date}
                </div>
            </div>
            <div className={styles.transactionsRowOptions}>
                <FontAwesomeIcon icon={faPen} />
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        </div>
    )
}
