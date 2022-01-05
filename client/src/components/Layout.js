import Navbar from './Navbar';
import MaxWidthWrapper from './MaxWidthWrapper';

import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <main>
                <MaxWidthWrapper>
                    {children}
                </MaxWidthWrapper>
            </main>
        </div>
    )
}
