import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './Button.module.css';

export default function Button({
    isPendingTransaction,
    transactionState,
    children,
    ...otherProps
}) {
    let content, btnStyles;

    if (transactionState === 'fulfilled') {
        btnStyles = `${styles.button} ${styles.fulfilled}`;
        content = (
            <>
                <FontAwesomeIcon icon={faCheck} />
                Hecho
            </>
        );
    } else if (transactionState === 'rejected') {
        btnStyles = `${styles.button} ${styles.rejected}`;
        content = (
            <>
                <FontAwesomeIcon icon={faTimes} />
                Error
            </>
        )
    } else {
        btnStyles = `${styles.button}`;
        content = (
            <>
                {children}
            </>
        )
    }

    return (
        <button
            className={btnStyles}
            disabled={isPendingTransaction}
            {...otherProps}
        >
            {isPendingTransaction
                ? 'Cargando...'
                : content}
        </button>
    )
}
