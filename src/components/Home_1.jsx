/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// import HomeSec1 from "../assets/Home/HomeSec1.jpg";
import MainSec from '../assets/Home/MainSec.jpeg';
import "../styles/Home_1.css";
const Home_1 = () => {
  const [text, setText] = useState("Bridging the Gap Between ");
  const [animatedWord, setAnimatedWord] = useState(" Ideas");

  const words = [" Ideas", "Execution", "Technology", "Future", "Solutions"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setAnimatedWord(words[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="responsive-container">
      <img src={MainSec} alt="Home" className="responsive-image" />
      <p className="responsive-text">
        {text}
        <span className="responsive-text-word" key={animatedWord}>
          {animatedWord}
        </span>
      </p>{" "}
    </div>
  );
};

export default Home_1;
