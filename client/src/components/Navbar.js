import MaxWidthWrapper from './MaxWidthWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faPlus,
    faArrowCircleDown,
    faArrowCircleUp,
} from '@fortawesome/free-solid-svg-icons'

import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <MaxWidthWrapper>
                <ul className={styles.navItems}>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faHome} />
                        Inicio
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faPlus} />
                        Agregar
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faArrowCircleDown} />
                        Ingresos
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faArrowCircleUp} />
                        Egresos
                    </li>
                </ul>
            </MaxWidthWrapper>
        </nav>
    )
}
