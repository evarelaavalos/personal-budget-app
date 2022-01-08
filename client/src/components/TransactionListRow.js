import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faArrowCircleDown,
    faArrowCircleUp,
    faPen,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import styles from './TransactionListRow.module.css';

export default function TransactionListRow({ id, concept, amount, date, type }) {
    const prettyDate = date.toLocaleDateString('es-ES');

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
    
    const deleteTransaction = (id) => {
        console.log(`The transaction ${id} was deleted.`);
    }

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
