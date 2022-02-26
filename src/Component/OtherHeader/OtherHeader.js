import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <ul className={styles.headerNav}>
                <li>
                    <Link to="/home">
                        <h2>Home</h2>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;