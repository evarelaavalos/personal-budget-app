import { Link } from "react-router-dom";
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
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} />
                            Inicio
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/add">
                            <FontAwesomeIcon icon={faPlus} />
                            Agregar
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/incomes">
                            <FontAwesomeIcon icon={faArrowCircleDown} />
                            Ingresos
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/expenses">
                            <FontAwesomeIcon icon={faArrowCircleUp} />
                            Egresos
                        </Link>
                    </li>
                </ul>
            </MaxWidthWrapper>
        </nav>
    )
}
