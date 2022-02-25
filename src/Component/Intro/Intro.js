import { useEffect, useState } from "react";
import styles from "./Intro.module.css";
import style from "./Intro.css";
import { Link } from "react-router-dom";

function Intro() {
    const firstText = 
        "<p class='o'>public class <p class='b'>Hello <p>() {\n"
        + " <p class='o'>public static void <p class='g'>main<p>(<p class='b'>String[] <p class='s'>args<p>) {\n"
        + "  <p class='b'>System<p>.<p class='s'>out<p>.<p class='l'>println<p>(<p class='d'>\"안녕하세요!!안준형입니다.\"<p>);\n"
        + "  <p class='b'>System<p>.<p class='s'>out<p>.<p class='l'>println<p>(<p class='d'>\"포트폴리오를 보러와주셔서 감사합니다!!\"<p>);\n"
        + "  <p class='b'>System<p>.<p class='s'>out<p>.<p class='l'>print<p>(<p class='d'>\"더욱 발전하는 저의 모습을 기대해주세요.\"<p>);\n"
        + " }\n"
        + "}";
    const [typeText, setTypeText] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            const textArr = firstText.split("");
            setTypeText(typeText + textArr[count]);
            setCount(count + 1);
        }, 60);
        if(count == firstText.length) {clearInterval(interval);}
        return () => clearInterval(interval);
    })

    return(
        <div className={styles.intro}>
            <div className={styles.coding}>
                package com.junHyeong.developer;<br/><br/>
                <p dangerouslySetInnerHTML={{__html: typeText}}></p>
            </div>

            <div className={styles.box}>
                <div className={styles.title}>안준형's PORTFOLIO</div>
                <Link to="/home">
                    <div className={styles.go}>LET'S GO!!</div>
                </Link>
            </div>
        </div>
    );
}

export default Intro;