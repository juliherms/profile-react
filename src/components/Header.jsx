import styles from './Header.module.css'

import ignoteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignoteLogo} alt="logotipo do ignite"/>
        </header>        
    );
}