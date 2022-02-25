import {BrowserRouter, Route, Routes} from "react-router-dom";
import styles from "./App.module.css";
import Home from "../Home/Home";
import Intro from "../Intro/Intro";
import IntroVideo from "../IntroVideo/IntroVideo";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/video" element={<IntroVideo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
