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
                <img className="icon" src="stacks/HTML.png" alt="html" />
                <img className="icon" src="stacks/CSS.png" alt="css" />
                <img className="icon" src="stacks/Javascript.svg" alt="java" />
                <img className="icon" src="stacks/React.png" alt="reactjs" />
                <img className="icon" src="stacks/Tailwind.png" alt="" />
                <img className="icon" src="stacks/Vercel.svg" alt="" />
                <img className="icon" src="stacks/Git.svg" alt="" />
                <img className="icon" src="stacks/Github.svg" alt="" />

              </div>
              <h2 className="project-name">Portfolio</h2>
              <p className="project-description">
              This portfolio website showcases a collection of my projects, built with ReactJS for a smooth and responsive user experience.
              </p>
              <div className="btn-group">
                {/* <button className="button ">
                  <a href="https://github.com/avinashpratap2003/Portfolio_ReactJs">Read More</a></button> */}
                <a title="Github" href="https://github.com/avinashpratap2003/Portfolio_ReactJs"><FaGithub /></a>
                <a title="Project Link" id="project_one_link" href=""><PiLinkSimpleBold /></a>
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
                <img className="icon" src="stacks/React.png" alt="reactjs" />
                <img className="icon" src="stacks/Tailwind.png" alt="" />
                <img className="icon" src="stacks/Vercel.svg" alt="" />
                <img className="icon" src="stacks/Git.svg" alt="" />
                <img className="icon" src="stacks/Github.svg" alt="" />
              </div>
              <h2 className="project-name">Prepeat</h2>
              <p className="project-description">
              This food delivery website offers a seamless and user-friendly experience with its intuitive interface,
               customers can easily explore menus, customize orders, and enjoy swift delivery right to their doorsteps.
              </p>
              <div className="btn-group">
                {/* <button className="button">
                <a href="https://github.com/avinashpratap2003/PrepEat_react">Read More</a></button> */}
                <a title="Github" href="https://github.com/avinashpratap2003/PrepEat_react"><FaGithub /></a>
                <a title="Project Link" href="https://prep-eat-react.vercel.app/"><PiLinkSimpleBold /></a>
              </div>
            </div>
          </div>
           {/* project 3  */}
          <div className="card" id="project3">
            <div className="p-number p-n-right">03</div>
            <div className="card-content ">
              <div className="card-content-skills">
                <img className="icon" src="stacks/HTML.png" alt="html" />
                <img className="icon" src="stacks/CSS.png" alt="css" />
                <img className="icon" src="stacks/Javascript.svg" alt="java" />
                <img className="icon" src="stacks/React.png" alt="reactjs" />
                <img className="icon" src="stacks/Tailwind.png" alt="" />
                <img className="icon" src="stacks/Vercel.svg" alt="" />
                <img className="icon" src="stacks/Git.svg" alt="" />
                <img className="icon" src="stacks/Github.svg" alt="" />
              </div>
              <h2 className="project-name">Shoppingmart</h2>
              <p className="project-description">
                Shoppingmart is a versatile e-commerce platform offering a wide range of electronics and furniture items. 
                It is designed to provide customers with a seamless shopping experience, showcasing high-quality products and user-friendly navigation.
              </p>
              <div className="btn-group">
                {/* <button className="button">
                <a href="https://github.com/avinashpratap2003/Putatoe_react_Js">Read More</a></button> */}
                <a title="Github" href="https://github.com/avinashpratap2003/Shoppingmart"><FaGithub /></a>
                <a title="Project Link" href="https://shoppingmart-red.vercel.app/"><PiLinkSimpleBold /></a>
              </div>
            </div>
          </div>
          {/* <!-- project 4 --> */}
          {/* <div className="card" id="project4">
            <div className="p-number p-n-left">04</div>
            <div className="card-content card-content-right">
              <div className="card-content-skills"> */}
                {/* <!-- <img className="icon" src="stacks/HTML.png" alt=""> -->
              <!-- <img className="icon" src="stacks/Javascript.svg" alt=""> --> */}
                {/* <img className="icon" src="stacks/Express.png" alt="" /> */}
                {/* <!-- <img className="icon" src="stacks/Next.svg" alt=""> --> */}
                {/* <img className="icon" src="stacks/Tailwind.png" alt="" /> */}
                {/* <!-- <img className="icon" src="stacks/NodeJs.svg" alt=""> -->
              <!-- <img className="icon" src="stacks/MongoDB.svg" alt=""> -->
              <!-- <img className="icon" src="stacks/Redux.svg" alt=""> --> */}
                {/* <img className="icon" src="stacks/Vercel.svg" alt="" />
              </div>
              <h2 className="project-name">Granit</h2>
              <p className="project-description">
                An architectural websiteto plan your building or home(Hebrew
                Language){" "}
              </p>
              <div className="btn-group">
                <button className="button card1-button ">Read More</button>
                <a title="Github" href=""><FaGithub /></a>
                <a title="Project Link" href=""><PiLinkSimpleBold /></a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
