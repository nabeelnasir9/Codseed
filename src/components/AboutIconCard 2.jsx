// AboutIconCard.js
import "../styles/AboutIconCard.css";
import next from "../assets/About/nextjs.png";
import node from "../assets/About/nodejs.png";
import openai from "../assets/About/openai.png";
import post from "../assets/About/postfresql.png";
import python from "../assets/About/python.png";
import react from "../assets/About/reactjs.png";
import solidity from "../assets/About/solidity.png";
import types from "../assets/About/typescript.png";
import github from '../assets/About/github.png';
import Air from '../assets/About/Airflow.png';
import Aws from '../assets/About/AWS_1.png';
import Azure from '../assets/About/Azure_1.png';
import Data from '../assets/About/DataSpell.png';
import Git from '../assets/About/Git.png';
import hadoop from '../assets/About/Hadoop.png';
import Num from '../assets/About/NumPy.png';
import Panda from '../assets/About/Pandas_1.png';
import tensor from '../assets/About/TensorFlow.png';
import spark from '../assets/About/Spark.png';
import go from '../assets/About/go.png';
import firebase from '../assets/About/firebase.png';
import js from '../assets/About/js.png';

const AboutIconCard = () => {
  return (
    <div className="Main_About_comp">
      <h1 className="mainHead">Tech Stack Expertise</h1>
      <div className="icon-card-container">
        {/* First Card */}
        <div className="card card-text">
          <p className="Maincard_Para">
            Our extensive research and development along with hands-on
            experience with the latest innovations grant you a solution that is
            perfectly fit for your use case. We have mastered the art of writing
            serverless applications.
          </p>
        </div>

        {/* Second Card */}
        <div className="card card-icons">
          <img src={next} alt="" className="icons" />
          <img src={node} alt="" className="icons" />
          <img src={openai} alt="" className="icons" />
          <img src={post} alt="" className="icons" />
          <img src={python} alt="" className="icons" />
          <img src={react} alt="" className="icons" />
          <img src={solidity} alt="" className="icons" />
          <img src={types} alt="" className="icons" />
          <img src={go} alt="" className="icons" />
          <img src={js} alt="" className="icons" />
          <img src={firebase} alt="" className="icons" />


        </div>

        {/* Third Card */}
        <div className="card card-flex">
        <p className="card_3_para">Big-data (scalable) ETLs/ELTs</p>

          <div className="flex-upper">
            {/* Content for the upper part */}
            <img src={Air} alt="Description 1" className="upper-icons" />
            <img src={Aws} alt="Description 2" className="upper-icons" />
            <img src={Azure} alt="Description 2" className="upper-icons" />
            <img src={Data} alt="Description 2" className="upper-icons" />
            <img src={Num} alt="Description 2" className="upper-icons" />
            <img src={hadoop} alt="Description 2" className="upper-icons" />
            <img src={Panda} alt="Description 2" className="upper-icons" />
            <img src={tensor} alt="Description 2" className="upper-icons" />
            <img src={spark} alt="Description 2" className="upper-icons" />
            <img src={Git} alt="Description 2" className="upper-icons" />



          </div>
          <div className="flex-lower">
            <p className="card_3_para_1">Our Github</p>
            {/* Content for the lower part */}
            <img
              src={github}
              alt="Centered Description"
              className="center-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIconCard;