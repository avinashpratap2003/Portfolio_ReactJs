import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { PiLinkSimpleBold } from "react-icons/pi";

const Projects = () => {
  return (
    <div id="projects">
      <div  className="projects-section">
        <h1 className="p-head">Projects</h1>
        <div className="project-container">
          {/* <!-- project 1 --> */}
          <div className="card" id="project1">
            <div className="p-number p-n-right">01</div>
            <div className="card-content ">
              <div className="card-content-skills">
                <img className="icon" src="stacks/HTML.png" alt="" />
                <img className="icon" src="stacks/CSS.png" alt="" />
                <img className="icon" src="stacks/Javascript.svg" alt="" />
                <img className="icon" src="stacks/Express.png" alt="" />
                <img className="icon" src="stacks/Next.svg" alt="" />
                <img className="icon" src="stacks/Tailwind.png" alt="" />
                <img className="icon" src="stacks/NodeJs.svg" alt="" />
                <img className="icon" src="stacks/MongoDB.svg" alt="" />
                <img className="icon" src="stacks/Redux.svg" alt="" />
                <img className="icon" src="stacks/Vercel.svg" alt="" />
              </div>
              <h2 className="tint-n-orange">Tint & Orange</h2>
              <p className="paragraph">
                Its is a car modification copany which provide you sheets to
                protect your car from scratch
              </p>
              <div className="btn-group">
                <button className="button card-button ">Read More</button>
                <a title="Github" href=""><FaGithub /></a>
                <a title="Project Link" href=""><PiLinkSimpleBold /></a>
              </div>
            </div>
          </div>
          {/* <!-- project 2 --> */}
          <div className="card" id="project2">
            <div className="p-number p-n-left">02</div>
            <div className="card-content card-content-right">
              <div className="card-content-skills">
                <img className="icon" src="stacks/HTML.png" alt="" />
                <img className="icon" src="stacks/CSS.png" alt="" />
                <img className="icon" src="stacks/Javascript.svg" alt="" />
                {/* <!-- <img className="icon" src="stacks/Express.png" alt=""> --> */}
                <img className="icon" src="stacks/Next.svg" alt="" />
                <img className="icon" src="stacks/Tailwind.png" alt="" />
                {/* <!-- <img className="icon" src="stacks/NodeJs.svg" alt=""> --> */}
                {/* <!-- <img className="icon" src="stacks/MongoDB.svg" alt=""> --> */}
                <img className="icon" src="stacks/Redux.svg" alt="" />
                <img className="icon" src="stacks/Vercel.svg" alt="" />
              </div>
              <h2 className="tint-n-orange">Breaking Copyrights</h2>
              <p className="paragraph">
                A platform to download Copyrights free youtube music{" "}
              </p>
              <div className="btn-group">
                <button className="button card1-button ">Read More</button>
                <a title="Github" href=""><FaGithub /></a>
                <a title="Project Link" href=""><PiLinkSimpleBold /></a>
              </div>
            </div>
          </div>
          {/* <!-- project 3 --> */}
          <div className="card" id="project3">
            <div className="p-number p-n-right">03</div>
            <div className="card-content ">
              <div className="card-content-skills">
                <img className="icon" src="stacks/HTML.png" alt="" />
                <img className="icon" src="stacks/CSS.png" alt="" />
                <img className="icon" src="stacks/Javascript.svg" alt="" />
                {/* <!-- <img className="icon" src="stacks/Express.png" alt=""> --> */}
                <img className="icon" src="stacks/Next.svg" alt="" />
                <img className="icon" src="stacks/Tailwind.png" alt="" />
                {/* <!-- <img className="icon" src="stacks/NodeJs.svg" alt=""> --> */}
                {/* <!-- <img className="icon" src="stacks/MongoDB.svg" alt="">s --> */}
                <img className="icon" src="stacks/Redux.svg" alt="" />
                <img className="icon" src="stacks/Vercel.svg" alt="" />
              </div>
              <h2 className="tint-n-orange">Isha Tattva</h2>
              <p className="paragraph">
                A website for interior designer to showcase her works and
                samples
              </p>
              <div className="btn-group">
                <button className="button card1-button ">Read More</button>
                <a title="Github" href=""><FaGithub /></a>
                <a title="Project Link" href=""><PiLinkSimpleBold /></a>
              </div>
            </div>
          </div>
          {/* <!-- project 4 --> */}
          <div className="card" id="project4">
            <div className="p-number p-n-left">04</div>
            <div className="card-content card-content-right">
              <div className="card-content-skills">
                {/* <!-- <img className="icon" src="stacks/HTML.png" alt=""> -->
              <!-- <img className="icon" src="stacks/Javascript.svg" alt=""> --> */}
                <img className="icon" src="stacks/Express.png" alt="" />
                {/* <!-- <img className="icon" src="stacks/Next.svg" alt=""> --> */}
                <img className="icon" src="stacks/Tailwind.png" alt="" />
                {/* <!-- <img className="icon" src="stacks/NodeJs.svg" alt=""> -->
              <!-- <img className="icon" src="stacks/MongoDB.svg" alt=""> -->
              <!-- <img className="icon" src="stacks/Redux.svg" alt=""> --> */}
                <img className="icon" src="stacks/Vercel.svg" alt="" />
              </div>
              <h2 className="tint-n-orange">Granit</h2>
              <p className="paragraph">
                An architectural websiteto plan your building or home(Hebrew
                Language){" "}
              </p>
              <div className="btn-group">
                <button className="button card1-button ">Read More</button>
                <a title="Github" href=""><FaGithub /></a>
                <a title="Project Link" href=""><PiLinkSimpleBold /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
