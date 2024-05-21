import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <div  className="skill-section main-container">
        <div className="skill-faded-text">Skills</div>
        
        <div className="skill-left-part">
          <h2 className="skill-heading ">
            <span className="caps">M</span>e and <br />
            My Tech skills
          </h2>

          <div className="my-info">
          <div className="skill-para">
            <div className="info-div" >
              <div className="date">2021<br/>-25</div>
              <div className="course">
                <h2>B.Tech in Computer Science and Engineering (AI)</h2>
                <p>IET Lucknow</p>
              </div>
            </div>

            <div className="info-div">
            <div className="date">2018<br/>-20</div>
              <div className="course">
                <h2>Class 12th CBSE Board</h2>
                <p>DAV Public School</p>
              </div>
            </div>

            <div className="info-div" id="class-10-div">
            <div className="date">2018</div>
              <div className="course">
                <h2>Class 10th CBSE Board</h2>
                <p>DAV Public School</p>
              </div>
            </div>
            </div>
          </div>

          
            {/* <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ea neque et delectus placeat consequuntur ex ad vel. Debitis nobis
              natus minima tenetur saepe esse eum ipsam cumque error illum nemo
              quos nostrum et ducimus, veniam dolores eveniet. Aut animi,{" "}
            </p> */}
            {/* <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              molestias assumenda quidem quae odio ipsa ratione reiciendis aut
              praesentium harum molestiae dolor fuga temporibus officia aliquam,
              accusamus labore voluptates architecto voluptas velit, vero at
            </p> */}
            {/* <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              aliquid maxime? Et, aliquam excepturi necessitatibus expedita
              laborum distinctio, quia error reprehenderit placeat, possimus
              minima pariatur vel ipsam repudiandae eveniet inventore?
            </p> */}
          </div>
        
        <div className="skill-right-part">
          <img className="blob-icon " src="stacks/blob vector.png" alt="" />
          <img className="skills-icons " src="stacks/HTML.png" alt="" />
          <img className="skills-icons " src="stacks/CSS.png" alt="" />
          <img className="skills-icons " src="stacks/Javascript.svg" alt="" />
          <img className="skills-icons " src="stacks/React.png" alt="" />
          {/* <img className="skills-icons " src="stacks/NodeJs.svg" alt="" /> */}
          <img className="skills-icons " src="stacks/NextJsCircle.png" alt="" />
          <img className="skills-icons " src="stacks/c.svg" alt="" />
          <img className="skills-icons " src="stacks/c++.svg" alt="" />
          {/* <img className="skills-icons " src="stacks/Redux.svg" alt="" /> */}
          <img className="skills-icons " src="stacks/Tailwind.png" alt="" />
          <img className="skills-icons " src="stacks/Bootstrap.svg" alt="" />
          {/* <img className="skills-icons " src="stacks/MaterialUI.svg" alt="" /> */}
          {/* <img className="skills-icons " src="stacks/Express.png" alt="" /> */}
          <img className="skills-icons " src="stacks/Git.svg" alt="" />
          <img className="skills-icons " src="stacks/Github.svg" alt="" />
          {/* <img className="skills-icons " src="stacks/Graphql.svg" alt="" /> */}
          {/* <img className="skills-icons " src="stacks/MongoDB.svg" alt="" /> */}
          <img className="skills-icons " src="stacks/Vercel.svg" alt="" />
          <img className="skills-icons " src="stacks/mysql.svg" alt="" />


          {/* <img className="skills-icons " src="stacks/ChartJs.svg" alt="" /> */}
          {/* <img className="skills-icons " src="stacks/Bash.svg" alt="" /> */}
          {/* <img className="skills-icons " src="stacks/Docker.svg" alt="" /> */}
          {/* <img className="skills-icons " src="stacks/K8s.svg" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
