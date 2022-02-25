import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Portfolio from "../Portfolio/Portfolio";

function Home() {
    return(
        <div>
            <Header/>
            <Logo/>
            <AboutMe/>
            <Portfolio/>
        </div>
    );
}

export default Home;