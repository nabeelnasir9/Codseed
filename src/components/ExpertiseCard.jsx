import { useState } from "react";
import "../styles/ExpertiseCard.css";
import Image1 from "../assets/Expertise/airplane.png";
import Image2 from "../assets/Expertise/strategy.png";
const ExpertiseCard = () => {
  const [content, setContent] = useState({
    text: "CodSeed is a company with clear and broad visions. We always focus on quality and commitment which consequently helps us achieve desirable results. We are open to continuous learning as technology becomes obsolete very fast. Trends that were followed a year ago are no longer applicable in the coming years, so we encourage our team to learn modern techniques to stay up-to-date which helps us stay current in diversification. The sole purpose of our strategies is to benefit the businesses with our developed products so they feel optimistic and promote their brand confidently. We aim our attention at the end-user as well so they encounter an amazing experience using our products.",
    image: Image1, 
  });

  return (
    <div className="uniqueContainer">
      <h1 className="uniqueHeader">Why Choose <span style={{color:'#c20000'}}>Codseed?</span></h1>
      <div className="uniqueButtons">
        <button
          onClick={() =>
            setContent({
              text: "CodSeed is a company with clear and broad visions. We always focus on quality and commitment which consequently helps us achieve desirable results. We are open to continuous learning as technology becomes obsolete very fast. Trends that were followed a year ago are no longer applicable in the coming years, so we encourage our team to learn modern techniques to stay up-to-date which helps us stay current in diversification. The sole purpose of our strategies is to benefit the businesses with our developed products so they feel optimistic and promote their brand confidently. We aim our attention at the end-user as well so they encounter an amazing experience using our products.",
              image: Image1,
            })
          }
          className={`missionButton ${
            content.text ===
            "CodSeed is a company with clear and broad visions. We always focus on quality and commitment which consequently helps us achieve desirable results. We are open to continuous learning as technology becomes obsolete very fast. Trends that were followed a year ago are no longer applicable in the coming years, so we encourage our team to learn modern techniques to stay up-to-date which helps us stay current in diversification. The sole purpose of our strategies is to benefit the businesses with our developed products so they feel optimistic and promote their brand confidently. We aim our attention at the end-user as well so they encounter an amazing experience using our products."
              ? "selected"
              : ""
          }`}
        >
          Our Mission
        </button>

        <button
          onClick={() =>
            setContent({
              text: "The core focal point of our approach is fuelling the growth of your organisation by giving our best. We aspire to see your company’s success by delivering top-notch products and services. Datum Brain has established customised arrangements for understanding and grasping the concepts and ideas of our customers’ projects. This doesn&apos;t burden our clients in explaining their requirements. The communication is kept simple and transparent. We brainstorm in selecting a suitable technology architecture that best goes with our clients’ concept and is adaptable to modern environments. After all the consultation, we indulge ourselves in creating a bespoke software product and integrating it with the existing systems. We keep in touch with our clients throughout the process, giving them necessary updates and recommendations for their intellectual business growth.",
              image: Image2,
            })
          }
          className={`visionButton ${
            content.text === "The core focal point of our approach is fuelling the growth of your organisation by giving our best. We aspire to see your company’s success by delivering top-notch products and services. Datum Brain has established customised arrangements for understanding and grasping the concepts and ideas of our customers’ projects. This doesn&apos;t burden our clients in explaining their requirements. The communication is kept simple and transparent. We brainstorm in selecting a suitable technology architecture that best goes with our clients’ concept and is adaptable to modern environments. After all the consultation, we indulge ourselves in creating a bespoke software product and integrating it with the existing systems. We keep in touch with our clients throughout the process, giving them necessary updates and recommendations for their intellectual business growth."
              ? "selected"
              : ""
          }`}
        >
          Our Approach
        </button>
      </div>
      <div className="uniqueContent_1">
        <p className="textContent">{content.text}</p>
        <img src={content.image} alt="Description" className="contentImage" />
      </div>
    </div>
  );
};

export default ExpertiseCard;
