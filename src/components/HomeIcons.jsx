import icon1 from "../assets/Home/icon1.png";
import icon2 from "../assets/Home/icon2.png";
import icon3 from "../assets/Home/icon3.png";
import icon4 from "../assets/Home/icon4.png";
import icon5 from "../assets/Home/icon5.png";
import icon6 from "../assets/Home/icon6.png";
import icon7 from "../assets/Home/icon7.png";
import icon8 from "../assets/Home/icon8.png";
import icon9 from "../assets/Home/icon9.png";
import icon10 from "../assets/Home/icon10.png";
import icon11 from "../assets/Home/icon11.png";
import icon12 from "../assets/Home/icon12.png";
import icon13 from "../assets/Home/icon13.png";
import icon14 from "../assets/Home/icon16.jpeg";
import icon15 from "../assets/Home/icon14.png";

import "../styles/HomeIcon.css";

const HomeIcons = () => {
  const icons = [
    icon1,
    icon14,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon15,
  ];
  return (
    <div className="main">
        <p className="main-para"> Team&apos;s we <span style={{color:'#c20000'}}>have worked with</span></p>
    <div className="icons-wrapper">
      {icons.map((iconSrc, index) => (
        <div key={index} className="icon-container">
          <img src={iconSrc} alt={`Icon ${index + 1}`} className="icon" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default HomeIcons;
