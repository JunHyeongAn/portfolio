import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <ul className={styles.headerNav}>
                <li><h2><a href="#aboutMe">About me</a></h2></li>
                <li><h2><a href="#portfolio">Portfolio</a></h2></li>
            </ul>
        </header>
    );
}

export default Header;