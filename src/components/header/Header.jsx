import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../assets/logo.png';
const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.logoImage} src={Logo} alt="logo photo"/>
            </div>
            <nav>
                <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? styles.active : '')}>
                    Home
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/curriculum" className={({ isActive }) => (isActive ? styles.active : '')}>
                    Curriculum
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/schedule" className={({ isActive }) => (isActive ? styles.active : '')}>
                    Schedule
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/registered-courses" className={({ isActive }) => (isActive ? styles.active : '')}>
                    Registered Courses
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>
                    Login
                    </NavLink>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
