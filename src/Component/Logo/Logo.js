import headImage from "./boy-gbbda2787d_640.png"
import styles from "./Logo.module.css"

function Logo() {
    return(
    <section className={styles.logoSection}>
        <img className={styles.logoImage} src={headImage} alt="logo img"/>
        <ul>
          <li className={styles.job}><h2>Back-End developer</h2></li>
        </ul>
        <p>개발을 즐기고 있는 개발자 안준형입니다</p>
    </section>
    );
}

export default Logo;