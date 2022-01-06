import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowCircleDown,
    faArrowCircleUp,
    faPen,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import styles from './TransactionList.module.css';

export default function TransactionList() {
    return (
        <section className={styles.transactions}>
            <div className={styles.transactionsHeader}>
                <h2 className={styles.transactionsHeaderTitle}>Últimos Movimientos</h2>
                <p className={styles.transactionsHeaderCaption}>Gestiona las últimas operaciones realizadas.</p>
            </div>
            <div className={styles.transactionsRow}>
                <div className={styles.transactionsRowType}>
                    <FontAwesomeIcon icon={faArrowCircleDown} size="3x" />
                    Ingreso
                </div>
                <div className={styles.transactionsRowDescription}>
                    Aca compraste algo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit provident aliquid doloribus quo mollitia praesentium architecto aut repellat rem harum.
                </div>
                <div className={styles.transactionsRowMetadata}>
                    <div className={styles.transactionsRowMetadataAmount}>
                        $215.23
                    </div>
                    <div className={styles.transactionsRowMetadataDate}>
                        20 de Diciembre
                    </div>
                </div>
                <div className={styles.transactionsRowOptions}>
                    <FontAwesomeIcon icon={faPen} />
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>
            </div>
            <div className={styles.transactionsRow}>
                <div className={styles.transactionsRowType}>
                    <FontAwesomeIcon icon={faArrowCircleDown} size="3x" />
                    Ingreso
                </div>
                <div className={styles.transactionsRowDescription}>
                    Aca vendiste algo.
                </div>
                <div className={styles.transactionsRowMetadata}>
                    <div className={styles.transactionsRowMetadataAmount}>
                        $215.23
                    </div>
                    <div className={styles.transactionsRowMetadataDate}>
                        20 de Diciembre
                    </div>
                </div>
                <div className={styles.transactionsRowOptions}>
                    <FontAwesomeIcon icon={faPen} />
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>
            </div>
            <div className={styles.transactionsRow}>
                <div className={styles.transactionsRowType}>
                    <FontAwesomeIcon icon={faArrowCircleDown} size="3x" />
                    Ingreso
                </div>
                <div className={styles.transactionsRowDescription}>
                    Aca te depositaron algo.
                </div>
                <div className={styles.transactionsRowMetadata}>
                    <div className={styles.transactionsRowMetadataAmount}>
                        $215.23
                    </div>
                    <div className={styles.transactionsRowMetadataDate}>
                        20 de Diciembre
                    </div>
                </div>
                <div className={styles.transactionsRowOptions}>
                    <FontAwesomeIcon icon={faPen} />
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>
            </div>
            <div className={styles.transactionsRow}>
                <div className={styles.transactionsRowType}>
                    <FontAwesomeIcon icon={faArrowCircleUp} size="3x" />
                    Egreso
                </div>
                <div className={styles.transactionsRowDescription}>
                    Aca compraste algo.
                </div>
                <div className={styles.transactionsRowMetadata}>
                    <div className={styles.transactionsRowMetadataAmount}>
                        $215.23
                    </div>
                    <div className={styles.transactionsRowMetadataDate}>
                        20 de Diciembre
                    </div>
                </div>
                <div className={styles.transactionsRowOptions}>
                    <FontAwesomeIcon icon={faPen} />
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>
            </div>
        </section>
    )
}
