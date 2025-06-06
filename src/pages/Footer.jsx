import "../styles/Footer.css";
import Logo from "../assets/Expertise/footerLogo.png";
import {SlLocationPin  } from 'react-icons/sl';
import { HiMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div className="footer_content_1">
          <img src={Logo} alt="" className="footer_logo" />
          <p className="footer_logo_content">
            <span className="quotes">&quot;</span>Our extensive research and development along with hands-on
            experience with the latest innovations grant you a solution that is
            perfectly fit for your use case. We have mastered the art of writing
            serverless applications.<span className="quotes">&quot;</span>
          </p>
        </div>
        <div className="footer_content_2">
          <h1 className="footer_content_2_head_1">Company</h1>
          <p className="footer_content_2_para_1">Home</p>
          <p className="footer_content_2_para_1">About</p>
          <p className="footer_content_2_para_1">Expertise</p>
          <p className="footer_content_2_para_1">Contact Us</p>
        </div>
        <div className="footer_content_3">
          <h1 className="footer_content_2_head_1">Support</h1>
          <p className="footer_content_2_para_1">Help</p>
          <p className="footer_content_2_para_1">Terms of service</p>
          <p className="footer_content_2_para_1">Legal</p>
          <p className="footer_content_2_para_1">Privacy Policy</p>
        </div>
        <div className="footer_content_4">
          <div className="footer_contact_1">
            <h1 className="footer_content_2_head_1">Reach Us</h1>
            <div className="footer_content_Reach_1">
              <HiMail className="icon__footer" color="#c20000"/>
              <p className="footer_content_content_1">codseed2@gmail.com</p>
            </div>
            <div className="footer_content_Reach_1">
              <FiPhoneCall className="icon__footer" color="#c20000" />
              <p className="footer_content_content_1">+1(431) 877-7367</p>
            </div>
            <div className="footer_content_Reach_1">
              <SlLocationPin className="icon__footer" color="#c20000" />
              <p className="footer_content_content_1">
                2710 Hunter Mill Road, Oakton, VA 22124
              </p>
            </div>
            <div className="footer_content_Reach_1">
              <SlLocationPin className="icon__footer" color="#c20000" />
              <p className="footer_content_content_1">
                Manitoba, Winnipeg, Canada
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
     
    </div>
    </div>
  );
};

export default Footer;
