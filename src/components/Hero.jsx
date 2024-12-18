import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div id="about">
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
              I am a motivated and versatile individual, always eager to take on new challenges.
              With a passion for learning I am dedicated to delivering high-quality results. 
              With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
            </h1>
          </div>
          <div className="button" id="hire-button"  
          onClick={() => window.open('https://drive.google.com/file/d/1y4NcSg_hgrjKORWWWGPj5HzYOZ9zyKHX/view?usp=drive_link', '_blank')}>
            Check Resume
          </div>
        </div>
        <div className="hero-right">
          <img className="circle absolute" src="usr profile/circle.png" alt=""/>
          <img className="cube absolute" src="usr profile/cube.png" alt="" />
          <img className="dots absolute" src="usr profile/dots.png" alt="" />
          <img className="plus absolute" src="usr profile/plus.png" alt="" />
          <img className="zigzak absolute"src="usr profile/zigzags.png" alt=""/>
          <img className="profile-pic " src="usr profile/image.jpg" alt="" />
        </div>
        
        <div className="button" id="bottom-button"
        onClick={() => window.open('https://drive.google.com/file/d/1y4NcSg_hgrjKORWWWGPj5HzYOZ9zyKHX/view?usp=drive_link', '_blank')}>
        Check Resume
        </div>
      </div>
    </div>
  );
};
 


export default Hero;
