import { useNavigate } from 'react-router-dom';

import styles from './GoBackButton.module.css';

export default function GoBackButton({ children, ...otherProps }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <button
            className={styles.button}
            onClick={handleClick}
            {...otherProps}
        >
            {children}
        </button>
    )
}
