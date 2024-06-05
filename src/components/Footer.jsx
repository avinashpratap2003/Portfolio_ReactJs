import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container main-container">
          <div className="footer-wrapper">
            <div className="footer-faded-text">Avinash Pratap</div>
            <div className="link-wrapper ">
              <div>
                <a href="#projects">Projects</a>
              </div>
              <div>
                <a href="#skills">Skills</a>
              </div>
              <div>
                <a href="#contacts">ContactMe</a>
              </div>
            </div>
            <div className="icon-wrapper ">
              <a href="https://www.linkedin.com/in/avinash-pratap-b22058233/" title="Linkedin">
                <FaLinkedin />
              </a>
              <a href="https://github.com/avinashpratap2003" title="Github">
                <FaGithub />
              </a>
              <a title="Instagram">
                <FaInstagram />
              </a>
              <a href="mailto:pratapavinash843@gmail.com" title="Gmail">
                <IoMailOutline />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
