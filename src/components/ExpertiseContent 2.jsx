import "../styles/ExpertiseContent.css";
import ai from "../assets/Expertise/brain.png";
import server from "../assets/Expertise/web.png";
import target from "../assets/Expertise/target.png";
import electro from "../assets/Expertise/electronic.png";

const ExpertiseContent = () => {
  return (
    <div className="ec-container">
        <h1 className="ec-Head_1">Turning Challenges into Opportunities</h1>
      <div className="ec-content-top">
        <p className="ec-paragraph">
          Years of experience in Scala and Golang, enables us to provide
          cutting-edge solutions. <br/> <br/> We can work on extracting the ideal solution
          and deliver it in a robust and extremely user-friendly way. You are
          surely in for a surprise!
        </p>
        <p className="ec-paragraph">
          Years of experience in Scala and Golang, enables us to provide
          cutting-edge solutions. <br/> <br/> We can work on extracting the ideal solution
          and deliver it in a robust and extremely user-friendly way. You are
          surely in for a surprise!
        </p>
        <img src={server} alt="Server" />
      </div>

      <div className="ec-content-bottom">
        <div className="ec-card">
          <div className="ec-card-top">
            <span className="ec-span-para">Strong Engineering Solutions</span>
            <span>
              <img src={ai} alt="" />
            </span>
          </div>
          <p className="ec-span-para_1">
            We are bunch of innovators with a resilient technical mindset. <br/> <br/>  We
            always focus on creating revolutionary products for our clients to
            meet their needs and goals.
          </p>
        </div>

        <div className="ec-card">
          <div className="ec-card-top">
            <span className="ec-span-para">Efficient Performance</span>
            <span>
              <img src={target} alt="" />
            </span>
          </div>
          <p className="ec-span-para_1">
            Our dedication and quality of our deliverables are a conerstone for
            our long-term relationships with our clients. <br/> <br/> We are technology
            go-getters with a dynamic approach and confident mindset.
          </p>
        </div>

        <div className="ec-card">
          <div className="ec-card-top">
            <span className="ec-span-para">Pursuit of Mutual Success</span>
            <span>
              <img src={electro} alt="" />
            </span>
          </div>
          <p className="ec-span-para_1">
            We have developed a versatile skillset over the years and always
            conveyed a successful project to our partners. <br/> <br/> We don’t consider it
            an accomplishment until our clients are satisfied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseContent;
