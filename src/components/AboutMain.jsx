import Main from "../assets/About/AboutMain.png";
import "../styles/About.css";
const AboutMain = () => {
  return (
    <div className="About_main">
      <div className="coin">
        <div className="side heads">
          <img src={Main} alt="" style={{width:'300px', height:'300px'}}/>
        </div>
        <div className="side tails">
          <img src={Main} alt="" style={{width:'300px', height:'300px'}}/>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
