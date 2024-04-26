import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div id="home">
      <div className="hero-container">
        <div className="faded-name absolute">Avinash Pratap</div>
        <div className="hero-left">
          <div className="hi-avi">Hi! Avinash Pratap</div>
          <h1 className="sub-heading">
            I am a{" "}
            <span className="job">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Web Developer",
                  "UI-UX Designer",
                  "Coder.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h1>
          <div className="para">
            <h1>
              I'm a software developer and here is my portfolio website. Here
              you'll learn about my journey as a software developer.
            </h1>
          </div>
          <div className="button" id="hire-button"><a href="#contacts">Hire me</a>
            
          </div>
        </div>
        <div className="hero-right">
          <img
            className="circle absolute"
            src="usr profile/circle.png"
            alt=""
          />
          <img className="cube absolute" src="usr profile/cube.png" alt="" />
          <img className="dots absolute" src="usr profile/dots.png" alt="" />
          <img className="plus absolute" src="usr profile/plus.png" alt="" />
          <img
            className="zigzak absolute"
            src="usr profile/zigzags.png"
            alt=""
          />
          <img className="image2 " src="usr profile/image.jpg" alt="" />
        </div>
        <div className="button" id="bottom-button">
          Hire me
        </div>
      </div>
    </div>
  );
};



export default Hero;
