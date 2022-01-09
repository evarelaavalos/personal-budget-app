import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faArrowCircleDown,
    faArrowCircleUp,
    faPen,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import styles from './TransactionListRow.module.css';

export default function TransactionListRow({
    id,
    concept,
    amount,
    date,
    type,
    deleteTransaction,
}) {
    const prettyDate = date.format('DD/MM/YYYY');

    const typeElement = type === 1 ? (
        /* Income, Ingreso */
        <div className={styles.type}>
            <FontAwesomeIcon icon={faArrowCircleDown} size="3x" />
            Ingreso
        </div>
    ) : (
        /* Expense, Egreso */
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
                    {prettyDate}
                </div>
            </div>
            <div className={styles.options}>
                <Link to={`/edit/${id}`}>
                    <FontAwesomeIcon icon={faPen}/>
                </Link>
                <button
                    className={styles.transparentButton}
                    onClick={() => {deleteTransaction(id)}}
                >
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
            </div>
        </div>
    )
}
