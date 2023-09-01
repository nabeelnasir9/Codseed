import "../styles/AboutCard.css";
import App from "../assets/About/app-development.png";
import coding from "../assets/About/coding.png";
import dashboard from "../assets/About/dashboard.png";
import dataCollection from "../assets/About/data-collection.png";
import dataMining from "../assets/About/data-mining.png";
import dataVisual from "../assets/About/data-visualization.png";
import deveop from "../assets/About/devops.png";
import monitor from "../assets/About/monitor.png";
const AboutCard = () => {
  return (
    <div className="MainSec_card">
      <div className="cards">
        <div className="card red">
          <img
            src={App}
            alt=""
            style={{ width: "60px" }}
            className="ImagesAbout"
          />
          <p className="second-text">App Development</p>
        </div>
        <div className="card blue">
          <img
            src={coding}
            alt=""
            style={{ width: "60px" }}
            className="ImagesAbout"
          />
          <p className="second-text">Desktop Software Development</p>
        </div>
        <div className="card green">
          <img
            src={dashboard}
            alt=""
            style={{ width: "60px" }}
            className="ImagesAbout"
          />
          <p className="second-text">Data Engineering</p>
        </div>
      </div>
      <div className="cards">
        <div className="card red">
          <img
            src={dataCollection}
            alt=""
            style={{ width: "60px" }}
            className="ImagesAbout"
          />
          <p className="second-text">Data Extraction/ETL</p>
        </div>
        <div className="card blue">
          <img
            src={dataMining}
            alt=""
            style={{ width: "60px" }}
            className="ImagesAbout"
          />
          <p className="second-text">Data Mining & Management</p>
        </div>
        <div className="card green">
          <img
            src={dataVisual}
            alt=""
            style={{ width: "60px" }}
            className="ImagesAbout"
          />
          <p className="second-text">Data Visulaization</p>
        </div>
      </div>
      <div className="cards">
        <div className="card red">
          <img
            src={deveop}
            alt=""
            style={{ width: "60px" }}
            className="ImagesAbout"
          />
          <p className="second-text">Devops</p>
        </div>
        <div className="card blue">
          <img
            src={monitor}
            alt=""
            style={{ width: "60px" }}
            className="ImagesAbout"
          />
          <p className="second-text">Web Development</p>
        </div>
        <div className="card green">
          <img
            src={monitor}
            alt=""
            style={{ width: "60px" }}
            className="ImagesAbout"
          />
          <p className="second-text">On-Demand Software Systems</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
