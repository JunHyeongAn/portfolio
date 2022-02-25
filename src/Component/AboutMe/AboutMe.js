import styles from "./AboutMe.module.css"

function AboutMe() {
    return(
    <section className={styles.aboutMeSection} id="aboutMe">
        <h2>About Me</h2>
        <div className={styles.introduce}>
          <h3>Introduce</h3>
          <p>
            프로그래밍에 빠져 아직 빠져나오지 못한 안준형입니다.
          </p>
        </div>

        <h3>Technology Stack</h3>
        <ul className={styles.stack}>
          <li>
            <img src="/images/java.png" alt="java img"/>
            JAVA
          </li>
          <li>
            <img src="/images/javascript.png" alt="javascript img"/>
            Javascript
          </li>
          <li>
            <img src="/images/spring.png" alt="spring img"/>
            Spring legacy
          </li>
          <li>
          <img src="/images/spring.png" alt="spring img"/>
            Spring Boot
          </li>
          <li>
            <img src="/images/react.png" alt="react img"/>
            React
          </li>
          <li>
            <img src="/images/mysql.png" alt="mysql img"/>
            Mysql
          </li>
          <li>
            <img src="/images/linux.png" alt="linux img"/>
            Linux
          </li>
        </ul>
        <div className={styles.more}>
          More
        </div>
      </section>
    );
}

export default AboutMe;