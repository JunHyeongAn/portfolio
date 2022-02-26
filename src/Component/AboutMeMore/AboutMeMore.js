import OtherHeader from "../OtherHeader/OtherHeader.js"
import styles from "./AboutMeMore.module.css"
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splide from "@splidejs/splide";
import { useEffect} from "react";

function AboutMeMore() {
    useEffect(() => {
        const splide = new Splide( '.splide', {
            type   : 'loop',
            padding: '5rem',
        } );
        splide.mount();
        console.log(splide);
    }, [])
    return (
        <section className={styles.aboutMeMore}>
            <OtherHeader/>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>About Me</h1>
                <div><strong>이름</strong> : 안준형</div>
                <div><strong>생년월일</strong> : 1997년 08월 30일</div>
                <div><strong>병역</strong> : 만기전역</div>
                <div><strong>취미</strong> : 아스날 경기 시청</div>
                <div><strong>종교</strong> : 무교</div>
                <div><strong>인턴 및 근무경력(아르바이트 포함)</strong></div>
                <table>
                    <thead>
                        <tr>
                            <th>기간</th>
                            <th>회사명</th>
                            <th>직책</th>
                            <th>업무내용</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>2016-12 ~ 2017–02</td>
                            <td>TGI FRIDAY</td>
                            <td>아르바이트</td>
                            <td>음식 서빙 및 정리 체계적인 일하는 시스템을 경험함</td>
                        </tr>
                        <tr>
                            <td>2020-01 ~ 2020-08</td>
                            <td>미래지앤씨</td>
                            <td>아르바이트</td>
                            <td>덕트 설치 및 보수를 통한 팀원들 간의 협업 을 경험함</td>
                        </tr>
                        <tr>
                            <td>2021-12 ~ </td>
                            <td>(주)엠바스</td>
                            <td>소프트웨어 개발자</td>
                            <td>
                                Spring Boot를 활용한 서버 개발 및 Javascript를 활용한 프론트 개발<br/>
                                서버 관리 등을 수행
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <strong>자기소개</strong>
                </div>
                <div>
                    <fieldset>
                        <legend><strong>[ 하고 싶은 것 재밌는 것을 찾은 사람 안준형입니다 ]</strong></legend>
                        
                        저에게 가장 당황스러운 질문 중 하나가 ‘좋아하는 게 뭐에요?’라는 질문이었습니다.<br/> 
                        하지만 이제는 당황하지 않습니다. <br/>
                        이제는 ‘프로그래밍을 좋아합니다’라고 말 할 수 있습니다.<br/> 
                        아무 것도 없는 곳에서 내가 설계하고 만들었을 때의 그 성취감이 저를 프로그래밍에 빠져들게 만들었습니다.<br/> 
                        단순히 코딩만 하는 것을 좋아하는 것이 아니라 설계하는 것도 너무 재밌습니다. <br/>
                        그렇게 좋아하는 프로그래밍을 계속 배우다 보니 그 안의 함수 값이나 모듈등이 실행할 때 그 요소 값들이 저게는 장난감과 같은 재미있는 것이 되었습니다.
                    </fieldset>
                </div>
                
                <div>
                    <strong>학력</strong>
                </div>
                <ul>
                    <li>동양미래대학교(로봇자동화 공학과, 자퇴)</li>
                    <li>KGITBANK 평생교육원(컴퓨터 공학과, 졸업)</li>
                </ul>


                <div className={styles.eduContainer}>
                    {/* ////////// */}
                    <div>
                        <strong>교육이수</strong>
                        <table>
                            <thead>
                                <tr>
                                    <th>기간</th><th>교육기관</th><th>과정명</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>2020-08 ~ 2021-02</td>
                                    <td>KGITBANK</td>
                                    <td>리눅스, C언어, Java, JSP, Spring framework</td>
                                </tr>
                                <tr>
                                    <td>2021-02 ~ 2021-08</td>
                                    <td>KGITBANK</td>
                                    <td>스프링 클라우드를 활용한 응용 sw개발자 양성</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ////////// */}
                    <div className={styles.innerContainer}>
                        <div>
                            <strong>자격증</strong>
                            <ul>
                                <li>네트워크 관리사</li>
                                <li>리눅스 마스터(필기)</li>
                                <li>컴퓨터 활용능력 1급(필기)</li>
                            </ul>
                        </div>

                        <div className={styles.splider}>
                            <div id="image-slider" className="splide">
                                <div className="splide__track">
                                        <ul className="splide__list">
                                            <li className="splide__slide">
                                                <a href="/images/cyberschool.jpg">
                                                    <img src="/images/cyberschool.jpg" alt="1"/>
                                                </a>
                                            </li>
                                            <li className="splide__slide">
                                                <a href="images/grade.jpg">
                                                    <img src="images/grade.jpg" alt="1"/>
                                                </a>
                                            </li>
                                            <li className="splide__slide">
                                                <a href="images/network.jpeg">
                                                    <img src="images/network.jpeg" alt="1"/>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        {/* ////////// */}
                    </div>
                </div>
                {/* ////////// */}
            </div>
        </section>
    );
}

export default AboutMeMore;