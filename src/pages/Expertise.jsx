import ExpertiseCard from "../components/ExpertiseCard";
import ExpertiseContent from "../components/ExpertiseContent";
import Testimonial from "../components/Testimonial";

const Expertise = () => {
  return <div id="expertise" style={{
    background: '#efefef', position:'relative'
  }}>
    <ExpertiseCard/>
    <ExpertiseContent/>
    <Testimonial/>
     </div>;
};

export default Expertise;
