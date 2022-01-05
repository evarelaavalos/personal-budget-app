import styles from './MaxWidthWrapper.module.css';

export default function MaxWidthWrapper({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}
