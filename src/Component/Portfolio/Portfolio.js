import styles from "./Portfolio.module.css"

function Portfolio() {
    return (
      <section className={styles.portfolioSection} id="portfolio">
          <h2>Portfolio</h2>
          
          <div className={styles.wrapper}>
            <div className={styles.portfolioBox}>
              <img src="/images/football.png"/>
            </div>
            <div className={styles.portfolioBox}>
              <img src="/images/football.png"/>
            </div>
            <div className={styles.portfolioBox}>
              <img src="/images/football.png"/>
            </div>
          </div>
      </section>
    );
}

export default Portfolio;