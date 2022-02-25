import styles from "./Video.module.css"

function IntroVideo() {
    return(
        <div>
            <video id="vid" className={styles.introVideo} autoplay="autoplay" muted="muted">
                <source src="/videos/intro.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}

export default IntroVideo;