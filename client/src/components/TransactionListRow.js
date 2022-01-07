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
        <div className={styles.type}>
            <FontAwesomeIcon icon={faArrowCircleDown} size="3x" />
            Ingreso
        </div>
    ) : (
        /* type === 'expense' */
        <div className={styles.type}>
            <FontAwesomeIcon icon={faArrowCircleUp} size="3x" />
            Egreso
        </div>
    );

    return (
        <div className={styles.transaction}>
            {typeElement}
            <div className={styles.concept}>
                {concept}
            </div>
            <div className={styles.metadata}>
                <div className={styles.metadataAmount}>
                    {amount}
                </div>
                <div className={styles.metadataDate}>
                    {date}
                </div>
            </div>
            <div className={styles.options}>
                <FontAwesomeIcon icon={faPen} />
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        </div>
    )
}
