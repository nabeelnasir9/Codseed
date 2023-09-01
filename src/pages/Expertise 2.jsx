import ExpertiseCard from "../components/ExpertiseCard";
import ExpertiseContent from "../components/ExpertiseContent";

const Expertise = () => {
  return <div id="expertise" style={{
    background: 'linear-gradient(200deg, rgba(252,252,252,1) 50%, rgba(255,183,3,1) 100%)'
  }}>
    <ExpertiseCard/>
    <ExpertiseContent/>
     </div>;
};

export default Expertise;
