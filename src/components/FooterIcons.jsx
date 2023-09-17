import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import "../styles/FooterIcons.css";
// import { Link } from 'react-router-dom';
const FooterIcons = () => {
  return (
    <div className="footerIcons_wrapper">
      <div className="footerIcons_container">
        <div>
          <p className="copy_para">Copyright © 2023 CodSeed</p>
        </div>
        <div className="social_icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialFacebook size={23} className="social" color="black"/>
          </a>
          <a
            href="https://github.com/nabeelnasir9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialGithub size={23} color="black"/>
          </a>
          <a
            href="https://www.instagram.com/codseed_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram size={23} color="black" />
          </a>
          <a
            href="https://www.linkedin.com/company/codseed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialLinkedin size={23} color="black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterIcons;
