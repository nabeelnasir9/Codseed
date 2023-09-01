import Main from "../assets/About/AboutMain.png";
import "../styles/About.css";
const AboutMain = () => {
  return (
    <div className="About_main">
      <div className="coin">
        <div className="side heads">
          <img src={Main} alt="" />
        </div>
        <div className="side tails">
          <img src={Main} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
